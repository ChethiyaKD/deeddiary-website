import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeedDiary - Turn Every Tab Into a Positive Habit",
  description: "DeedDiary helps you log your daily good deeds and reminds you of your kindness year after year.",
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#6366f1"
      }
    ]
  },
  manifest: "/icons/site.webmanifest",
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DeedDiary"
  },
  applicationName: "DeedDiary",
  keywords: ["DeedDiary", "Good Deeds", "Positive Habits", "Chrome Extension", "New Tab", "Mindfulness"],
  authors: [{ name: "DeedDiary" }],
  creator: "DeedDiary",
  publisher: "DeedDiary",
  formatDetection: {
    telephone: false
  },
  openGraph: {
    title: "DeedDiary - Turn Every Tab Into a Positive Habit",
    description: "DeedDiary helps you log your daily good deeds and reminds you of your kindness year after year.",
    url: "https://deeddiary.com",
    siteName: "DeedDiary",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeedDiary - Turn Every Tab Into a Positive Habit",
    description: "DeedDiary helps you log your daily good deeds and reminds you of your kindness year after year.",
    creator: "@DeedDiary",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
