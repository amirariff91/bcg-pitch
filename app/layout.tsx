import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "App Growth Playbook — Amir Ariff × BCG",
  description:
    "15 years scaling consumer apps — from funnel optimization to lifetime value. Amir Ariff's pitch for BCG App Growth Hacker.",
  openGraph: {
    title: "App Growth Playbook — Amir Ariff × BCG",
    description:
      "15 years scaling consumer apps — from funnel optimization to lifetime value.",
    type: "website",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-navy antialiased">{children}</body>
    </html>
  );
}
