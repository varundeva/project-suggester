import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = 
{
  title: "About Project Suggester | Empowering Developers",
  description:
    "Learn more about Project Suggester, the AI-powered platform that analyzes GitHub profiles and provides personalized project suggestions. Our mission is to help developers grow and unlock their full potential.",
  keywords: [
    "About Project Suggester",
    "GitHub analysis tool",
    "developer growth",
    "personalized project suggestions",
    "AI-powered tools for developers",
    "GitHub insights",
    "developer tools",
  ].join(", "),

  openGraph: {
    title: "About Project Suggester | Empowering Developers",
    description:
      "Discover the vision behind Project Suggester, the AI-powered GitHub analysis platform helping developers unlock their full potential with personalized insights and project ideas.",
    url: "https://project-suggester.vercel.app/about",
    type: "website",
    images: [
      {
        url: "https://project-suggester.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Project Suggester - Empowering Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Project Suggester | Empowering Developers",
    description:
      "Learn about the mission and team behind Project Suggester, the AI-powered platform for GitHub profile analysis and personalized project suggestions.",
    images: ["https://project-suggester.vercel.app/og-image.png"],
  },
};


export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Project Suggester
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Empowering developers to unlock their full potential through
            AI-powered insights and personalized project suggestions.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto mb-8">
            At Project Suggester, our mission is to help developers improve
            their skills by analyzing their GitHub profiles, identifying
            opportunities for growth, and providing actionable project
            suggestions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Analyze Profiles
              </h3>
              <p className="text-gray-600">
                Gain insights into your repositories, technologies, and coding
                patterns.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Suggest Projects
              </h3>
              <p className="text-gray-600">
                Get personalized project ideas tailored to your skills and
                interests.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Track Progress
              </h3>
              <p className="text-gray-600">
                Identify skill gaps and focus on areas to grow as a developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Unlock Your Potential?
          </h2>
          <p className="text-lg mb-6">
            Start exploring your GitHub profile and discover your next big
            project with Project Suggester.
          </p>
          <Button className="px-6 py-3 text-lg font-semibold" asChild>
          <Link href="/analyse">Start Now</Link>
        </Button>
        </div>
      </section>
    </div>
  );
}
