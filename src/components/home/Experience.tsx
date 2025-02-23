import Link from 'next/link';
import { experiences } from '@/data/experience';
import { HiBriefcase, HiArrowRight } from 'react-icons/hi2';

export default function Experience() {
    const featuredExperiences = experiences.filter(exp => exp.featured).slice(0, 2);
    const hasMoreExperiences = experiences.length > 2;

    return (
        <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Professional Experience
                </h2>
                {hasMoreExperiences && (
                    <Link
                        href="/experience"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
                    >
                        View All
                        <HiArrowRight className="w-4 h-4" />
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredExperiences.map((experience, index) => (
                    <Link
                        href={`/experience#${experience.company}`}
                        key={index}
                    >
                        <div
                            className="h-full p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition cursor-pointer"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                    <HiBriefcase className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">
                                        {experience.position}
                                    </h3>
                                    <p className="text-sm text-blue-600 dark:text-blue-400">
                                        {experience.company} • {experience.period}
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {experience.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-sm bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
} 