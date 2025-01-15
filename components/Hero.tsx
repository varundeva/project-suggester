"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-800 text-white py-20 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Unleash Your GitHub Potential
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Analyze your GitHub profile and receive AI-powered project suggestions
          tailored to your skills.
        </p>
        <div className="mt-6 space-x-4">
          <Button asChild>
            <Link href="/analyse">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
