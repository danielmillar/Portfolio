'use client';
import Image from 'next/image';
import { GithubIcon, DownloadIcon } from 'lucide-react';
import { useAlert } from '@/contexts/AlertContext';

export default function Hero() {
  const { showAlert } = useAlert();

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-16 gap-8">
        {/* Text Content */}
        <div className="flex-1 text-left">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 -ml-[0.07em]">
              Daniel Millar
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Full Stack Software Engineer
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg">
              Backend enthusiast with a love for clean APIs and a healthy fear of CSS.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/danielmillar"
              className="group px-6 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-full hover:opacity-90 transition-all duration-300 flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <GithubIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => showAlert("Resume will be available soon!")}
              className="group px-6 py-2 border border-gray-900 dark:border-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
            >
              <span>Resume</span>
              <DownloadIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 w-full hidden md:block">
          {/* Background gradient blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-400/10 rounded-full blur-3xl" />
          
          {/* Image container */}
          <div className="relative w-full aspect-square md:aspect-[4/3]">
            <Image
              src="/hero.jpg"
              alt="Profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}