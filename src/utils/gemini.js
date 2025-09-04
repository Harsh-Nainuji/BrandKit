// src/utils/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const MAX_REQUESTS_PER_DAY = 3;

function getTodayKey() {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  return `brandkit_requests_${today}`;
}

function getRequestCount() {
  const count = localStorage.getItem(getTodayKey());
  return count ? parseInt(count, 10) : 0;
}

function incrementRequestCount() {
  const key = getTodayKey();
  const count = getRequestCount() + 1;
  localStorage.setItem(key, count.toString());
}

export async function generateBrandKit({ idea, industry, style }) {
  if (getRequestCount() >= MAX_REQUESTS_PER_DAY) {
    alert(`❌ Daily limit reached (${MAX_REQUESTS_PER_DAY}). Try again tomorrow.`);
    throw new Error("Daily limit reached");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Shorter prompt = fewer tokens
  const prompt = `
Generate a mini brand kit:
- Brand name (short)
- Color palette (3 hex codes)
- 1–2 line description
- Call to action

Idea: ${idea}
Industry: ${industry}
Style: ${style}
  `;

  const result = await model.generateContent(prompt);

  incrementRequestCount();

  return result.response.text();
}
