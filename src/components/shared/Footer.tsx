export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Daniel Millar. All rights reserved.
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Built with Next.js, Tailwind CSS, and ♥️
          </div>
        </div>
      </div>
    </footer>
  );
} 