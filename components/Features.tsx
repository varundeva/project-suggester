export default function Features() {
  const features = [
    {
      title: "Comprehensive Profile Analysis",
      description:
        "Dive deep into your GitHub profile with insights on your repositories, most-used technologies, and contribution patterns.",
    },
    {
      title: "AI-Powered Skill Suggestions",
      description:
        "Identify areas for improvement and receive guidance on the latest industry trends to stay ahead.",
    },
    {
      title: "Tailored Project Recommendations",
      description:
        "Receive project ideas that align with your skills and challenge you to learn and grow.",
    },
    {
      title: "Secure and Real-Time Analysis",
      description:
        "Your data is analyzed in real-time and never stored, ensuring complete privacy and security.",
    },
    {
      title: "Collaborate and Share",
      description:
        "Easily share your profile insights and project ideas with peers or potential employers.",
    },
    {
      title: "Get Inspired to Learn",
      description:
        "Explore trending technologies and innovative project ideas to stay motivated in your developer journey.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Project Suggester?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
