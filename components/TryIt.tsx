"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TryIt() {
  return (
    <section id="try-it" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Explore Your GitHub Profile?
        </h2>
        <p className="mt-4 text-lg">
          Dive into insights about your repositories, skills, and contributions.
          Let AI suggest your next big project!
        </p>
        <Button className="mt-6" asChild>
          <Link href="/analyse">Try It Now</Link>
        </Button>
      </div>
    </section>
  );
}
