/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";
import { auth } from "@/auth";


export const maxDuration = 60;


export async function GET() {
const session = await auth();
  if (!session || !session.user.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
const octokit = new Octokit({auth: session.user.accessToken});
const username = "varundeva"
  try {
    // Fetch user profile
    const { data: user } = await octokit.request("GET /users/{username}", {
      username,
    });

    // Fetch repositories
    const { data: repos } = await octokit.request("GET /users/{username}/repos", {
      username,
      per_page: 100,
    });

    // Fetch starred repositories
    const { data: starred } = await octokit.request("GET /users/{username}/starred", {
      username,
      per_page: 100,
    });

    // Fetch organizations
    const { data: orgs } = await octokit.request("GET /users/{username}/orgs", {
      username,
    });

    // Fetch contribution calendar using GraphQL
    const contributions = await octokit.graphql<{ user: { contributionsCollection: { contributionCalendar: any } } }>(`
      query ($login: String!) {
        user(login: $login) {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `, {
      login: username,
    });

    // Aggregate language stats
    const languageStats: { [key: string]: number } = {};
    for (const repo of repos) {
      if (repo.language) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
      }
    }

    
    return NextResponse.json({ user,
        repos,
        starred,
        orgs,
        contributions: contributions.user.contributionsCollection.contributionCalendar,
        languageStats,});
  } catch (error) {
    console.error(error);
    return NextResponse.json({error: "Failed to fetch GitHub data"  });
   
  }


 
}
