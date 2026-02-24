"use client";

import { experiences } from "@/lib/data";
import { Cpu } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Experience() {
  return (
    <section id="experience" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        {/* 标题 */}
        <AnimatedSection className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            工作经历
          </h2>
        </AnimatedSection>

        {/* 渐变时间线 */}
        <div className="relative">
          {/* 渐变竖线 */}
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 timeline-gradient rounded-full" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="relative pl-12">
                  {/* 圆点 */}
                  <div
                    className={`absolute left-2 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      exp.isAI
                        ? "border-indigo-500 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.4)]"
                        : "border-slate-300 bg-white"
                    }`}
                  />

                  {/* 卡片内容 */}
                  <div
                    className={`rounded-xl p-5 transition-all ${
                      exp.isAI
                        ? "bg-gradient-to-r from-indigo-50/80 to-violet-50/50 ring-1 ring-indigo-100"
                        : "bg-slate-50/60"
                    }`}
                  >
                    {/* 时间 + AI 标签 */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm text-slate-500">
                        {exp.period}
                      </span>
                      {exp.isAI && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
                          <Cpu size={10} />
                          AI
                        </span>
                      )}
                    </div>

                    {/* 公司和职位 */}
                    <h3 className="mt-1.5 text-lg font-semibold text-slate-900">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-slate-500">{exp.role}</p>

                    {/* 要点 */}
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span
                            className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                              exp.isAI ? "bg-indigo-400" : "bg-slate-400"
                            }`}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
