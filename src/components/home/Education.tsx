import Link from 'next/link';
import { education } from '@/data/education';
import { HiAcademicCap, HiArrowRight } from 'react-icons/hi';

export default function Education() {
    const featuredEducation = education.filter(edu => edu.featured).slice(0, 2);
    const hasMoreEducation = education.length > 2;

    return (
        <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Education
                </h2>
                {hasMoreEducation && (
                    <Link
                        href="/education"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
                    >
                        View All
                        <HiArrowRight className="w-4 h-4" />
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredEducation.map((edu, index) => (
                    <Link
                        href="/education"
                        key={index}
                    >
                        <div className="h-full p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition cursor-pointer">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                    <HiAcademicCap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm text-blue-600 dark:text-blue-400">
                                        {edu.school} • {edu.period}
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {edu.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {edu.subjects.map((subject, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
                                    >
                                        {subject}
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