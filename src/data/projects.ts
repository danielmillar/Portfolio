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
    title: "SpaceX Launch Advisory",
    description: "A real-time dashboard displaying SpaceX launch advisories from the FAA. Features live updates, interactive launch window details, and filtering capabilities for active and past launches.",
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    languages: ["TypeScript", "JavaScript"],
    github: "https://github.com/danielmillar/portfolio",
    liveUrl: "https://danielmillar.dev/spacex",
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my journey as a software engineer. A clean, modern space to share my projects and professional experience.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/danielmillar/portfolio",
    liveUrl: "https://danielmillar.dev",
    featured: false
  },
  {
    title: "SkASWM",
    description: "A Skript add-on for interacting with AdvancedSlimeWorldManager (ASWM). Created as a learning experience in developing Skript addons, providing integration between Skript and ASWM for Minecraft servers.",
    technologies: ["Skript", "ASWM", "Gradle"],
    languages: ["Kotlin"],
    github: "https://github.com/danielmillar/SkASWM",
    featured: false
  },
  {
    title: "KwikMedical",
    description: "A prototype medical system for emergency dispatch and ambulance management. Built with a focus on software architecture and system design patterns.",
    technologies: ["React", "React Native", "Ktor"],
    languages: ["TypeScript", "JavaScript", "Kotlin"],
    featured: true
  },
];