import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";

// 根据类型选择图标
function LinkIcon({ type }: { type: string }) {
  if (type === "github") return <Github size={14} />;
  if (type === "case-study") return <FileText size={14} />;
  return <ExternalLink size={14} />;
}

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* 标题 */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            项目作品
          </h2>
          <p className="mt-2 text-muted-foreground">
            独立开发并上线的 AI 应用，可在线体验
          </p>
        </div>

        {/* 项目卡片网格 */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col gap-3">
                {/* 技术标签 */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {/* 链接按钮 */}
                {project.link ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkIcon type={project.type} />
                      <span className="ml-1.5">{project.linkLabel}</span>
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    disabled
                  >
                    <LinkIcon type={project.type} />
                    <span className="ml-1.5">
                      {project.linkLabel || "即将上线"}
                    </span>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
