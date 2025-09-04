export default function Result({ result }) {
  if (!result) return null;

  // Split result into lines (if your AI returns structured data, adjust accordingly)
  const lines = result.split("\n").filter(Boolean);

  return (
    <section id="result" className="px-6 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 space-y-6 bg-white shadow-xl rounded-3xl">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl">
              <span className="text-2xl text-indigo-600">✨</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Your Brand Kit</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {lines.map((line, i) => (
              <div
                key={i}
                className="p-4 transition shadow-inner rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-md"
              >
                <p className="text-sm text-gray-800 break-words md:text-base">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
