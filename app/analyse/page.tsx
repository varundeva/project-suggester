export const maxDuration = 60;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "next/navigation";
import { analyzeUserSkills } from "@/lib/repoDataAggrigator";
import { fetchReadmeContent } from "@/lib/fetchReadmeContent";
import { getAiSuggestions } from "@/lib/ai";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { auth } from "@/auth"
import type { Metadata } from 'next'

// Define TypeScript interfaces for clarity
interface Repo {
  id: number;
  name: string;
  description: string;
  languages: Record<string, number>;
}

interface GitHubData {
  user: { name: string, login:string };
  repos: Repo[];
}


export const metadata: Metadata = {
  title: "Analyze GitHub Profile | AI-Powered Insights and Suggestions",
  description:
    "View detailed AI-powered analysis of your GitHub profile, including skill insights, personalized project suggestions, and growth opportunities.",
  keywords: [
    "GitHub profile analysis",
    "AI insights for developers",
    "personalized project suggestions",
    "developer skill analysis",
    "GitHub data insights",
    "AI-powered GitHub analysis",
    "GitHub analytics tool",
    "developer growth opportunities",
  ].join(", "),
  openGraph: {
    title: "Analyze GitHub Profile | AI-Powered Insights and Suggestions",
    description:
      "Unlock the potential of your GitHub profile with AI-powered analysis. Discover skill gaps, gain insights, and receive personalized project recommendations.",
    url: "https://project-suggester.vercel.app/analyse",
    type: "website",
    images: [
      {
        url: "https://project-suggester.vercel.app/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Analyze GitHub Profile - AI Insights and Suggestions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Analyze GitHub Profile | AI-Powered Insights and Suggestions",
    description:
      "View AI-driven insights for your GitHub profile, identify skill gaps, and receive tailored project ideas to enhance your skills.",
    images: ["https://project-suggester.vercel.app/og-image.png"], 
  },
};

// Fetch GitHub data
async function fetchGitHubData(accessToken: string): Promise<GitHubData> {
  const res = await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/vnd.github.v3+json",
    },
    next: { revalidate: 60 }, // Optional: ISR to revalidate data every 60 seconds
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  const repos = await res.json();
  const userProfileRes = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!userProfileRes.ok) {
    throw new Error("Failed to fetch user profile");
  }

  const user = await userProfileRes.json();

  return { user, repos };
}

// Fetch README content for a specific repository
async function getReadmeContent(
  userName: string,
  repoName: string,
  accessToken: string,
): Promise<string> {
  return fetchReadmeContent(userName, repoName, accessToken);
}

export default async function DashboardPage() {
  // Fetch session information server-side
  const session = await auth(); // Use next-auth configuration to set this up

  if (!session) {
    redirect('/login'); // Redirect to login if not authenticated
  }

  const accessToken = session?.user?.accessToken;

  try {
    // Fetch GitHub data
    const githubData = await fetchGitHubData(accessToken as string);
   
    // Analyze user repositories
    const repoAggregatedData = await analyzeUserSkills(githubData.repos);

    const readmeContent = await getReadmeContent(
      githubData.user.login, 
      githubData.user.login,
      accessToken as string,
    );

    // Get AI-based suggestions
    const aiResponse = await getAiSuggestions(
      readmeContent,
      repoAggregatedData,
    );
    console.log(aiResponse)
    console.log(readmeContent)
    console.log(repoAggregatedData)
    return (
      <div className="container mx-auto py-8 px-8 lg:px-0 sm:px-4">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {githubData.user.name}
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Here are some tailored insights and project suggestions for you:
      </p>
      <MarkdownRenderer content={aiResponse} />
    </div>
    );
  } catch (error: any) {
    
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-red-500">
          Error: {error.message}
        </h1>
        <p className="text-lg text-gray-700">
          Unable to fetch GitHub data or generate suggestions. Please try again
          later.
        </p>
      </div>
    );
  }
}
