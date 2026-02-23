import { experiences } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Cpu } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-3xl">
        {/* 标题 */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            工作经历
          </h2>
        </div>

        {/* 时间线 */}
        <div className="relative">
          {/* 竖线 */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-200" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12">
                {/* 圆点 */}
                <div
                  className={`absolute left-2.5 top-1.5 flex h-[14px] w-[14px] items-center justify-center rounded-full border-2 ${
                    exp.isAI
                      ? "border-foreground bg-foreground"
                      : "border-gray-300 bg-white"
                  }`}
                />

                {/* 内容 */}
                <div>
                  {/* 时间 + 标签 */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                    {exp.isAI && (
                      <Badge className="gap-1 bg-foreground text-background text-xs">
                        <Cpu size={10} />
                        AI
                      </Badge>
                    )}
                  </div>

                  {/* 公司和职位 */}
                  <h3 className="mt-1 font-semibold">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>

                  {/* 要点 */}
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {exp.highlights.map((h, j) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
