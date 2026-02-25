"use client";

import { experiences } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users } from "lucide-react";
import GradientText from "@/components/ui/GradientText";

// 时间线能量脉冲 - 沿竖线持续向下流动的光点
function TimelinePulse() {
  return (
    <>
      {[0, 3, 6].map((delay) => (
        <motion.div
          key={delay}
          className="absolute left-[11px] h-8 w-[5px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(99,102,241,0.8), transparent)",
            filter: "blur(1px)",
          }}
          initial={{ top: "0%", opacity: 0 }}
          animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}

// 单个经历卡片
function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative pl-10 sm:pl-12"
    >
      {/* 时间线圆点 - 发光 + 呼吸动画 */}
      <div className="absolute left-[7px] top-2 flex h-4 w-4 items-center justify-center">
        <motion.span
          className="absolute h-5 w-5 rounded-full bg-indigo-500/20"
          animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.6,
          }}
        />
        <motion.span
          className="relative h-2.5 w-2.5 rounded-full bg-indigo-500"
          animate={{
            boxShadow: [
              "0 0 6px rgba(99,102,241,0.4)",
              "0 0 14px rgba(99,102,241,0.8)",
              "0 0 6px rgba(99,102,241,0.4)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 卡片 */}
      <motion.div
        className="group relative rounded-2xl p-5 sm:p-6 transition-all duration-300"
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
        whileHover={{ y: -4, transition: { duration: 0.3 } }}
      >
        {/* hover 光晕 */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(99,102,241,0.15), 0 0 50px rgba(99,102,241,0.08)",
          }}
        />

        {/* 卡片顶部渐变线 - 持续闪光 */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px rounded-t-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
          }}
        >
          <motion.div
            className="h-full w-1/3"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(99,102,241,0.8), transparent)",
            }}
            animate={{ x: ["-100%", "400%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2,
              delay: index * 1.5,
            }}
          />
        </motion.div>

        {/* 头部 */}
        <div className="relative flex flex-wrap items-center gap-2 mb-1">
          <motion.span
            className="text-sm font-semibold text-indigo-400/80"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {exp.period}
          </motion.span>
        </div>

        <h3 className="relative text-lg font-bold text-white">
          {exp.company}
        </h3>
        <p className="relative text-sm font-semibold text-slate-400">
          {exp.role}
        </p>

        {/* 概述 */}
        {exp.summary && (
          <div className="relative mt-3 flex items-start gap-0">
            {/* 左侧竖条 - 渐变呼吸 */}
            <motion.div
              className="shrink-0 w-0.5 rounded-full self-stretch mr-3"
              animate={{
                background: [
                  "linear-gradient(180deg, rgba(99,102,241,0.5), rgba(139,92,246,0.2))",
                  "linear-gradient(180deg, rgba(139,92,246,0.5), rgba(99,102,241,0.2))",
                  "linear-gradient(180deg, rgba(99,102,241,0.5), rgba(139,92,246,0.2))",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-[13px] leading-[1.8] text-slate-300/90">
              {exp.summary}
            </p>
          </div>
        )}

        {/* 分模块 - 2 列网格 */}
        {exp.sections && (
          <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
            {exp.sections.map((sec, si) => (
              <motion.div
                key={si}
                className="rounded-xl p-3.5 relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: index * 0.15 + 0.3 + si * 0.08,
                  duration: 0.4,
                }}
                whileHover={{
                  borderColor: "rgba(99,102,241,0.2)",
                  background: "rgba(255, 255, 255, 0.05)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="mb-2 flex items-center gap-2">
                  {/* 竖条指示器 - 持续微动 */}
                  <motion.div
                    className="h-3 w-0.5 rounded-full bg-indigo-500"
                    animate={{ scaleY: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: si * 0.5,
                    }}
                  />
                  <h4 className="text-sm font-bold text-white/90">
                    {sec.title}
                  </h4>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {sec.items.map((item, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start gap-2 text-xs leading-relaxed text-slate-400"
                      initial={{ opacity: 0, x: -8 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: index * 0.15 + 0.5 + si * 0.08 + j * 0.05,
                        duration: 0.3,
                      }}
                    >
                      <motion.div
                        className="mt-1 shrink-0"
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: j * 0.4 + si * 0.8,
                        }}
                      >
                        <Zap size={10} className="text-indigo-500/60" />
                      </motion.div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        )}

        {/* 客户列表 - 彩色徽章 */}
        {exp.clients && (
          <motion.div
            className="relative mt-4 rounded-xl p-3.5 overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
            whileHover={{
              borderColor: "rgba(99,102,241,0.15)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="mb-2.5 flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Users size={12} className="text-slate-500" />
              </motion.div>
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                服务客户（部分）
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.clients.map((c, ci) => (
                <motion.span
                  key={ci}
                  className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold cursor-default"
                  style={{
                    color: c.color,
                    backgroundColor: `${c.color}15`,
                    border: `1px solid ${c.color}30`,
                  }}
                  // 持续微浮动 - 每个徽章不同节奏
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2.5 + ci * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: ci * 0.2,
                  }}
                  whileHover={{
                    scale: 1.12,
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                >
                  {c.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-dark-section px-4 py-16 sm:py-20 sm:px-6"
    >
      {/* 背景网格 */}
      <div className="animated-grid grid-fade absolute inset-0" />

      {/* 浮动光球 */}
      <motion.div
        className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-indigo-500/6 blur-[120px]"
        animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 h-[200px] w-[200px] rounded-full bg-blue-500/4 blur-[80px]"
        animate={{ x: [0, 15, -15, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 浮动粒子 */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-indigo-400/20"
          style={{
            top: `${10 + i * 11}%`,
            left: `${5 + ((i * 13) % 90)}%`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            <GradientText>工作经历</GradientText>
          </h2>
          <motion.p
            className="mt-3 text-slate-400"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            从外资管理咨询到企业内部治理，从组织变革到 AI 赋能
          </motion.p>
        </motion.div>

        {/* 时间线 */}
        <div className="relative">
          {/* 竖线 - 渐变发光 */}
          <div
            className="absolute left-[14px] top-2 bottom-2 w-px rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0.15) 100%)",
            }}
          />

          {/* 能量脉冲 */}
          <TimelinePulse />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
