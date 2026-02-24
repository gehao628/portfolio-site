import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "葛昊 Maxey Ge | AI 转型顾问 & 解决方案工程师",
  description:
    "4年战略咨询经验 × AI 实践者。独立开发多个 AI 应用，帮助企业评估和落地 AI 转型方案。",
  keywords: [
    "AI转型",
    "AI咨询",
    "葛昊",
    "Maxey Ge",
    "AI解决方案",
    "Agent开发",
    "RAG",
    "LangGraph",
    "AI工程师",
  ],
  openGraph: {
    title: "葛昊 Maxey Ge | AI 转型顾问 & 解决方案工程师",
    description:
      "4年战略咨询经验 × AI 实践者。独立开发多个 AI 应用，帮助企业评估和落地 AI 转型方案。",
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
        className={`${inter.variable} ${geistMono.variable} antialiased`}
        style={{
          fontFamily:
            'var(--font-inter), "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
