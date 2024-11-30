import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import Skills from '@/components/home/Skills';
import Contact from '@/components/home/Contact';
import Header from '@/components/home/Header';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      <main className="flex-grow max-w-7xl mx-auto px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
