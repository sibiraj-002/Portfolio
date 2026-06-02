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

export const metadata = {
  metadataBase: new URL("https://sibirajkandasamy.dev"),
  title: {
    default: "Sibiraj Kandasamy | Web Developer",
    template: "%s | Sibiraj Kandasamy",
  },
  description:
    "Portfolio of Sibiraj Kandasamy, a web developer building clean, scalable, and high-performance web experiences.",
  keywords: [
    "Sibiraj Kandasamy",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Frontend Developer",
  ],
  authors: [{ name: "Sibiraj Kandasamy" }],
  creator: "Sibiraj Kandasamy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sibiraj Kandasamy Portfolio",
    title: "Sibiraj Kandasamy | Web Developer",
    description:
      "Explore projects by Sibiraj Kandasamy focused on modern, responsive, and maintainable web development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sibiraj Kandasamy | Web Developer",
    description:
      "Portfolio of Sibiraj Kandasamy featuring production-ready websites and modern frontend work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
