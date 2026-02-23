"use client";

import { aiSkillGroups } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Blocks, Code, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// 图标映射
const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Blocks,
  Code,
  Award,
};

export default function AIStack() {
  return (
    <section id="ai-stack" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* 标题 */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            AI 能力栈
          </h2>
          <p className="mt-2 text-muted-foreground">
            从日常工具到底层技术，完整的 AI 实践能力
          </p>
        </div>

        {/* 卡片网格 */}
        <div className="grid gap-6 sm:grid-cols-2">
          {aiSkillGroups.map((group) => {
            const Icon = iconMap[group.icon] || Sparkles;
            return (
              <Card
                key={group.title}
                className="border border-gray-100 bg-gradient-to-br from-white to-gray-50/50 shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2.5 text-base font-semibold">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                      <Icon size={16} className="text-gray-700" />
                    </div>
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
