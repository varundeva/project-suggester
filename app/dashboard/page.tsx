/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [data, setData] = useState<{
    user: any;
    repos: any[];
    starred: any[];
    orgs: any[];
    contributions: any;
    languageStats: { [key: string]: number };
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/github-data`);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="min-h-full">Loading...</div>;
  }

  if (!data) {
    return <div className="min-h-full">Error loading data. Please try again later.</div>;
  }
console.log(data)
  const { user, repos, starred, contributions, languageStats } = data;

  // Prepare data for charts
  const languageLabels = Object.keys(languageStats || {});
  const languageCounts = Object.values(languageStats || {});

  return (
    <div className="container mx-auto py-10 px-6">

      {/* User Profile Section */}
      <Image
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full mr-4"
        width={64}
        height={64}
      />
        <div>
          <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Language Stats */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Language Usage</h3>
          <Bar
            data={{
              labels: languageLabels,
              datasets: [
                {
                  label: "Repositories using language",
                  data: languageCounts,
                  backgroundColor: "rgba(75, 192, 192, 0.2)",
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
              },
            }}
          />
        </div>

        {/* Contribution Calendar */}
        {contributions?.weeks ? (
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Contribution Calendar</h3>
            <div className="grid grid-cols-7 gap-1">
              {contributions.weeks.map((week: { contributionDays: any[]; }, weekIndex: any) =>
                week.contributionDays.map((day: { contributionCount: number; date: any; }, dayIndex: any) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-4 h-4 ${
                      day.contributionCount > 0
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                    title={`${day.date}: ${day.contributionCount} contributions`}
                  />
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Contribution Calendar</h3>
            <p className="text-gray-600">No contribution data available.</p>
          </div>
        )}
      </div>

      {/* Repository Insights */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Repositories</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id} className="mb-4">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {repo.name}
              </a>{" "}
              - {repo.stargazers_count} ⭐
            </li>
          ))}
        </ul>
      </div>

      {/* Starred Repositories */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Starred Repositories</h3>
        <ul>
          {starred.map((repo) => (
            <li key={repo.id} className="mb-4">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
