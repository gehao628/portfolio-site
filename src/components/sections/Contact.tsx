import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        {/* 标题 */}
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          联系我
        </h2>
        <p className="mt-2 text-muted-foreground">
          如果你对AI落地、企业转型有想法，欢迎交流
        </p>

        {/* 联系方式 */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild>
            <a href={`mailto:${siteConfig.email}`}>
              <Mail size={16} className="mr-2" />
              {siteConfig.email}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`tel:${siteConfig.phone.replace(/-/g, "")}`}>
              <Phone size={16} className="mr-2" />
              {siteConfig.phone}
            </a>
          </Button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} className="mr-1.5" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={siteConfig.resumeUrl} download>
              <Download size={14} className="mr-1.5" />
              下载简历 PDF
            </a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-16 max-w-5xl border-t pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name} ({siteConfig.nameEn}).
        All rights reserved.
      </div>
    </section>
  );
}
