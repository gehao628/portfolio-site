"use client";

import { siteConfig } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MessageCircle, ArrowUpRight, Send } from "lucide-react";
import GradientText from "@/components/ui/GradientText";

const contactItems = [
  {
    icon: Mail,
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: "#6366f1",
    subtitle: "邮箱",
  },
  {
    icon: Phone,
    label: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/-/g, "")}`,
    color: "#8b5cf6",
    subtitle: "电话",
  },
  {
    icon: MessageCircle,
    label: siteConfig.wechat,
    color: "#07c160",
    subtitle: "微信",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-dark-section px-4 py-16 sm:py-20 sm:px-6"
    >
      {/* 背景网格 */}
      <div className="animated-grid grid-fade absolute inset-0" />

      {/* 浮动光球 - 更多层次 */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[450px] w-[450px] rounded-full bg-violet-500/8 blur-[130px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 h-[250px] w-[250px] rounded-full bg-indigo-500/6 blur-[80px]"
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/5 h-[200px] w-[200px] rounded-full bg-blue-500/4 blur-[70px]"
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 浮动粒子 */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`c-p-${i}`}
          className="absolute h-1 w-1 rounded-full bg-indigo-400/25"
          style={{
            top: `${15 + i * 13}%`,
            left: `${8 + ((i * 17) % 85)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 8 : -8, 0],
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 3.5 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div ref={ref} className="relative z-10 mx-auto max-w-3xl text-center">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <GradientText>一起聊聊</GradientText>
          </h2>
        </motion.div>

        {/* 卡片 */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const Tag = item.href ? "a" : "div";
            const linkProps = item.href ? { href: item.href } : {};

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              >
                <Tag
                  {...linkProps}
                  className="group relative flex flex-col items-center gap-3 rounded-2xl px-6 py-7 overflow-hidden cursor-pointer"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {/* 卡片顶部流光 */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-px overflow-hidden"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${item.color}30, transparent)`,
                    }}
                  >
                    <motion.div
                      className="h-full w-1/3"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${item.color}80, transparent)`,
                      }}
                      animate={{ x: ["-100%", "400%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 2 + i,
                        delay: i * 1,
                      }}
                    />
                  </motion.div>

                  {/* hover 光晕 */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      boxShadow: `inset 0 1px 0 ${item.color}20, 0 0 40px ${item.color}10`,
                    }}
                  />

                  {/* 图标容器 - 持续呼吸 + hover 放大 */}
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: `${item.color}15` }}
                    animate={{
                      scale: [1, 1.06, 1],
                      boxShadow: [
                        `0 0 0 rgba(0,0,0,0)`,
                        `0 0 20px ${item.color}20`,
                        `0 0 0 rgba(0,0,0,0)`,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                    whileHover={{
                      scale: 1.18,
                      rotate: 8,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                    >
                      <Icon size={22} style={{ color: item.color }} />
                    </motion.div>
                  </motion.div>

                  {/* 标签 */}
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {item.subtitle}
                  </span>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>

                  {/* 底部流光 */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px overflow-hidden"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${item.color}20, transparent)`,
                    }}
                  >
                    <motion.div
                      className="h-full w-1/4"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${item.color}60, transparent)`,
                      }}
                      animate={{ x: ["400%", "-100%"] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 3,
                        delay: i * 0.8,
                      }}
                    />
                  </motion.div>
                </Tag>
              </motion.div>
            );
          })}
        </div>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10"
        >
          <motion.a
            href={`mailto:${siteConfig.email}`}
            className="glow-button relative inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium text-white overflow-hidden"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
          >
            {/* 按钮内部流光 */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 3,
              }}
            />
            <motion.div
              animate={{ x: [0, 2, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Send size={16} />
            </motion.div>
            <span className="relative">发送邮件</span>
            <motion.div
              animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUpRight size={14} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
