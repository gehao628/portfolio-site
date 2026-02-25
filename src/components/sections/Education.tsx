"use client";

import { education } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Sparkles } from "lucide-react";
import GradientText from "@/components/ui/GradientText";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-dark-section px-4 py-12 sm:py-16 sm:px-6"
    >
      {/* 背景网格 */}
      <div className="animated-grid grid-fade absolute inset-0" />

      {/* 浮动光球 */}
      <motion.div
        className="absolute top-1/2 left-1/3 h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-[100px]"
        animate={{ x: [0, 20, 0], y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 h-[200px] w-[200px] rounded-full bg-violet-500/4 blur-[80px]"
        animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 浮动粒子 */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`edu-p-${i}`}
          className="absolute h-1 w-1 rounded-full bg-indigo-400/20"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3.5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
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
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            <GradientText>教育背景</GradientText>
          </h2>
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group mx-auto max-w-3xl relative"
          >
            {/* 卡片外层 - 持续边框微光 */}
            <motion.div
              className="rounded-2xl p-5 sm:p-6 relative overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
              whileHover={{ y: -3, transition: { duration: 0.3 } }}
            >
              {/* 顶部渐变流光 */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px overflow-hidden"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)",
                }}
              >
                <motion.div
                  className="h-full w-1/4"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(99,102,241,0.7), transparent)",
                  }}
                  animate={{ x: ["-100%", "500%"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 3,
                  }}
                />
              </motion.div>

              <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                {/* 图标 - 持续旋转呼吸 */}
                <motion.div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 0 rgba(99,102,241,0)",
                      "0 0 20px rgba(99,102,241,0.15)",
                      "0 0 0 rgba(99,102,241,0)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 12,
                    transition: { duration: 0.3 },
                  }}
                >
                  <GraduationCap size={24} className="text-indigo-400" />
                </motion.div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-white">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {edu.degree}
                    <span className="mx-2 text-slate-600">|</span>
                    {edu.period}
                  </p>
                  {edu.subtitle && (
                    <p className="mt-0.5 text-sm text-slate-500">
                      {edu.subtitle}
                    </p>
                  )}

                  {/* 荣誉标签 - 逐个浮动 */}
                  <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                    {edu.highlights.map((h, j) => (
                      <motion.span
                        key={j}
                        className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-indigo-300 cursor-default"
                        style={{
                          background: "rgba(99, 102, 241, 0.1)",
                          border: "1px solid rgba(99, 102, 241, 0.2)",
                        }}
                        // 持续微浮动
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 2.5 + j * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: j * 0.3,
                        }}
                        whileHover={{
                          scale: 1.08,
                          y: -5,
                          borderColor: "rgba(99,102,241,0.5)",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 20, -20, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: j * 0.5,
                          }}
                        >
                          <Award size={10} className="text-indigo-400" />
                        </motion.div>
                        {h}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 底部装饰 - 持续流动的渐变条 */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px overflow-hidden"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)",
                }}
              >
                <motion.div
                  className="h-full w-1/3"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)",
                  }}
                  animate={{ x: ["400%", "-100%"] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
