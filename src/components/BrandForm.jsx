import { useState } from "react";

export default function BrandForm({ onSubmit }) {
  const [idea, setIdea] = useState("");
  const [industry, setIndustry] = useState("");
  const [style, setStyle] = useState("Minimal");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ idea, industry, style });
  }

  return (
    <section id="form" className="px-6 py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Disclaimer */}
        <p className="mb-6 text-sm text-center text-gray-500">
          Note: Each user is limited to 3 requests per day. Please use responsibly.
        </p>

        <h2 className="mb-10 text-3xl font-bold text-center text-gray-900">Create Your Brand Kit</h2>
        <form
          onSubmit={handleSubmit}
          className="p-10 space-y-6 bg-white border border-gray-100 shadow-lg rounded-3xl"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Describe your idea</label>
            <textarea
              className="w-full p-4 transition-all border-2 border-gray-200 resize-none rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              placeholder="Describe your idea..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Industry</label>
            <input
              className="w-full p-4 transition-all border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              placeholder="e.g. fintech, fashion, healthcare"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Style Preference</label>
            <select
              className="w-full p-4 transition-all border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option>Minimal</option>
              <option>Classic</option>
              <option>Modern</option>
              <option>Playful</option>
              <option>Witty</option>
              <option>Serious</option>
              <option>Dark</option>
              <option>Grayscale</option>
              <option>Pastel</option>
              <option>Vibrant</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-4 font-semibold text-white transition-transform shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl hover:from-indigo-600 hover:to-purple-600 hover:scale-105"
          >
            Generate Brand Kit
          </button>
        </form>
      </div>
    </section>
  );
}
