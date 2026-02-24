"use client";

import { siteConfig, heroStats } from "@/lib/data";
import { motion } from "framer-motion";
import { Download, Mail, Github, ChevronDown } from "lucide-react";
import GradientText from "@/components/ui/GradientText";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark-section px-6">
      {/* 动画网格背景 */}
      <div className="animated-grid grid-fade absolute inset-0" />

      {/* 径向渐变光晕 */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse-glow" />

      {/* 主体内容 */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* 证件照占位 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="glow-border relative h-28 w-28 overflow-hidden rounded-full border-2 border-indigo-400/30 bg-slate-800">
            <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white/80">
              {siteConfig.name.charAt(0)}
            </div>
          </div>
        </motion.div>

        {/* 名字 — 渐变大字 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <GradientText>{siteConfig.name}</GradientText>
          <span className="ml-4 text-2xl font-normal text-slate-400 sm:text-3xl">
            {siteConfig.nameEn}
          </span>
        </motion.h1>

        {/* 定位句 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-slate-300 sm:text-xl"
        >
          {siteConfig.title}
          <span className="mx-3 text-slate-600">|</span>
          <span className="text-slate-400">{siteConfig.subtitle}</span>
        </motion.p>

        {/* 一句话描述 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400"
        >
          {siteConfig.description}
        </motion.p>

        {/* 统计数据条 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={siteConfig.resumeUrl}
            download
            className="glow-button inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-all"
          >
            <Download size={16} />
            下载简历
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="glass-card-dark inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:text-white hover:bg-white/10"
          >
            <Mail size={16} />
            联系我
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
        </motion.div>
      </div>

      {/* 滚动提示箭头 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
