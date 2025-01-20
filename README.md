# Project Suggester 🎯

Unlock your GitHub potential with **Project Suggester**! This open-source project analyzes GitHub profiles using AI to provide tailored insights, identify skill gaps, and suggest personalized project ideas to help developers grow.

## 🌟 Features

- **AI-Powered Analysis**: Get an in-depth analysis of your GitHub repositories, contributions, and skills.
- **Personalized Project Suggestions**: Receive project ideas based on your skillset, interests, and GitHub activity.
- **Language Insights**: Discover your most-used programming languages and skill trends.
- **Growth Suggestions**: Identify areas for improvement and focus on essential skills for your development journey.

## 🛠️ Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Auth.js (formerly NextAuth)](https://authjs.dev/)
- **Backend**: GitHub REST API, GitHub GraphQL API, GitHub OAuth
- **AI**: OpenAI for personalized suggestions
- **Hosting**: Vercel (or your hosting service)
- **Utilities**: TypeScript for type safety

## 🚀 Installation and Setup

Follow these steps to run the project locally:

### Prerequisites

1. Node.js (>= 16.x)
2. GitHub personal access token (for API requests)
3. OpenAI API key (optional for AI suggestions) Here used OpenRouter

### Steps

1. Clone the Repository:

   ```bash
   git clone https://github.com/your-username/project-suggester.git
   cd project-suggester
   ```
2. Install Dependencies:
    ```bash
    npm install
    ```

3. Create a .env.local File:

    ```plaintext
    GITHUB_CLIENT_ID=your_github_client_id
    GITHUB_CLIENT_SECRET=your_github_client_secret
    NEXTAUTH_SECRET=your_nextauth_secret
    OPENROUTER_API_KEY=your_openai_api_key (optional)
    ```
4. Run the Development Server:

    ```bash
    npm run dev
    ```

5.  Open http://localhost:3000 in your browser to see the application.

## 🧩 How It Works
1. Login with GitHub: Authenticate securely with your GitHub account.
2. Profile Analysis: The app fetches your GitHub profile and repositories using GitHub APIs.
3. AI Suggestions: AI analyzes your profile and provides personalized project ideas.
4. Suggestions: Focus on growth opportunities based on AI recommendations.

## 🤝 Contribution Guidelines
Contributions are welcome! Here's how you can get started:
1. Fork the repository:
   - Click the Fork button at the top right of this repository.
2. Clone your fork:
    ```bash
    git clone https://github.com/your-username/project-suggester.git
    cd project-suggester
    ```
3. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Make your changes:
   - Follow the project's coding standards.
   - Ensure your changes are properly tested.
5. Commit your changes:
    ```bash
    git commit -m "Add your meaningful commit message"
    ```
6. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
    ```
7. Open a Pull Request:
   - Go to your forked repository on GitHub.
   - Click New Pull Request and provide a detailed description of your changes.

## 🛡️ License
This project is licensed under the MIT License. See the LICENSE file for details.

## 💡 Ideas for Contributions
Here are some areas where you can contribute:
- Add new features (e.g., more analytics or visualization tools).
- Improve the UI/UX design.
- Optimize API calls for better performance.
- Add support for more authentication methods.
- Enhance documentation.

## 🙌 Acknowledgments
Special thanks to all contributors and the amazing open-source tools that made this project possible:
- GitHub API
- Next.js
- Tailwind CSS
- OpenAI
- AuthJs


