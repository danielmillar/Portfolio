import { 
  HiWrench, 
  HiCommandLine, 
  HiComputerDesktop, 
  HiSquares2X2 
} from 'react-icons/hi2';

import { HiCode, HiDatabase } from 'react-icons/hi'

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "IDEs",
    icon: <HiComputerDesktop className="w-5 h-5" />,
    skills: ["IntelliJ IDEA", "Visual Studio Code"]
  },
  {
    title: "Languages",
    icon: <HiCode className="w-5 h-5" />,
    skills: ["JavaScript", "TypeScript", "Java", "Kotlin"]
  },
  {
    title: "Tools & Platforms",
    icon: <HiWrench className="w-5 h-5" />,
    skills: ["Git", "Gradle", "Node.js", "Docker"]
  },
  {
    title: "Operating Systems",
    icon: <HiCommandLine className="w-5 h-5" />,
    skills: ["Windows", "Linux"]
  },
  {
    title: "Databases",
    icon: <HiDatabase className="w-5 h-5" />,
    skills: ["MongoDB", "SQL"]
  },
  {
    title: "Frameworks",
    icon: <HiSquares2X2 className="w-5 h-5" />,
    skills: ["React", "Next.js", "Ktor"]
  }
];

export default function Skills() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div 
            key={category.title}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 