import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TryIt from "@/components/TryIt";
import HowItWorks from "@/components/HowItWorks";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Ai Project Suggester | Unlock Your GitHub Potential",
  description:
    "Project Suggester analyzes your GitHub profile and provides AI-powered insights and personalized project suggestions to help you grow as a developer.",
  keywords: [
    "GitHub analyzer",
    "AI project suggestions",
    "developer tools",
    "GitHub insights",
    "programming growth",
    "GitHub profile analysis",
    "project ideas",
    "GitHub analytics",
    "developer skills improvement",
  ].join(", "),
  openGraph: {
    title: "Ai Project Suggester | Unlock Your GitHub Potential",
    description:
      "Analyze your GitHub profile and discover personalized project suggestions powered by AI. Start growing your skills today.",
    url: "https://project-suggester.vercel.app",
    type: "website",
    images: [
      {
        url: "https://project-suggester.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ai Project Suggester - Analyze Your GitHub Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ai Project Suggester | Unlock Your GitHub Potential",
    description:
      "Discover your next big project with AI-powered GitHub analysis and personalized suggestions.",
    images: ["https://project-suggester.vercel.app/og-image.png"], 
  },
};
 
export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <TryIt />
    </div>
  );
}
