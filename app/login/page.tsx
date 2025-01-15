"use client";

import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/analyse"); // Redirect to dashboard if already logged in
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to GitHub Analyzer</h1>
        <p className="text-lg">
          Sign in with your GitHub account to unlock insights and AI-powered
          suggestions.
        </p>
        <Button
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-lg"
          onClick={() => signIn("github")}
        >
          Login with GitHub
        </Button>
      </div>
    </div>
  );
}
