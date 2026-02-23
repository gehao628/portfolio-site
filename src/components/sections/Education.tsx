import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="bg-gray-50/60 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        {/* 标题 */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            教育背景
          </h2>
        </div>

        {education.map((edu, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                <GraduationCap size={18} className="text-gray-700" />
              </div>
              <div>
                <h3 className="font-semibold">{edu.school}</h3>
                <p className="text-sm text-muted-foreground">
                  {edu.degree}
                  <span className="mx-2">·</span>
                  {edu.period}
                </p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {edu.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
