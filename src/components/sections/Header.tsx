"use client";

import { useState, useEffect } from "react";
import { navLinks, siteConfig } from "@/lib/data";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // 检测是否在深色区（Hero 区域内）
  const [inDarkZone, setInDarkZone] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      // Hero 区域大约是 100vh，在此范围内为深色区
      setInDarkZone(window.scrollY < window.innerHeight - 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 深色区：透明背景 + 白色文字；浅色区：白色背景 + 深色文字
  const isDark = inDarkZone && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {siteConfig.nameEn}
        </a>

        {/* 桌面端导航 */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors duration-300 ${
                  isDark
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 移动端汉堡菜单 */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            isDark ? "text-white" : "text-slate-900"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* 移动端菜单 */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
