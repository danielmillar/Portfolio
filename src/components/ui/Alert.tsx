'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export function Alert({ isOpen, onClose, message }: AlertProps) {
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!alertRef.current) return;

    if (isOpen) {
      // Reset position and opacity
      gsap.set(alertRef.current, { y: -20, opacity: 0 });
      // Animate in
      gsap.to(alertRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      // Animate out
      gsap.to(alertRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      ref={alertRef}
      className="fixed top-4 right-4 z-50"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 flex items-center gap-3">
        <p className="text-gray-700 dark:text-gray-200">{message}</p>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
} 