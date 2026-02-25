"use client";

import { personalProfile, siteConfig } from "@/lib/data";
import {
  Briefcase,
  Brain,
  Code,
  TrendingUp,
  Users,
  Rocket,
  Building2,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import GradientText from "@/components/ui/GradientText";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Brain,
  Code,
  TrendingUp,
  Users,
  Rocket,
  Building2,
  Sparkles,
};

/* ====== 关键词高亮映射 ====== */
const keywordMap: Record<string, string[]> = {
  企业解决方案视角: [
    "百万级",
    "项目经理",
    "高管对话能力",
    "结构化问题诊断",
    "Agent 产品在企业内部落地",
  ],
  "AI 原生工作方式": [
    "Claude Max",
    "OpenClaw",
    "AI 分身系统",
    "全面 AI 化",
    "深度体感认知",
  ],
  "AI 应用开发能力": [
    "Claude Code、Cursor、Codex",
    "Vibe Coding",
    "全栈应用",
    "Coze、百炼",
    "多 Agent 编排",
  ],
  产品构建与迭代能力: [
    "近十个 AI 产品",
    "全生命周期管理",
    "需求洞察 → 快速产品化 → 用户反馈迭代",
  ],
  "AI 赋能组织的实战能力": [
    "RAG 知识库",
    "ReAct 提案诊断 Agent",
    "60%",
    "AI 在组织场景中真正落地",
  ],
  持续学习与探索驱动: [
    "多项 AI 相关认证",
    "创业经历",
    "创收数百万",
    "多个 AI 产品开发",
  ],
};

function highlightText(text: string, keywords: string[]): ReactNode[] {
  if (!keywords.length) return [text];
  const escaped = keywords
    .sort((a, b) => b.length - a.length)
    .map((kw) => kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    keywords.includes(part) ? (
      <span key={i} className="text-indigo-200 font-semibold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

const summaryKeywords = [
  "结构化思维与用户需求洞察",
  "「方案设计者」到「产品构建者」的转变",
  "完整的 AI 能力闭环",
  "敏锐嗅觉与前瞻判断",
];

/* ====== 卡片入场：交替左右方向飞入 ====== */
const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -40 : 40,
    y: 20,
    scale: 0.92,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.06 + i * 0.1,
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

/* ====== 浮动粒子位置 ====== */
const particles = [
  { top: "8%", left: "10%", size: 3, delay: 0 },
  { top: "15%", right: "15%", size: 2, delay: 1.5 },
  { top: "45%", left: "5%", size: 2.5, delay: 0.8 },
  { top: "70%", right: "8%", size: 3, delay: 2 },
  { top: "85%", left: "20%", size: 2, delay: 1.2 },
  { top: "30%", right: "5%", size: 2, delay: 0.5 },
];

export default function Profile() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="profile"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 py-14 sm:px-6"
      style={{
        background:
          "linear-gradient(180deg, #0c0a1a 0%, #130f2a 40%, #161230 70%, #0e0c1e 100%)",
      }}
    >
      {/* ====== 背景层 ====== */}
      {/* 动画网格 */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99, 102, 241, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* 浮动光球 */}
      <motion.div
        className="absolute top-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[130px]"
        animate={{ x: [0, -25, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[110px]"
        animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/6 blur-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 浮动粒子 */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-indigo-300/30"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ====== 标题 ====== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <GradientText>关于我</GradientText>
          </h2>
        </motion.div>

        {/* ====== 照片 + 简介 — 带 shimmer 边框 ====== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group/card relative rounded-2xl p-5 backdrop-blur-sm sm:p-8"
        >
          {/* 动态边框 — 旋转渐变 */}
          <div className="absolute inset-0 rounded-2xl border border-white/[0.08] bg-white/[0.04]" />
          <div className="profile-shimmer-border absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

          <div className="relative flex flex-col items-center gap-7 sm:flex-row sm:items-start">
            {/* 照片 — 旋转光环 */}
            <div className="relative shrink-0">
              {/* 旋转光环 */}
              <motion.div
                className="absolute -inset-2 rounded-xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute -inset-2 rounded-xl bg-[#130f2a]/80" />

              <motion.div
                className="relative"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-44 w-34 overflow-hidden rounded-xl ring-1 ring-white/15 sm:h-52 sm:w-40">
                  <Image
                    src={`${basePath}${siteConfig.photo}`}
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* 简介 */}
            <div className="flex-1 text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-400/10 px-3.5 py-1 text-xs font-semibold text-indigo-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-300 animate-pulse" />
                管理咨询 + 组织变革背景的 AI 实践者 · AI 产品构建者
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-[15px] leading-[2] text-slate-200/85 sm:text-base"
              >
                {highlightText(personalProfile.summary, summaryKeywords)}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* ====== 核心能力标题 — 展开动画线条 ====== */}
        <div
          ref={titleRef}
          className="mt-8 mb-5 flex items-center justify-center gap-3"
        >
          <motion.div
            className="h-px bg-gradient-to-r from-transparent to-slate-500"
            initial={{ width: 0 }}
            animate={titleInView ? { width: 56 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              titleInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-xs font-semibold uppercase tracking-widest text-slate-400"
          >
            核心能力
          </motion.span>
          <motion.div
            className="h-px bg-gradient-to-l from-transparent to-slate-500"
            initial={{ width: 0 }}
            animate={titleInView ? { width: 56 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* ====== 6 卡片 — 3×2 ====== */}
        <div
          ref={gridRef}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {personalProfile.competencies.map((comp, i) => {
            const Icon = iconMap[comp.icon] || Briefcase;
            const keywords = keywordMap[comp.title] || [];
            return (
              <motion.div
                key={comp.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="group relative rounded-xl border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08]"
              >
                {/* 顶部渐变线 — hover 时展开 */}
                <motion.div
                  className="absolute top-0 left-3 h-[2px] rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${comp.color}, transparent)`,
                  }}
                  initial={{ right: "70%" }}
                  whileHover={{ right: "12px" }}
                  transition={{ duration: 0.4 }}
                />

                {/* hover 光晕 */}
                <div
                  className="absolute -inset-px rounded-xl opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at top, ${comp.color}10, transparent 70%)`,
                  }}
                />

                <div className="relative">
                  {/* 图标 + 标题 */}
                  <div className="mb-2.5 flex items-center gap-2.5 pt-0.5">
                    <motion.div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${comp.color}18` }}
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <Icon size={15} style={{ color: comp.color }} />
                    </motion.div>
                    <h4
                      className="text-sm font-bold"
                      style={{ color: comp.color }}
                    >
                      {comp.title}
                    </h4>
                  </div>

                  {/* 描述 */}
                  <p className="text-[13px] leading-[1.85] text-slate-200/70">
                    {highlightText(comp.description, keywords)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
