export default function Features() {
  const features = [
    {
      title: "Analyze Your Repositories",
      description:
        "Discover the languages and technologies you use the most with detailed analytics from your repositories.",
    },
    {
      title: "AI-Powered Suggestions",
      description:
        "Get custom project ideas based on your skillset and GitHub activity.",
    },
    {
      title: "Track Your Growth",
      description:
        "Monitor your contribution history and measure your development over time.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features You&apos;ll Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
