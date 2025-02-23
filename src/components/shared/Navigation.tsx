'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenu, HiX, HiSparkles } from 'react-icons/hi';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>

          <div className="hidden md:flex gap-6">
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
            <Link 
              href="/education" 
              className={`${
                pathname === '/education' 
                  ? 'text-blue-500 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              } transition-colors`}
            >
              Education
            </Link>
            <Link 
              href="/spacex" 
              className={`group relative flex items-center gap-2 ${
                pathname === '/spacex' 
                  ? 'text-blue-500 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              } transition-colors`}
            >
              <span>SpaceX</span>
              <HiSparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="absolute -top-1 -right-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              href="/" 
              className={`block ${
                pathname === '/' 
                  ? 'text-blue-500 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              } transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className={`block ${
                pathname === '/projects' 
                  ? 'text-blue-500 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              } transition-colors`}
            >
              Projects
            </Link>
            <Link 
              href="/experience" 
              className={`block ${
                pathname === '/experience' 
                  ? 'text-blue-500 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              } transition-colors`}
            >
              Experience
            </Link>
            <Link 
              href="/education" 
              className={`block ${
                pathname === '/education' 
                  ? 'text-blue-500 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              } transition-colors`}
            >
              Education
            </Link>
            <Link 
              href="/spacex" 
              className={`block flex items-center gap-2 ${
                pathname === '/spacex' 
                  ? 'text-blue-500 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              } transition-colors`}
            >
              <span>SpaceX</span>
              <HiSparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}