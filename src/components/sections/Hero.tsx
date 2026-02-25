"use client";

import { siteConfig, heroStats } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Mail,
  ChevronDown,
  Building2,
  Repeat2,
  Rocket,
} from "lucide-react";
import GradientText from "@/components/ui/GradientText";

// 职业轨迹数据
const milestones = [
  {
    icon: Building2,
    period: "2021 — 2025",
    title: "美世咨询",
    desc: "百万级咨询项目经理 · 服务 30+ 企业",
    color: "#3b82f6",
  },
  {
    icon: Repeat2,
    period: "2025",
    title: "贝壳集团",
    desc: "集团级 PMO · 独立开发 RAG 知识库与 Agent",
    color: "#8b5cf6",
  },
  {
    icon: Rocket,
    period: "2026 — 至今",
    title: "AI 探索与实践",
    desc: "10+ AI 产品从 0 到 1 · 全栈开发部署",
    color: "#6366f1",
  },
];

// 滚动关键词
const keywords = [
  "LangGraph",
  "Multi-Agent",
  "RAG",
  "ReAct",
  "Next.js",
  "FastAPI",
  "Multi-Agent 编排",
  "Prompt Engineering",
  "百万级咨询",
  "组织变革",
  "Vibe Coding",
  "Claude Code",
  "SSE 流式通信",
  "ChromaDB",
  "Coze 智能体",
  "Function Calling",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-dark-section px-4">
      {/* ====== 背景层 ====== */}
      <div className="animated-grid grid-fade absolute inset-0" />

      {/* 浮动渐变光球 */}
      <motion.div
        className="absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/8 blur-[120px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/8 blur-[100px]"
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 left-1/2 h-[300px] w-[300px] rounded-full bg-blue-500/6 blur-[90px]"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -15, 15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ====== 主体内容 ====== */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* 名字 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <GradientText>{siteConfig.name}</GradientText>
          <span className="ml-3 text-2xl font-normal text-slate-400 sm:text-3xl">
            {siteConfig.nameEn}
          </span>
        </motion.h1>

        {/* 标签 — 逐个入场 */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {siteConfig.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
              className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-sm"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* 两行定位 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mx-auto mt-7 max-w-3xl"
        >
          <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">
            管理咨询 + 组织变革背景的{" "}
            <span className="font-semibold text-indigo-300">
              AI 实践者
            </span>
            <span className="mx-2 text-slate-600">·</span>
            近五年企业管理服务经验
          </p>
          <p className="mt-2 text-base leading-relaxed text-slate-400">
            <span className="text-violet-300">AI 产品构建者</span> — 兼具商业判断力与独立全栈开发
            AI 产品从 0 到 1 的实战经验
          </p>
        </motion.div>

        {/* 统计数据 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          className="mt-8 inline-flex items-center gap-6 rounded-2xl border border-white/5 bg-white/[0.03] px-8 py-4 backdrop-blur-sm sm:gap-10"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 + i * 0.08 }}
              className="flex items-center gap-6"
            >
              {i > 0 && <div className="h-8 w-px bg-white/10" />}
              <div className="text-center">
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs text-slate-500">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ====== 职业轨迹 ====== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-10"
        >
          {/* 小标题 */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-600" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              职业轨迹
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-600" />
          </div>

          {/* 三个里程碑 + 箭头连接 */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + i * 0.15, duration: 0.5 }}
                className="flex items-center"
              >
                {/* 箭头连接线（桌面端，非第一个） */}
                {i > 0 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5 + i * 0.15, duration: 0.3 }}
                    className="hidden items-center mx-3 sm:flex origin-left"
                  >
                    <div className="h-px w-8 bg-gradient-to-r from-slate-600 to-slate-500" />
                    <div className="h-0 w-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-slate-500" />
                  </motion.div>
                )}

                {/* 里程碑卡片 */}
                <div className="glass-card-dark flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-white/[0.08] hover:scale-[1.02]">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${m.color}15` }}
                  >
                    <m.icon size={16} style={{ color: m.color }} />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">
                        {m.title}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {m.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="glow-button inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-all"
          >
            <Mail size={16} />
            联系我
          </a>
          <a
            href="#profile"
            className="glass-card-dark inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:text-white hover:bg-white/10"
          >
            了解更多
            <ChevronDown size={16} />
          </a>
        </motion.div>
      </div>

      {/* ====== 关键词滚动条 ====== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-14 left-0 right-0 overflow-hidden keyword-ticker-mask"
      >
        <div className="keyword-ticker flex items-center gap-8 whitespace-nowrap">
          {[...keywords, ...keywords].map((kw, i) => (
            <span
              key={i}
              className="text-[11px] font-medium tracking-wide text-slate-600"
            >
              {kw}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 滚动箭头 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2"
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
