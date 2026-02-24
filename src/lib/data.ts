// 个人网站数据层 - 所有内容集中管理，修改内容不需要动组件代码

export const siteConfig = {
  name: "葛昊",
  nameEn: "Maxey Ge",
  title: "AI 转型顾问 & 解决方案工程师",
  subtitle: "咨询思维 × AI 实践者",
  description:
    "4年战略咨询经验，现全职投入 AI 领域。独立开发多个 AI 应用，用结构化思维帮助企业评估和落地 AI 转型方案。",
  phone: "150-1120-5028",
  email: "gehao628@163.com",
  location: "北京",
  github: "https://github.com/gehao628",
  resumeUrl: "/resume.pdf",
};

// Hero 区统计数据
export const heroStats = [
  { label: "咨询经验", value: "4年" },
  { label: "AI 项目", value: "7+" },
  { label: "服务企业", value: "30+" },
  { label: "AI 认证", value: "2项" },
];

// 导航链接
export const navLinks = [
  { label: "AI 能力栈", href: "#ai-stack" },
  { label: "项目", href: "#projects" },
  { label: "经历", href: "#experience" },
  { label: "教育", href: "#education" },
  { label: "联系", href: "#contact" },
];

// AI 能力栈
export interface AISkillGroup {
  title: string;
  icon: string;
  color: string; // 分类彩色标签用
  skills: string[];
}

export const aiSkillGroups: AISkillGroup[] = [
  {
    title: "日常 AI 工具",
    icon: "Sparkles",
    color: "#6366f1",
    skills: [
      "Claude (重度用户)",
      "GPT-4",
      "Gemini",
      "Grok",
      "Claude Code",
      "OpenClaw (Jarvis)",
      "Cursor",
      "Vibe Coding",
    ],
  },
  {
    title: "AI 开发平台",
    icon: "Blocks",
    color: "#8b5cf6",
    skills: [
      "Coze（扣子）智能体开发",
      "阿里云百炼 智能体开发",
      "Vercel 全栈部署",
    ],
  },
  {
    title: "技术实践",
    icon: "Code",
    color: "#3b82f6",
    skills: [
      "Agent 开发（RAG / Function Calling / 多Agent编排）",
      "模型微调（LoRA Fine-tuning）",
      "模型部署",
      "Prompt Engineering",
      "App Store 个人开发者",
    ],
  },
  {
    title: "认证资质",
    icon: "Award",
    color: "#f59e0b",
    skills: ["科大讯飞 AI 工程师证书", "蚂蚁集团 AI 智能体证书"],
  },
];

// 项目数据
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  type: "live" | "case-study" | "github";
  status: "online" | "dev" | "completed";
  screenshot?: string; // /images/projects/xxx.png
}

export const projects: Project[] = [
  {
    title: "AI 转型评估系统",
    description:
      "帮助企业评估 AI 应用机会，通过多维度问卷 + RAG 知识库，生成定制化转型建议报告",
    tags: ["LangGraph", "RAG", "Next.js", "Python"],
    link: "http://8.140.217.161",
    linkLabel: "在线体验",
    type: "live",
    status: "online",
    screenshot: "/images/projects/ai-assessment.png",
  },
  {
    title: "CompAgent 多智能体系统",
    description:
      "基于 LangGraph 的多 Agent 协作系统，支持企业薪酬分析、数据解读等复杂任务",
    tags: ["LangGraph", "Multi-Agent", "FastAPI"],
    link: "http://8.140.217.161:8080",
    linkLabel: "在线体验",
    type: "live",
    status: "online",
    screenshot: "/images/projects/comp-agent.png",
  },
  {
    title: "AI Career Coach",
    description: "AI 驱动的职业发展教练，简历分析 + 面试模拟 + 职业规划建议",
    tags: ["Claude API", "智谱GLM", "Next.js"],
    link: "https://ai-career-coach-ivory-six.vercel.app",
    linkLabel: "在线体验",
    type: "live",
    status: "online",
    screenshot: "/images/projects/career-coach.png",
  },
  {
    title: "集体决策 AI 助手",
    description:
      "贝壳集团内部知识问答 Agent，整合决策案例与方法论，减少重复咨询",
    tags: ["RAG", "Agent", "知识库"],
    linkLabel: "Case Study",
    type: "case-study",
    status: "completed",
  },
  {
    title: "提案诊断专家",
    description: "自动识别提案材料逻辑缺口，输出结构化优化建议",
    tags: ["Agent", "Prompt Engineering"],
    linkLabel: "Case Study",
    type: "case-study",
    status: "completed",
  },
  {
    title: "LoRA 模型微调",
    description: "基于特定数据集的大模型微调实验，掌握 Fine-tuning 全流程",
    tags: ["LoRA", "Jupyter", "Fine-tuning"],
    link: "https://github.com/gehao628",
    linkLabel: "GitHub",
    type: "github",
    status: "completed",
  },
];

// 认证证书
export interface Certification {
  title: string;
  issuer: string;
  image: string; // /images/certs/xxx.png
}

export const certifications: Certification[] = [
  {
    title: "AI 模型微调工程师",
    issuer: "科大讯飞",
    image: "/images/certs/科大讯飞ai-模型微调.png",
  },
  {
    title: "AI 智能体开发证书",
    issuer: "蚂蚁集团",
    image: "/images/certs/蚂蚁集团ai-智能体证书】.png",
  },
];

// 工作经历
export interface Experience {
  period: string;
  company: string;
  role: string;
  highlights: string[];
  isAI?: boolean;
}

export const experiences: Experience[] = [
  {
    period: "2026.01 - 至今",
    company: "AI 探索期",
    role: "独立 AI 开发者 & 内容创作者",
    isAI: true,
    highlights: [
      "全职投入 AI 学习与实践",
      "考取科大讯飞 AI 工程师证书、蚂蚁集团 AI 智能体证书",
      "独立开发并上线多个 AI 应用（Vibe Coding）",
      "AI 内容创作者：抖音 / 小红书 / 视频号",
    ],
  },
  {
    period: "2025.06 - 2025.12",
    company: "贝壳集团 组织效能中心",
    role: "组织与人才发展高级主管",
    highlights: [
      "日常工作 60% 以上已实现 AI 深度替代/增强",
      "搭建内部知识问答 Agent，减少重复咨询与专家依赖",
      "开发提案诊断专家 Agent，提升上会材料标准化程度",
      "在团队内部推动 Prompt 工程方法分享，提升部门 AI 应用能力",
      "作为集体决策机制搭建 PMO，推动三横六纵治理结构落地",
      "负责集团一/二/三级组织架构变更管理",
    ],
  },
  {
    period: "2021.07 - 2025.06",
    company: "美世咨询",
    role: "咨询项目经理",
    highlights: [
      "主导或参与数十家中大型公司战略与管理咨询",
      "服务行业：消费品、生命科学、高科技、汽车制造、能源化工等",
      "国企客户：茅台集团、中国建筑、中国化学等",
      "外企客户：Zippo、福特、康明斯等",
      "代表项目：百万级战略澄清与解码、人力资源战略规划、组织诊断",
    ],
  },
];

// 教育背景
export interface Education {
  school: string;
  degree: string;
  period: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    school: "西南财经大学",
    degree: "金融与工商管理双学位",
    period: "2018 - 2022",
    highlights: [
      "大学生骨干培训班（全校 0.3%）",
      "互联网+ 省赛金奖 / 国赛铜奖",
      "国创国家级立项",
    ],
  },
];
