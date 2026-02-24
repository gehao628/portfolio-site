"use client";

import { siteConfig } from "@/lib/data";
import { Mail, Phone, Github, Download, MapPin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientText from "@/components/ui/GradientText";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-dark-section px-6 py-24"
    >
      {/* 背景光晕 */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <GradientText>一起聊聊</GradientText>
          </h2>
          <p className="mt-3 text-slate-400">
            如果你对 AI 落地、企业转型有想法，或者正在寻找 AI
            解决方案工程师，欢迎交流
          </p>
        </AnimatedSection>

        {/* 联系方式卡片 */}
        <AnimatedSection delay={0.15}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="glass-card-dark flex flex-col items-center gap-2 rounded-xl px-6 py-5 transition-all hover:bg-white/10"
            >
              <Mail size={20} className="text-indigo-400" />
              <span className="text-sm text-slate-300">{siteConfig.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
              className="glass-card-dark flex flex-col items-center gap-2 rounded-xl px-6 py-5 transition-all hover:bg-white/10"
            >
              <Phone size={20} className="text-indigo-400" />
              <span className="text-sm text-slate-300">{siteConfig.phone}</span>
            </a>
            <div className="glass-card-dark flex flex-col items-center gap-2 rounded-xl px-6 py-5">
              <MapPin size={20} className="text-indigo-400" />
              <span className="text-sm text-slate-300">
                {siteConfig.location}
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA 按钮 */}
        <AnimatedSection delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.resumeUrl}
              download
              className="glow-button inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white"
            >
              <Download size={16} />
              下载简历 PDF
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-dark inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:text-white hover:bg-white/10"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
