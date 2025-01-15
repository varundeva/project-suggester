"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <div className="text-lg font-bold">
        <Link href="/">GitHub Analyzer</Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href="/#features" className="hover:text-gray-300">
          Features
        </Link>
        <Link href="/#try-it" className="hover:text-gray-300">
          Try It
        </Link>
        <Link href="/analyse" className="hover:text-gray-300">
          Analyse
        </Link>
      </div>
      <Button asChild className="md:hidden">
        <Link href="/analyse">Get Started</Link>
      </Button>
    </nav>
  );
}
