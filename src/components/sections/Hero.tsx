import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, MapPin, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6">
      <div className="mx-auto max-w-3xl text-center">
        {/* 名字 */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {siteConfig.name}{" "}
          <span className="text-muted-foreground font-normal">
            / {siteConfig.nameEn}
          </span>
        </h1>

        {/* 定位句 */}
        <p className="mt-4 text-lg font-medium text-foreground sm:text-xl">
          {siteConfig.title}
          <span className="mx-2 text-muted-foreground">|</span>
          <span className="text-muted-foreground">{siteConfig.subtitle}</span>
        </p>

        {/* 一句话 */}
        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
          {siteConfig.description}
        </p>

        {/* 联系信息 */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Phone size={14} />
            {siteConfig.phone}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Mail size={14} />
            {siteConfig.email}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} />
            {siteConfig.location}
          </span>
        </div>

        {/* CTA 按钮 */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <a href={siteConfig.resumeUrl} download>
              <Download size={16} className="mr-2" />
              下载简历
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`mailto:${siteConfig.email}`}>
              <Mail size={16} className="mr-2" />
              联系我
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} className="mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
