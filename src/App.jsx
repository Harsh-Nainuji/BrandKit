import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import BrandForm from "./components/BrandForm";
import Result from "./components/Result";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { generateBrandKit } from "./utils/gemini";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate(data) {
    setLoading(true);
    setResult("");
    try {
      const output = await generateBrandKit(data);
      setResult(output);
    } catch (err) {
      setResult("Error generating brand kit. Check console.");
      console.error(err);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 scroll-smooth">
      <Header />
      <main >
        <Hero />
        <About />
        <HowItWorks />
        <div id="form">
          <BrandForm onSubmit={handleGenerate} />
        </div>
        {loading && <p className="mt-4 text-center">Generating...</p>}
        <div id="result">
          <Result result={result} />
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
