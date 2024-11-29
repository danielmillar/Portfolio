export interface Project {
  title: string;
  description: string;
  technologies: string[];
  languages: string[];
  github?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my journey as a software engineer. A clean, modern space to share my projects and professional experience.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/danielmillar/portfolio",
    liveUrl: "https://danielmillar.dev",
    featured: true
  },
  {
    title: "SkASWM",
    description: "A Skript add-on for interacting with AdvancedSlimeWorldManager (ASWM). Created as a learning experience in developing Skript addons, providing integration between Skript and ASWM for Minecraft servers.",
    technologies: ["Skript", "ASWM", "Gradle"],
    languages: ["Kotlin"],
    github: "https://github.com/danielmillar/SkASWM",
    featured: true
  },
]; 