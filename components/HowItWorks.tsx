export default function HowItWorks() {
    const steps = [
        {
          step: "1",
          title: "Connect Your GitHub",
          description:
            "Authenticate with your GitHub profile to allow us to analyze your repositories and contribution history.",
        },
        {
          step: "2",
          title: "Get Instant Insights",
          description:
            "View detailed analytics about your skills, languages, and most-used technologies.",
        },
        {
          step: "3",
          title: "Receive Project Ideas",
          description:
            "AI generates tailored project suggestions to enhance your skills and explore new challenges.",
        },
        {
          step: "4",
          title: "Analyze with Privacy",
          description:
            "All analysis happens in real-time without storing any of your data, ensuring complete security and peace of mind.",
        },
      ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="mt-4 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
