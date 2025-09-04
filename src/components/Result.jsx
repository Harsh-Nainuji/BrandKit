import React from "react";

// Utility: convert **bold** to <strong>
function formatLine(line) {
  return line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

// Utility: check if line contains a hex code
function extractHexColors(text) {
  const hexRegex = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/g;
  return text.match(hexRegex) || [];
}

export default function Result({ result }) {
  if (!result) return null;

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
            {lines.map((line, i) => {
              const colors = extractHexColors(line);

              return (
                <div
                  key={i}
                  className="p-4 transition shadow-inner rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-md"
                >
                  {/* Render formatted text */}
                  <p
                    className="text-sm text-gray-800 break-words md:text-base"
                    dangerouslySetInnerHTML={{ __html: formatLine(line) }}
                  />

                  {/* Show color swatches if hex codes exist */}
                  {colors.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {colors.map((hex, idx) => (
                        <div
                          key={idx}
                          className="w-6 h-6 rounded-full border shadow-sm"
                          style={{ backgroundColor: hex }}
                          title={hex}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
