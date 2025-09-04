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
  // Check daily limit
  if (getRequestCount() >= MAX_REQUESTS_PER_DAY) {
    throw new Error(
      `Daily request limit reached (${MAX_REQUESTS_PER_DAY}). Please try again tomorrow.`
    );
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
You are a brand consultant. Based on the founder's input, generate a simple brand kit:
- A short and catchy **brand name**
- A suggested **color palette** (3 colors with hex codes)
- A **short bio/description**
- A strong **call to action**

Founder Idea: ${idea}
Industry: ${industry}
Style: ${style}
Keep it concise.
  `;

  const result = await model.generateContent(prompt);

  // Increment request count after successful generation
  incrementRequestCount();

  return result.response.text();
}
