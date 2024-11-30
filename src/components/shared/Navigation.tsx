'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Daniel Millar
          </Link>
          
          <div className="flex gap-6">
            <Link 
              href="/" 
              className={`${
                pathname === '/' 
                  ? 'text-blue-500 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              } transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className={`${
                pathname === '/projects' 
                  ? 'text-blue-500 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              } transition-colors`}
            >
              Projects
            </Link>
            <Link 
              href="/experience" 
              className={`${
                pathname === '/experience' 
                  ? 'text-blue-500 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              } transition-colors`}
            >
              Experience
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 