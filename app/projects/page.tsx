import { Github } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Python RAG with Langchain",
      emoji: "🔍",
      description: "Retrieval Augmented Generation (RAG) chatbot system that allows you to ask questions about your documents using local LLM models (Ollama) or cloud models (OpenRouter).",
      github: "https://github.com/zakantonio/python-rag-langchain",
      tech: ["Python", "LangChain", "Ollama", "OpenRouter", "RAG", "Gradio"],
    },   
    {
      title: "Flutter RAG OpenAI",
      emoji: "🔍",
      description: "A simple demo of a Flutter application that implements Retrieval-Augmented Generation (RAG) using OpenAI's APIs.",
      github: "https://github.com/zakantonio/flutter-rag-openai",
      tech: ["Flutter", "OpenAI", "RAG", "Vector Stores"],
    },
    {
      title: "Jaison",
      emoji: "📄",
      description: "Jaison is a platform that leverages multimodal LLMs to extract structured information from document images.",
      github: "https://github.com/zakantonio/jaison",
      tech: ["Python", "React", "OpenRouter", "FastAPI", "Supabase"],
    },
    {
      title: "Market Assistant",
      emoji: "🛒",
      description:
        "AI-powered tool to help users find products and suggest recipes based on available ingredients.",
      github: "https://github.com/zakantonio/MarketAssistant-mvp",
      tech: ["Python", "Whisper", "Ollama", "FastAPI", "Docker"],
    },
    {
      title: "AvatarGen",
      emoji: "🎨",
      description:
        "Custom ComfyUI node that transforms user photos into stylized character avatars.",
      github: "https://github.com/zakantonio/AvatarGen-experience",
      tech: ["Python", "ComfyUI", "Stable Diffusion"],
    },
    {
      title: "arXiv Assistant",
      emoji: "📚",
      description:
        "Simple assistant interface that helps summarize papers from arXiv and chat with them.",
      github: "https://github.com/zakantonio/arXiv-research-assistant",
      tech: ["Python", "LangChain", "OpenAI", "Streamlit"],
    },
  ];

  return (
    <main className="relative min-h-screen max-w-3xl mx-auto px-4 py-12 md:px-8 md:py-24">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <div className="grid gap-8">
          <p className="text-muted-foreground italic">
            Here are some of my ongoing open-source projects, crafted as I dive
            deep into AI and GenAI, blending learning with hands-on innovation.
          </p>
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.github}
              target="_blank"
              className="group rounded-lg border border-foreground/10 p-6 transition-colors hover:border-foreground/20 hover:bg-foreground/5 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  {project.emoji} {project.title}
                  <span className="inline-block transition-transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100">
                    →
                  </span>
                </h3>
                <Github className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-foreground/10 text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
