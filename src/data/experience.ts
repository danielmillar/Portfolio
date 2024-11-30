export interface Experience {
    company: string;
    position: string;
    period: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
    featured: boolean;
}

export const experiences: Experience[] = [
    {
        company: "Freelance",
        position: "Lead Software Engineer",
        period: "2021 - Present",
        description: "Led development of high-concurrency multiplayer game servers generating significant monthly revenue through microtransactions and subscription models.",
        responsibilities: [
            "Architected and maintained distributed game server infrastructure supporting 100+ concurrent users",
            "Led a team of developers in implementing custom game mechanics and server-side features",
            "Optimized server performance and reduced latency by 60% through custom caching solutions",
            "Implemented automated deployment pipelines and monitoring systems",
            "Designed and optimized database architecture for player data and game state management"
        ],
        technologies: ["Java", "Kotlin", "MySQL", "MongoDB", "Redis", "Gradle"],
        featured: true
    }
]; 