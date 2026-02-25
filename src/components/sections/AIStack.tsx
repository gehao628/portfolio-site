"use client";

import { aiSkillGroups, certifications } from "@/lib/data";
import {
  Sparkles,
  Blocks,
  Code,
  ShieldCheck,
  Award,
  Building2,
  Rocket,
  ArrowRight,
  BrainCircuit,
  Database,
  Bot,
  MessageSquareCode,
  Layers,
  Workflow,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import GradientText from "@/components/ui/GradientText";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const groupIconMap: Record<string, LucideIcon> = { Sparkles, Blocks, Code };

/* ====== AI 主线 ====== */
const aiJourney = [
  {
    icon: Building2,
    label: "美世咨询",
    period: "2021–2025",
    color: "#3b82f6",
    items: [
      { icon: BrainCircuit, text: "LLM 应用于行业研究" },
      { icon: Database, text: "数据分析与访谈整理" },
      { icon: Sparkles, text: "提升项目交付效率" },
    ],
  },
  {
    icon: Layers,
    label: "贝壳集团",
    period: "2025",
    color: "#8b5cf6",
    items: [
      { icon: Database, text: "RAG 知识库搭建" },
      { icon: Bot, text: "智能问答 & 提案诊断 Agent" },
      { icon: MessageSquareCode, text: "推动 Prompt 工程能力建设" },
    ],
  },
  {
    icon: Rocket,
    label: "全职 AI 探索",
    period: "2026–至今",
    color: "#6366f1",
    items: [
      { icon: Workflow, text: "独立开发近十个 Agent 项目" },
      { icon: Globe, text: "全栈部署 + Vibe Coding 实践" },
      { icon: Sparkles, text: "形成完整 AI 能力闭环" },
    ],
  },
];

/* ====== 工具徽章 ====== */
const toolBadges: Record<string, { label: string; color: string }[]> = {
  "日常 AI 工具": [
    { label: "Claude", color: "#d97706" },
    { label: "GPT", color: "#10b981" },
    { label: "Gemini", color: "#3b82f6" },
    { label: "Grok", color: "#ef4444" },
    { label: "OpenClaw", color: "#8b5cf6" },
  ],
  "AI 开发平台": [
    { label: "Claude Code", color: "#d97706" },
    { label: "Cursor", color: "#22d3ee" },
    { label: "Codex", color: "#10b981" },
    { label: "Coze", color: "#6366f1" },
    { label: "百炼", color: "#f59e0b" },
    { label: "Vercel", color: "#94a3b8" },
    { label: "阿里云", color: "#ff6a00" },
  ],
  技术实践: [
    { label: "LangGraph", color: "#10b981" },
    { label: "RAG", color: "#3b82f6" },
    { label: "FastAPI", color: "#059669" },
    { label: "Next.js", color: "#94a3b8" },
    { label: "Ollama", color: "#f59e0b" },
  ],
};

/* ====== 组级描述 ====== */
const groupDesc: Record<string, string> = {
  "日常 AI 工具":
    "全线主流 AI 大模型深度用户，日均交互数十次，覆盖对话、代码生成、内容创作、数据分析等多种场景，对各模型能力边界有深度体感认知。",
  "AI 开发平台":
    "从 AI Coding 到低代码智能体平台再到云端部署，全链路开发工具覆盖。",
  技术实践:
    "从 Agent 编排到全栈开发到模型微调，深入底层技术的实践与应用。",
};

/* ====== 关键词高亮 ====== */
const skillKeywords: Record<string, string[]> = {
  Claude: ["重度用户", "Max 订阅", "高频交互"],
  "GPT / Gemini / Grok": ["多模型对比", "深度体感"],
  "OpenClaw（AI 分身）": ["AI 操作系统", "7×24h"],
  "Claude Code / Cursor / Codex": ["Vibe Coding", "全栈项目"],
  "Coze（扣子）/ 阿里云百炼": ["Workflow 编排", "知识库挂载", "Agent 原型"],
  "Vercel / 阿里云 ECS": ["Nginx 反向代理", "PM2", "生产环境"],
  "Agent 开发": ["RAG", "Function Calling", "ReAct", "LangGraph"],
  全栈应用开发: ["Next.js", "FastAPI", "SSE 流式通信"],
  模型本地部署与微调: ["Ollama", "LoRA"],
  "Prompt Engineering": ["系统化提示词", "多种场景"],
};

function highlightSkillDesc(text: string, keywords: string[]): ReactNode[] {
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

/* ====== 动画 ====== */
const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 25,
    scale: 0.95,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1 + i * 0.12,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const journeyCardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.15 + i * 0.18,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function AIStack() {
  const journeyRef = useRef(null);
  const journeyInView = useInView(journeyRef, { once: true, margin: "-40px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });
  const certRef = useRef(null);
  const certInView = useInView(certRef, { once: true, margin: "-40px" });

  return (
    <section
      id="ai-stack"
      className="relative overflow-hidden bg-dark-section px-4 py-16 sm:px-6"
    >
      {/* ====== 背景 ====== */}
      <div className="animated-grid grid-fade absolute inset-0 opacity-40" />
      <motion.div
        className="absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/8 blur-[120px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/8 blur-[100px]"
        animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 left-1/2 h-[300px] w-[300px] rounded-full bg-blue-500/6 blur-[90px]"
        animate={{ x: [0, 20, -20, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 浮动粒子 */}
      {[
        { top: "8%", left: "12%", s: 4, d: 0 },
        { top: "18%", right: "10%", s: 3, d: 1.2 },
        { top: "35%", left: "5%", s: 3, d: 0.5 },
        { top: "60%", right: "7%", s: 4, d: 1.8 },
        { top: "80%", left: "18%", s: 3, d: 0.9 },
        { top: "45%", right: "3%", s: 2.5, d: 0.3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-indigo-300/20"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            width: p.s,
            height: p.s,
          }}
          animate={{
            y: [0, -22, 0],
            opacity: [0.1, 0.55, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3.5 + i * 0.4,
            delay: p.d,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* ====== 页面标题 ====== */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <GradientText>AI 能力栈</GradientText>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-2 text-sm text-slate-400"
          >
            从日常工具到底层技术，完整的 AI 实践能力
          </motion.p>
        </motion.div>

        {/* ====== AI 主线 — 大卡片包裹 ====== */}
        <div ref={journeyRef} className="mb-10">
          {/* 标题 — 突出显示 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-center"
          >
            <h3 className="text-xl font-bold sm:text-2xl">
              <GradientText>AI 实践主线</GradientText>
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              从工具使用到产品落地，一条清晰的 AI 能力成长路径
            </p>
          </motion.div>

          {/* 时间线玻璃卡 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6"
          >
            <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:gap-0">
              {aiJourney.map((phase, i) => (
                <div key={phase.label} className="flex flex-1 items-center">
                  <motion.div
                    custom={i}
                    variants={journeyCardVariants}
                    initial="hidden"
                    animate={journeyInView ? "visible" : "hidden"}
                    whileHover={{
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    className="group relative flex-1 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 transition-colors duration-300 hover:bg-white/[0.06]"
                  >
                    {/* 持续脉冲光圈 */}
                    <motion.div
                      className="absolute -inset-px rounded-xl"
                      style={{
                        background: `radial-gradient(ellipse at top, ${phase.color}08, transparent 70%)`,
                      }}
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{
                        duration: 3,
                        delay: i * 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="relative">
                      <div className="mb-3 flex items-center gap-2.5">
                        <motion.div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                          style={{ backgroundColor: `${phase.color}18` }}
                          animate={{ scale: [1, 1.06, 1] }}
                          transition={{
                            duration: 3,
                            delay: i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <phase.icon
                            size={16}
                            style={{ color: phase.color }}
                          />
                        </motion.div>
                        <div>
                          <h4
                            className="text-sm font-bold"
                            style={{ color: phase.color }}
                          >
                            {phase.label}
                          </h4>
                          <span className="text-[10px] text-slate-500">
                            {phase.period}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {phase.items.map((item, idx) => (
                          <motion.div
                            key={item.text}
                            initial={{ opacity: 0, x: -8 }}
                            animate={
                              journeyInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -8 }
                            }
                            transition={{
                              delay: 0.35 + i * 0.2 + idx * 0.08,
                              duration: 0.3,
                            }}
                            className="flex items-center gap-2 text-xs text-slate-300"
                          >
                            <item.icon
                              size={11}
                              className="shrink-0"
                              style={{ color: phase.color }}
                            />
                            <span>{item.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* 箭头 */}
                  {i < aiJourney.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={
                        journeyInView
                          ? { opacity: 1, scaleX: 1 }
                          : { opacity: 0, scaleX: 0 }
                      }
                      transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
                      className="hidden lg:flex items-center mx-2 origin-left"
                    >
                      <div className="h-px w-4 bg-gradient-to-r from-slate-600 to-slate-500" />
                      <motion.div
                        animate={{ x: [0, 3, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight
                          size={14}
                          className="text-indigo-400 -ml-0.5"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ====== 能力栈三列 ====== */}
        <div ref={gridRef} className="grid gap-4 lg:grid-cols-3">
          {aiSkillGroups.map((group, gi) => {
            const GIcon = groupIconMap[group.icon] || Sparkles;
            const badges = toolBadges[group.title] || [];
            const desc = groupDesc[group.title] || "";
            return (
              <motion.div
                key={group.title}
                custom={gi}
                variants={cardVariants}
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.06]"
              >
                {/* 顶部渐变线 — 持续微动 */}
                <motion.div
                  className="absolute top-0 left-4 right-[60%] h-[2px] rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${group.color}, transparent)`,
                  }}
                  animate={{ right: ["60%", "30%", "60%"] }}
                  transition={{
                    duration: 4,
                    delay: gi * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* hover 光晕 */}
                <div
                  className="absolute -inset-px rounded-xl opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at top, ${group.color}12, transparent 70%)`,
                  }}
                />

                <div className="relative">
                  {/* 头部 */}
                  <div className="mb-3 flex items-center gap-3">
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${group.color}15` }}
                      animate={{ rotate: [0, 3, -3, 0] }}
                      transition={{
                        duration: 5,
                        delay: gi * 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <GIcon size={18} style={{ color: group.color }} />
                    </motion.div>
                    <h3
                      className="text-base font-bold"
                      style={{ color: group.color }}
                    >
                      {group.title}
                    </h3>
                  </div>

                  {/* 组描述 */}
                  <p className="mb-4 text-xs leading-relaxed text-slate-400/70">
                    {desc}
                  </p>

                  {/* 工具徽章 */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {badges.map((b, bi) => (
                      <motion.span
                        key={b.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          gridInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          delay: 0.3 + gi * 0.15 + bi * 0.04,
                          duration: 0.3,
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="rounded-full border px-2 py-0.5 text-[10px] font-semibold cursor-default"
                        style={{
                          borderColor: `${b.color}30`,
                          backgroundColor: `${b.color}10`,
                          color:
                            b.color === "#ffffff" || b.color === "#94a3b8"
                              ? "#cbd5e1"
                              : b.color,
                        }}
                      >
                        {b.label}
                      </motion.span>
                    ))}
                  </div>

                  {/* 技能详情 */}
                  <div className="flex flex-col gap-3">
                    {group.skills.map((skill) => {
                      const kws = skillKeywords[skill.name] || [];
                      return (
                        <div key={skill.name}>
                          <p className="text-[13px] font-semibold text-slate-200">
                            {skill.name}
                          </p>
                          <p className="mt-0.5 text-xs leading-[1.75] text-slate-400/80">
                            {highlightSkillDesc(skill.desc, kws)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ====== 专业认证 ====== */}
        <div ref={certRef} className="mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={certInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <motion.div
              className="h-px bg-gradient-to-r from-transparent to-amber-500/30"
              initial={{ width: 0 }}
              animate={certInView ? { width: 56 } : { width: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ShieldCheck size={16} className="text-amber-400" />
              </motion.div>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                专业认证
              </span>
              <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                {certifications.length}
              </span>
            </div>
            <motion.div
              className="h-px bg-gradient-to-l from-transparent to-amber-500/30"
              initial={{ width: 0 }}
              animate={certInView ? { width: 56 } : { width: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </motion.div>

          {/* 证书卡片 — 4 列 */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24, rotateY: -10 }}
                animate={
                  certInView
                    ? { opacity: 1, y: 0, rotateY: 0 }
                    : { opacity: 0, y: 24, rotateY: -10 }
                }
                transition={{
                  delay: 0.15 + i * 0.12,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  transition: { duration: 0.25 },
                }}
                className="group overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.06]"
              >
                {cert.image ? (
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-white/[0.02] to-indigo-500/[0.02] sm:h-44">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </div>
                ) : (
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-amber-500/5 to-orange-500/5 sm:h-44">
                    <Award size={36} className="text-amber-400/50" />
                  </div>
                )}
                <div className="p-3 text-center">
                  <p className="text-[13px] font-semibold text-slate-200 leading-tight">
                    {cert.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
