"use client";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TryIt from "@/components/TryIt";
import HowItWorks from "@/components/HowItWorks";

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
