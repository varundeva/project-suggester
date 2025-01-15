export const getAiSuggestions = async (
  readmeContent: string,
  reposData: object,
) => {
  const prompt = `
Context: You are an experienced technical advisor specializing in analyzing GitHub profiles to provide actionable skill improvement suggestions. Your goal is to suggest innovative projects tailored to the user's skills and interests, avoiding overlap with existing repositories.

Task: Analyze the user's GitHub README and repository data to:
1. Summarize their skills, interests, and strengths.
2. Identify 3-5 areas for skill improvement with explanations.
3. Suggest 5-10 unique project ideas to enhance their skills further:
   - Projects must align with their skillset but introduce new challenges.
   - Avoid projects similar to existing repositories.

README Content:
${readmeContent}

Repository Data:
${JSON.stringify(reposData)}

Output Requirements:
- Briefly summarize the user's skills and strengths.
- List 3-5 skill improvement suggestions with explanations.
- Suggest 5-10 tailored projects with a goal and benefits for each.
- Use an encouraging tone.
- Include more emojis and bullet points for clarity.
- Provide Space between sections, and use headings for each section.
`.trim();
  console.log(prompt)
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "HTTP-Referer": "Project Suggester",
      "X-Title": "Project Suggester",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "microsoft/phi-3-mini-128k-instruct:free",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  const { choices } = await res.json();

  return choices[0].message.content.trim();
};
