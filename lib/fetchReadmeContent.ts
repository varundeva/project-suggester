/**
 * Fetches the README.md content from a GitHub repository, decodes it, and converts it to plain text.
 *
 * @param username - GitHub username
 * @param repoName - GitHub repository name
 * @param accessToken - Optional: GitHub access token for private repos or higher rate limits
 * @returns The plain text content of the README.md file
 */
export async function fetchReadmeContent(
  username: string,
  repoName: string,
  accessToken: string,
): Promise<string> {
  const readmeUrl = `https://api.github.com/repos/${username}/${repoName}/readme`;

  try {
    // Fetch the README content from the GitHub API
    const response = await fetch(readmeUrl, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${accessToken}`, // Optional: Use for private repos or higher rate limits
      },
    });

    // Check for errors in the HTTP response
    if (!response.ok) {
      throw new Error(
        response.status === 404
          ? "README.md not found in the specified repository."
          : `Failed to fetch README.md: ${response.statusText}`,
      );
    }

    // Parse and decode the README content
    const data = await response.json();
    const markdownContent = Buffer.from(data.content, "base64").toString(
      "utf-8",
    );

    // Convert Markdown to plain text
    const plainTextContent = markdownContent
      .replace(/<img[^>]*alt=["']([^"']*)["'][^>]*>/gi, (_, alt) => alt || "") // Replace <img> with alt text
      .replace(/<\/?[^>]+(>|$)/g, "") // Remove all HTML tags
      .replace(/https?:\/\/[^\s]+/g, "") // Remove URLs
      .replace(/&nbsp;/g, " ") // Decode HTML entities like `&nbsp;`
      .replace(/\s+/g, " ") // Collapse multiple spaces into one
      .trim(); // Trim leading/trailing whitespace

    return plainTextContent;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error processing README:", error.message);
    }
    return ""; // Return empty string if an error occurs
  }
}
