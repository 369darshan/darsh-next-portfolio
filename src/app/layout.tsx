import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TransitionProvider from "./components/transitionProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darsh Portfolio | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies. Explore my projects and experience in web development, UI/UX design, and software engineering.",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "Portfolio", "Software Engineer"],
  authors: [{ name: "Darsh" }],
  openGraph: {
    title: "Darsh Portfolio | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies. Explore my projects and experience in web development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darsh Portfolio | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies. Explore my projects and experience in web development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
