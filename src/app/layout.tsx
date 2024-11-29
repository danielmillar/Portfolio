import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Millar | Full Stack Software Engineer",
  description: "Full Stack Software Engineer specializing in backend development, clean APIs, and modern web technologies.",
  keywords: ["Software Engineer", "Full Stack Developer", "Backend Developer", "TypeScript", "Java", "Kotlin"],
  authors: [{ name: "Daniel Millar" }],
  openGraph: {
    title: "Daniel Millar | Full Stack Software Engineer",
    description: "Full Stack Software Engineer specializing in backend development, clean APIs, and modern web technologies.",
    url: "https://danielmillar.dev",
    siteName: "Daniel Millar",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
