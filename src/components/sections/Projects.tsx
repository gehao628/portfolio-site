"use client";

import { projects } from "@/lib/data";
import { ExternalLink, Github, FileText } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

function StatusBadge({ status }: { status: string }) {
  if (status === "online") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
        <span className="status-live h-1.5 w-1.5 rounded-full" />
        已上线
      </span>
    );
  }
  if (status === "dev") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
        <span className="status-dev h-1.5 w-1.5 rounded-full" />
        开发中
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
      已完成
    </span>
  );
}

function LinkIcon({ type }: { type: string }) {
  if (type === "github") return <Github size={14} />;
  if (type === "case-study") return <FileText size={14} />;
  return <ExternalLink size={14} />;
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f8fafc] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* 标题 */}
        <AnimatedSection className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            项目作品
          </h2>
          <p className="mt-3 text-slate-500">
            独立开发并上线的 AI 应用，可在线体验
          </p>
        </AnimatedSection>

        {/* 项目卡片 — 大卡片布局 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* 截图区域 */}
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                  {project.screenshot ? (
                    <Image
                      src={project.screenshot}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="text-4xl font-bold text-slate-200">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}
                  {/* 状态标识 */}
                  <div className="absolute top-3 right-3">
                    <StatusBadge status={project.status} />
                  </div>
                </div>

                {/* 内容区域 */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {project.description}
                  </p>

                  {/* 技术标签 */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 链接按钮 */}
                  <div className="mt-auto pt-4">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                      >
                        <LinkIcon type={project.type} />
                        {project.linkLabel}
                      </a>
                    ) : (
                      <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-400">
                        <LinkIcon type={project.type} />
                        {project.linkLabel || "即将上线"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
