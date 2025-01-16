import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section id="try-it" className="py-20 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Take Your Skills to the Next Level?
        </h2>
        <p className="text-lg mb-8">
          Start exploring your GitHub profile and discover your potential with
          AI-powered suggestions. Let’s build your next big project!
        </p>
        <Button className="px-6 py-3 text-lg font-semibold" asChild>
          <Link href="/analyse">Start Now</Link>
        </Button>
      </div>
    </section>
  );
}
