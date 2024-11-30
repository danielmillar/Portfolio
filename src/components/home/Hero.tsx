'use client';

import { GithubIcon, DownloadIcon } from 'lucide-react';
import { useAlert } from '@/contexts/AlertContext';
import { SiTypescript, SiEclipseadoptium , SiKotlin, SiIntellijidea, SiVisualstudiocode, SiNextdotjs, SiGradle, SiDocker, SiMongodb, SiReact } from 'react-icons/si';

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

        <div className="relative flex-1 w-full hidden md:block h-[400px]">
          {/* Background gradient blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-400/10 rounded-full blur-3xl" />
          
          {/* Floating Icons Container */}
          <div className="relative w-full h-full">
            <SiTypescript 
              className="text-4xl text-blue-500 absolute animate-float"
              style={{ top: '20%', left: '30%', animationDelay: '0s' }}
            />
            <SiEclipseadoptium  
              className="text-4xl text-red-500 absolute animate-float"
              style={{ top: '40%', left: '60%', animationDelay: '0.5s' }}
            />
            <SiKotlin 
              className="text-4xl text-purple-500 absolute animate-float"
              style={{ top: '60%', left: '25%', animationDelay: '1s' }}
            />
            <SiReact 
              className="text-4xl text-cyan-400 absolute animate-float"
              style={{ top: '30%', left: '70%', animationDelay: '1.5s' }}
            />
            <SiNextdotjs 
              className="text-4xl text-gray-700 dark:text-gray-300 absolute animate-float"
              style={{ top: '70%', left: '55%', animationDelay: '2s' }}
            />
            <SiDocker 
              className="text-4xl text-blue-500 absolute animate-float"
              style={{ top: '45%', left: '40%', animationDelay: '2.5s' }}
            />
            <SiIntellijidea 
              className="text-4xl text-pink-500 absolute animate-float"
              style={{ top: '25%', left: '45%', animationDelay: '3s' }}
            />
            <SiVisualstudiocode 
              className="text-4xl text-blue-600 absolute animate-float"
              style={{ top: '55%', left: '75%', animationDelay: '3.5s' }}
            />
            <SiMongodb 
              className="text-4xl text-green-500 absolute animate-float"
              style={{ top: '75%', left: '35%', animationDelay: '4s' }}
            />
            <SiGradle 
              className="text-4xl text-blue-400 absolute animate-float"
              style={{ top: '35%', left: '85%', animationDelay: '4.5s' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}