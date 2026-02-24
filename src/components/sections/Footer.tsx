import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] px-6 py-8">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-2 text-center">
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {siteConfig.name} (
          {siteConfig.nameEn}). Built with Next.js & AI.
        </p>
      </div>
    </footer>
  );
}
