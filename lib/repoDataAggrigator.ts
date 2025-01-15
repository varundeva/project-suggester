/* eslint-disable @typescript-eslint/no-explicit-any */
export async function analyzeUserSkills(repos: any[]): Promise<{
  languageStats: Record<string, number>;
  totalStars: number;
  totalForks: number;
  topics: string[];
}> {
  const languageStats: Record<string, number> = {};
  let totalStars = 0;
  let totalForks = 0;
  const allTopics: string[] = [];

  for (const repo of repos) {

    // Handle both `languages` (object) and `language` (string)
    if (repo.languages) {
      Object.entries(repo.languages).forEach(([language, size]) => {
        languageStats[language] =
          (languageStats[language] || 0) + (size as number);
      });
    } else if (repo.language) {
      // Add the single language (string) with a default size of 1
      languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
    }

    // Aggregate stars and forks
    totalStars += repo.stargazers_count || 0;
    totalForks += repo.forks_count || 0;

    // Collect topics
    if (repo.topics && Array.isArray(repo.topics)) {
      allTopics.push(...repo.topics);
    }
  }

  // Deduplicate topics
  const uniqueTopics = [...new Set(allTopics)];

  return {
    languageStats,
    totalStars,
    totalForks,
    topics: uniqueTopics,
  };
}
