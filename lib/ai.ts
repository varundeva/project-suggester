export const getAiSuggestions = async (
  readmeContent: string,
  reposData: object,
) => {
  const prompt = `
  Context: You are an expert technical mentor specializing in analyzing GitHub profiles and providing actionable career and skill-building advice. Your goal is to help the user grow their skills by suggesting personalized, innovative project ideas and skill improvement areas, while avoiding redundancy with existing repositories.
  
  Task: Based on the user's GitHub README and repository data:
  1. **Summarize Skills and Strengths**:
     - Highlight their technical skills, programming languages, tools, and frameworks.
     - Identify key strengths based on repositories and README content.
     - Mention any notable achievements (e.g., stars, forks, unique topics).
  
  2. **Identify Skill Improvement Areas**:
     - Recommend 3-5 areas for improvement with detailed explanations.
     - Suggest learning goals that align with industry trends or broaden expertise.
     - Highlight gaps or lesser-used technologies from their profile.
  
  3. **Suggest 5-10 Project Ideas**:
     - Provide creative and practical project ideas that:
       - Utilize their current skillset while introducing new challenges.
       - Avoid already created project which is in topics list.
       - Encourage learning of new tools, frameworks, or problem-solving techniques.
     - For each project, include:
       - **Goal**: The purpose of the project.
       - **Skills to Learn**: Specific skills or technologies the project enhances.
       - **Benefits**: How it helps their growth or career.
  4. **Additional Notes**:
      - Include any motivational messages or career advice.
      - Tailor suggestions to the user's skill level and interests.
  
  README Content:
  ${readmeContent}
  
  Repository Data:
  ${JSON.stringify(reposData)}
  
  Output Requirements:
  - Use headings to organize the output: **Skills and Strengths**, **Skill Improvement Suggestions**, **Project Ideas**.
  - Provide clear, concise points with bullet lists and emojis for readability.
  - Use an encouraging tone and include motivational notes where possible.
  - Ensure each section has proper spacing for clarity.
  - Tailor recommendations to the user’s skill level and interests.
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
      model: "google/gemma-2-9b-it:free",
      // models:[
      // "google/gemma-2-9b-it:free",
      // "mistralai/mistral-7b-instruct:free",
      // "huggingfaceh4/zephyr-7b-beta:free",
      // "gryphe/mythomax-l2-13b:free",
      // "undi95/toppy-m-7b:free",
      // "meta-llama/llama-3.2-1b-instruct:free",
      // "meta-llama/llama-3.1-70b-instruct:free",
      // "qwen/qwen-2-7b-instruct:free"
      // ],
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      stream:false
    }),
  });

  const { choices } = await res.json();

  return choices[0].message.content.trim();
};
