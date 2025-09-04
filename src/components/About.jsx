import { FiCpu, FiZap, FiTarget } from "react-icons/fi";

export default function About() {
  const features = [
    {
      icon: <FiCpu className="w-6 h-6 text-white" />,
      title: "AI-Powered",
      text: "Advanced AI generates unique brand elements",
      bg: "bg-blue-50",
      iconBg: "bg-blue-600",
    },
    {
      icon: <FiZap className="w-6 h-6 text-white" />,
      title: "Instant Results",
      text: "Get your complete brand kit in seconds",
      bg: "bg-purple-50",
      iconBg: "bg-purple-600",
    },
    {
      icon: <FiTarget className="w-6 h-6 text-white" />,
      title: "Tailored",
      text: "Customized to your industry and style",
      bg: "bg-green-50",
      iconBg: "bg-green-600",
    },
  ];

  return (
    <section id="about" className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold text-gray-900">About BrandKit AI</h2>
        <p className="max-w-3xl mx-auto mb-12 text-xl text-gray-600">
          BrandKit AI helps founders quickly generate names, colors, bios, and calls to action
          tailored to their idea, industry, and aesthetic style.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`${f.bg} p-8 rounded-2xl shadow-lg hover:shadow-xl transition`}
            >
              <div
                className={`flex items-center justify-center w-14 h-14 mx-auto mb-4 ${f.iconBg} rounded-lg`}
              >
                {f.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-700">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
