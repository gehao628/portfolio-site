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
  title: "葛昊 Maxey Ge | AI Transformation Consultant",
  description:
    "4年战略咨询经验，现全职投入AI领域。咨询思维 × AI实践者，用结构化思维解决企业AI落地问题。",
  keywords: [
    "AI转型",
    "AI咨询",
    "葛昊",
    "Maxey Ge",
    "AI解决方案",
    "Agent开发",
    "RAG",
    "LangGraph",
  ],
  openGraph: {
    title: "葛昊 Maxey Ge | AI Transformation Consultant",
    description:
      "4年战略咨询经验，现全职投入AI领域。咨询思维 × AI实践者。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
