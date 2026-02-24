"use client";

import { education, certifications } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

export default function Education() {
  return (
    <section id="education" className="bg-[#f8fafc] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* 标题 */}
        <AnimatedSection className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            教育背景 & 认证
          </h2>
        </AnimatedSection>

        {/* 教育 */}
        {education.map((edu, i) => (
          <AnimatedSection key={i} delay={0.1}>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                  <GraduationCap size={22} className="text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {edu.degree}
                    <span className="mx-2 text-slate-300">|</span>
                    {edu.period}
                  </p>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {edu.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}

        {/* 证书展示 */}
        <AnimatedSection delay={0.2}>
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-6">
              <Award size={20} className="text-amber-500" />
              <h3 className="text-lg font-semibold text-slate-900">
                专业认证
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="cert-hover group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
                >
                  {/* 证书图片 */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  {/* 信息 */}
                  <div className="p-4 text-center">
                    <p className="font-medium text-slate-900">{cert.title}</p>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
