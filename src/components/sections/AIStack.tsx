"use client";

import { aiSkillGroups } from "@/lib/data";
import { Sparkles, Blocks, Code, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Blocks,
  Code,
  Award,
};

export default function AIStack() {
  return (
    <section id="ai-stack" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* 标题 */}
        <AnimatedSection className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            AI 能力栈
          </h2>
          <p className="mt-3 text-slate-500">
            从日常工具到底层技术，完整的 AI 实践能力
          </p>
        </AnimatedSection>

        {/* 玻璃态卡片网格 */}
        <div className="grid gap-6 sm:grid-cols-2">
          {aiSkillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] || Sparkles;
            return (
              <AnimatedSection key={group.title} delay={i * 0.1}>
                <div className="glass-card group rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* 卡片头部 */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${group.color}15` }}
                    >
                      <Icon
                        size={20}
                        style={{ color: group.color }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {group.title}
                    </h3>
                  </div>

                  {/* 技能标签 */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full px-3 py-1 text-sm text-slate-600 ring-1 ring-slate-200 bg-white/60 transition-colors hover:ring-indigo-300 hover:text-indigo-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
