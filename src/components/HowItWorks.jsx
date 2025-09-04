export default function HowItWorks() {
    const steps = [
      {
        title: "1. Describe Your Idea",
        text: "Tell us about your startup vision in just a few words.",
        color: "bg-blue-50",
      },
      {
        title: "2. Choose Industry & Style",
        text: "Select your industry and pick an aesthetic that fits your brand.",
        color: "bg-purple-50",
      },
      {
        title: "3. Generate Your Brand Kit",
        text: "Our AI creates a unique name, colors, bio, and call-to-action.",
        color: "bg-pink-50",
      },
      {
        title: "4. Launch With Confidence",
        text: "Use your new kit to start pitching, building, and growing.",
        color: "bg-green-50",
      },
    ];
  
    return (
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-gray-900">How It Works</h2>
  
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`${step.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition`}
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  