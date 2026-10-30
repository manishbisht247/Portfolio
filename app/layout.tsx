import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Manish Bisht | Data Analyst & Machine Learning Portfolio",
    template: "%s | Manish Bisht",
  },
  description:
    "Portfolio of Manish Bisht, a Computer Science student building practical projects in data analysis, machine learning, NLP, and computer vision.",
  keywords: [
    "Manish Bisht",
    "data analyst",
    "machine learning",
    "data science portfolio",
    "Python",
    "NLP",
  ],
  authors: [{ name: "Manish Bisht" }],
  creator: "Manish Bisht",
  metadataBase: new URL("https://github.com/manishbisht247/Portfolio"),
  openGraph: {
    title: "Manish Bisht | Data Analyst & Machine Learning Portfolio",
    description:
      "Explore Manish Bisht's projects in data analysis, machine learning, NLP, and computer vision.",
    type: "website",
    url: "https://github.com/manishbisht247/Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Manish Bisht | Data Analyst & Machine Learning Portfolio",
    description:
      "Projects and work by Manish Bisht across data analysis, machine learning, NLP, and computer vision.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
