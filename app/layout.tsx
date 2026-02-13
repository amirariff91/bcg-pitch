import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "App Growth Playbook — Amir Ariff × BCG",
  description:
    "15 years scaling consumer apps — from funnel optimization to lifetime value. Growth analytics, lifecycle CRM, experimentation, and KPI management.",
  openGraph: {
    title: "App Growth Playbook — Amir Ariff × BCG",
    description:
      "15 years scaling consumer apps — from funnel optimization to lifetime value.",
    type: "website",
    siteName: "Amir Ariff — App Growth",
    url: "https://bcg.amrff.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Growth Playbook — Amir Ariff × BCG",
    description: "15 years scaling consumer apps — from funnel optimization to lifetime value.",
  },
  other: {
    "theme-color": "#00A651",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#00A651" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-navy antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-bcg-green focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
