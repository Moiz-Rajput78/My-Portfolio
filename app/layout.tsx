import type { Metadata } from "next";
// @ts-ignore -- Next.js handles CSS imports; TypeScript may not resolve side-effect CSS modules.
import "./globals.css";

export const metadata: Metadata = {
  title: "Moiz | Python, Full-Stack & AI Developer — 2026",
  description: "I build clean, modern and user-friendly web applications using Python, Flask, Next.js, TypeScript and AI-powered technologies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="RCPQT5GJWFW33NAHgODn5FuV-Wg6ES-7qQwrQgKA_2s" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Syne:wght@700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
