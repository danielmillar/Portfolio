import { Mail, GithubIcon, X } from 'lucide-react';

interface ContactLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
  username: string;
}

const contactLinks: ContactLink[] = [
  {
    platform: "Email",
    href: "mailto:contact@danielmillar.dev",
    icon: <Mail className="w-5 h-5" />,
    username: "contact@danielmillar.dev"
  },
  {
    platform: "GitHub",
    href: "https://github.com/danielmillar",
    icon: <GithubIcon className="w-5 h-5" />,
    username: "@danielmillar"
  },
  {
    platform: "X",
    href: "https://x.com/danielgmillar",
    icon: <X className="w-5 h-5" />,
    username: "@danielgmillar"
  }
];

export default function Contact() {
  return (
    <section className="mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {contactLinks.map((link) => (
            <a
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
            >
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                {link.icon}
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {link.platform}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {link.username}
                    </p>
                  </div>
                  <div className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
