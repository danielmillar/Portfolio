import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import { Experience, experiences } from '@/data/experience';

export default function ExperiencePage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <Navigation />
            <main className="flex-grow max-w-7xl mx-auto px-4 pt-24 pb-20 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Professional Experience
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        My professional journey and the impactful roles I&apos;ve held throughout my career.
                    </p>
                </div>

                <div className="space-y-8 relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                    
                    {experiences.map((experience, index) => (
                        <ExperienceCard 
                            key={index} 
                            {...experience} 
                            isFirst={index === 0}
                            isLast={index === experiences.length - 1}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

function ExperienceCard({ 
    company, 
    position, 
    period, 
    description, 
    responsibilities, 
    technologies,
    isFirst,
    isLast 
}: Experience & { isFirst: boolean; isLast: boolean }) {
    return (
        <div id={company} style={{ scrollMarginTop: '100px' }} className="group rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition relative">
            <div className="absolute left-[-12px] top-8 w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center">
                {isFirst ? (
                    <span className="text-white text-sm">▲</span>
                ) : isLast ? (
                    <span className="text-white text-sm">▼</span>
                ) : (
                    <div className="w-3 h-3 rounded-full bg-white" />
                )}
            </div>

            <div className="flex flex-col space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {position}
                        </h2>
                        <p className="text-blue-600 dark:text-blue-400">{company}</p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                        {period}
                    </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400">
                    {description}
                </p>

                <div className="space-y-2">
                    <h3 className="font-medium text-gray-900 dark:text-white">Key Responsibilities:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        {responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
} 