export interface Education {
    school: string;
    degree: string;
    period: string;
    description: string;
    achievements: string[];
    subjects: string[];
    featured: boolean;
}

export const education: Education[] = [
    {
        school: "Edinburgh Napier University",
        degree: "BEng (Hons) Software Engineering",
        period: "2023 - Present",
        description: "Advanced software engineering program focusing on mainstream and emerging software development, implementation and evolution. Joined directly into Year 3 through articulation from HND.",
        achievements: [
            "Studying artificial intelligence and data analytics",
            "Developing software using industry-standard methodologies",
            "Working on group projects with industrial clients",
            "Learning secure software development practices",
            "Gaining expertise in software architecture and agile project management"
        ],
        subjects: [
            "Artificial Intelligence",
            "Data Analytics",
            "Software Engineering",
            "Software Architecture",
            "Secure Software Development",
            "Agile Project Management",
            "Concurrent & Parallel Systems",
            "Multi-Agent Systems"
        ],
        featured: true
    },
    {
        school: "Glasgow Clyde College",
        degree: "HND Software Engineering with Emerging Technologies",
        period: "2021 - 2023",
        description: "Completed comprehensive software engineering program covering various aspects of software development, from fundamental programming concepts to emerging technologies like AI and cloud computing.",
        achievements: [
            "Gained expertise in object-oriented programming and analysis",
            "Developed secure applications following industry standards",
            "Created web applications with focus on reactivity and accessibility",
            "Worked with data structures and scalable application design",
            "Studied emerging technologies including AI, cloud computing, and big data"
        ],
        subjects: [
            "Programming Fundamentals",
            "Object-Oriented Programming",
            "Web Development",
            "Software Security",
            "Data Structures",
            "Emerging Technologies",
            "Cloud Computing",
            "Artificial Intelligence"
        ],
        featured: true
    }
]; 