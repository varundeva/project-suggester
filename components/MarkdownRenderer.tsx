import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; 

interface MarkdownRendererProps {
  content: string | null;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  if (!content) {
    return <p>No content to display.</p>;
  }
console.log(content)
  return (
    <section className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Enable GitHub-flavored markdown
        rehypePlugins={[rehypeRaw]} // Enable raw HTML rendering (optional)
      >
        {content}
      </ReactMarkdown>
    </section>
  );
};

export default MarkdownRenderer;
