"use client";
import { Button } from "@/components/ui/button";
import { useSession, signOut  } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { status } = useSession()

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      {/* Logo */}
      <div className="text-lg font-bold">
        <Link href="/">Ai Project Suggester</Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/#features" className="hover:text-gray-300">
          Features
        </Link>
        <Link href="/#how-it-works" className="hover:text-gray-300">
          How It Works
        </Link>
        <Link
              href="/about"
              className="hover:text-gray-300"
            >
              About
            </Link>
        <Link href="/#try-it" className="hover:text-gray-300">
          Try It
        </Link>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">

        {
          status === "authenticated" ? (<Button onClick={() => signOut()}>Sign Out</Button>) : (<Button> <Link href="/login" className="hover:text-gray-300">
            Sign In
          </Link></Button>)
        }
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white shadow-md md:hidden">
          <div className="flex flex-col items-start px-6 py-4 space-y-4">
            <Link
              href="/#features"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#try-it"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Try It
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>


            {
              status === "authenticated" ? (<Button onClick={() => signOut()}>Sign Out</Button>) : (<Button>Sign In</Button>)
            }
          </div>
        </div>
      )}
    </nav>
  );
}
