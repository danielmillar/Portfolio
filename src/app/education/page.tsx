import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import { Education, education } from '@/data/education';

export default function EducationPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <Navigation />
            <main className="flex-grow max-w-7xl mx-auto px-4 pt-24 pb-20 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Education
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        My academic journey and qualifications.
                    </p>
                </div>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <EducationCard key={index} {...edu} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

function EducationCard({ school, degree, period, description, achievements, subjects }: Education) {
    return (
        <div className="group rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition">
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {degree}
                        </h2>
                        <p className="text-blue-600 dark:text-blue-400">{school}</p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                        {period}
                    </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400">
                    {description}
                </p>

                <div className="space-y-2">
                    <h3 className="font-medium text-gray-900 dark:text-white">Key Achievements:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        {achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                    {subjects.map((subject, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full"
                        >
                            {subject}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
} 