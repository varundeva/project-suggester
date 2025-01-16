import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold">
          Discover Your Next Big Project
        </h1>
        <p className="mt-6 text-lg md:text-2xl font-light">
          Analyze your GitHub profile, identify skill gaps, and let AI suggest
          personalized projects to help you grow.
        </p>
        <div className="mt-8 space-x-4">
          <Button asChild>
            <Link href="/analyse">Get Started Now</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#features">Explore Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
