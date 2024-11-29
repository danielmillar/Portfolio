import { GithubIcon, Globe } from 'lucide-react';
import { Project, projects } from '@/data/projects';

export default function Projects() {
  const featuredProjects = projects
    .filter(project => project.featured)
    .slice(0, 4);
  
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Featured Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, technologies, languages, github, liveUrl }: Project) {
  return (
    <div className="group rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition">
      <div className="flex flex-col h-full">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {description}
        </p>
        
        <div className="space-y-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Languages */}
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full"
              >
                {lang}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-2">
            {github && (
              <a 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <GithubIcon className="w-5 h-5 mr-2" />
                <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Globe className="w-5 h-5 mr-2" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 