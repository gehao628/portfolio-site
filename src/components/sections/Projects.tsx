"use client";

import { projects } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Server,
  FileText,
  Activity,
  CheckCircle,
  Rocket,
  Building2,
  Target,
  Zap,
  ArrowUpRight,
  Circle,
} from "lucide-react";
import GradientText from "@/components/ui/GradientText";

// 深色主题状态徽章
function StatusBadge({ status }: { status: string }) {
  if (status === "online") {
    return (
      <span className="inline-flex items-center gap-1.5 shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
        已上线
      </span>
    );
  }
  if (status === "running") {
    return (
      <span className="inline-flex items-center gap-1.5 shrink-0 rounded-full bg-blue-500/10 px-2.5 py-1 text-[11px] font-semibold text-blue-400 border border-blue-500/20">
        <Activity size={10} />
        运行中
      </span>
    );
  }
  if (status === "dev") {
    return (
      <span className="inline-flex items-center gap-1.5 shrink-0 rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold text-amber-400 border border-amber-500/20">
        <Circle size={10} />
        开发中
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 shrink-0 rounded-full bg-slate-500/10 px-2.5 py-1 text-[11px] font-semibold text-slate-400 border border-slate-500/20">
      <CheckCircle size={10} />
      已完成
    </span>
  );
}

// 项目卡片
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // 从 gradient 提取强调色
  const accentColor = project.gradient
    .replace("linear-gradient(135deg, ", "")
    .split(",")[0]
    .trim();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* 渐变顶条 + hover 时展开动画 */}
      <motion.div
        className="h-1.5 w-full"
        style={{ background: project.gradient }}
        whileHover={{ height: 6 }}
      />

      {/* hover 光晕 */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 1px 0 ${accentColor}20, 0 0 40px ${accentColor}10`,
        }}
      />

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        {/* 标题 + 状态 */}
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h4 className="text-[17px] font-bold text-white leading-tight">
            {project.title}
          </h4>
          <StatusBadge status={project.status} />
        </div>

        {/* 副标题 */}
        <p className="text-sm font-medium mb-4" style={{ color: accentColor }}>
          {project.subtitle}
        </p>

        {/* 项目背景 */}
        <div className="mb-4">
          <div className="mb-1.5 flex items-center gap-2">
            <div
              className="h-3 w-0.5 rounded-full"
              style={{ background: accentColor }}
            />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              项目背景
            </span>
          </div>
          <p className="text-[13px] leading-[1.8] text-slate-300">
            {project.motivation}
          </p>
        </div>

        {/* 面向群体 */}
        <div className="mb-4 flex items-center gap-2">
          <Target size={12} className="text-slate-500 shrink-0" />
          <span className="text-xs text-slate-500">核心痛点：</span>
          <span className="text-xs font-medium text-slate-300">
            {project.targetUsers}
          </span>
        </div>

        {/* 核心亮点 */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <div
              className="h-3 w-0.5 rounded-full"
              style={{ background: accentColor }}
            />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              核心亮点
            </span>
          </div>
          <ul className="space-y-2">
            {project.keyResults.map((r, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[13px] leading-relaxed text-slate-300"
              >
                <Zap
                  size={12}
                  className="mt-1 shrink-0"
                  style={{ color: accentColor }}
                />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* 技术标签 */}
        <div className="mt-auto flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md px-2 py-0.5 text-[11px] font-medium"
              style={{
                color: accentColor,
                backgroundColor: `${accentColor}10`,
                border: `1px solid ${accentColor}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 链接按钮 */}
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110 hover:shadow-lg"
            style={{ background: project.gradient }}
          >
            <ExternalLink size={14} />
            {project.linkLabel}
            <ArrowUpRight size={14} className="ml-auto" />
          </a>
        ) : (
          <div
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-400"
            style={{
              border: `1px solid ${accentColor}25`,
              background: `${accentColor}08`,
            }}
          >
            {project.status === "running" ? (
              <Activity size={14} />
            ) : project.type === "case-study" ? (
              <FileText size={14} />
            ) : (
              <Server size={14} />
            )}
            {project.linkLabel || "系统运行中"}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const personalProjects = projects.filter((p) => p.category === "personal");
  const enterpriseProjects = projects.filter(
    (p) => p.category === "enterprise"
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-dark-section px-4 py-16 sm:py-20 sm:px-6"
    >
      {/* 背景网格 */}
      <div className="animated-grid grid-fade absolute inset-0" />

      {/* 浮动光球 */}
      <motion.div
        className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/8 blur-[120px]"
        animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 h-[350px] w-[350px] rounded-full bg-violet-500/6 blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-[80px]"
        animate={{ x: [0, 15, -15, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 浮动粒子 */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute h-1 w-1 rounded-full bg-indigo-400/30"
          style={{ top: `${15 + i * 18}%`, left: `${10 + i * 20}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            <GradientText>项目作品</GradientText>
          </h2>
          <p className="mt-3 text-slate-400">
            独立开发并上线的 AI 应用 & 企业内部落地项目
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-500 max-w-2xl mx-auto">
            以下均为 Vibe Coding 方式独立完成的全栈项目；此外，在 Coze、阿里云百炼等低代码平台亦搭建了多个智能体与
            Skills，覆盖内容生成、知识问答、工作流自动化等场景
          </p>
        </motion.div>

        {/* ===== 个人独立项目 ===== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15">
            <Rocket size={16} className="text-indigo-400" />
          </div>
          <h3 className="text-base font-bold text-white">
            独立开发并上线的 AI 应用
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/30 to-transparent" />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 mb-14">
          {personalProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* ===== 企业内部项目 ===== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15">
            <Building2 size={16} className="text-emerald-400" />
          </div>
          <h3 className="text-base font-bold text-white">
            贝壳集团内部落地项目
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {enterpriseProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i + personalProjects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
