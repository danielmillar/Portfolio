import Navigation from '@/components/shared/Navigation';

export const runtime = "edge";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-12rem)]">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            This page could not be found.
          </p>
          <a 
            href="/"
            className="mt-8 px-6 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-full hover:opacity-90 transition-all duration-300"
          >
            Return Home
          </a>
        </div>
      </main>
    </div>
  );
}
