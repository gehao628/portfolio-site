// 个人网站数据层 - 所有内容集中管理，修改内容不需要动组件代码

export const siteConfig = {
  name: "葛昊",
  nameEn: "Maxey Ge",
  title: "AI Transformation Consultant",
  subtitle: "咨询背景 × AI实践者",
  description:
    "4年战略咨询经验，现全职投入AI领域，用咨询思维解决企业AI落地问题",
  phone: "150-1120-5028",
  email: "gehao628@163.com",
  location: "北京",
  github: "https://github.com/gehao628",
  resumeUrl: "/resume.pdf", // 放到 public/ 目录下
};

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
  icon: string; // lucide icon 名称
  skills: string[];
}

export const aiSkillGroups: AISkillGroup[] = [
  {
    title: "日常 AI 工具",
    icon: "Sparkles",
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
    skills: [
      "Coze（扣子）智能体开发",
      "阿里云百炼 智能体开发",
      "Vercel 全栈部署",
    ],
  },
  {
    title: "技术实践",
    icon: "Code",
    skills: [
      "Agent 开发（RAG / Function Calling / 多Agent编排）",
      "模型微调（LoRA Fine-tuning）",
      "模型部署",
      "Prompt Engineering",
      "App Store 个人开发者",
    ],
  },
  {
    title: "认证",
    icon: "Award",
    skills: ["科大讯飞 AI 工程师证书"],
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
}

export const projects: Project[] = [
  {
    title: "AI 转型评估系统",
    description: "帮助企业评估AI应用机会，生成定制化转型建议报告",
    tags: ["LangGraph", "RAG", "Next.js"],
    link: "http://8.140.217.161",
    linkLabel: "在线体验",
    type: "live",
  },
  {
    title: "AI Career Coach",
    description: "AI驱动的职业发展教练，简历分析+面试模拟",
    tags: ["Claude API", "智谱GLM", "Next.js"],
    link: "https://ai-career-coach-ivory-six.vercel.app",
    linkLabel: "在线体验",
    type: "live",
  },
  {
    title: "AI 面试教练",
    description: "语音交互式面试模拟与反馈系统",
    tags: ["OpenAI API", "Speech Recognition", "Next.js"],
    link: undefined, // 待确认URL
    linkLabel: "在线体验",
    type: "live",
  },
  {
    title: "简历优化器",
    description: "AI分析简历与JD匹配度，输出优化建议",
    tags: ["OpenAI API", "Next.js"],
    link: undefined, // 待确认URL
    linkLabel: "在线体验",
    type: "live",
  },
  {
    title: "集体决策AI助手",
    description: "贝壳集团内部知识问答Agent，整合决策案例与方法论",
    tags: ["RAG", "Agent", "知识库"],
    linkLabel: "Case Study",
    type: "case-study",
  },
  {
    title: "提案诊断专家",
    description: "自动识别提案材料逻辑缺口，输出优化建议",
    tags: ["Agent", "Prompt Engineering"],
    linkLabel: "Case Study",
    type: "case-study",
  },
  {
    title: "LoRA 模型微调",
    description: "基于特定数据集的大模型微调实验",
    tags: ["LoRA", "Jupyter", "Fine-tuning"],
    link: "https://github.com/gehao628",
    linkLabel: "GitHub",
    type: "github",
  },
];

// 工作经历
export interface Experience {
  period: string;
  company: string;
  role: string;
  highlights: string[];
  isAI?: boolean; // 标记AI相关经历，用于视觉区分
}

export const experiences: Experience[] = [
  {
    period: "2026.01 - 至今",
    company: "AI 探索期",
    role: "独立 AI 开发者 & 内容创作者",
    isAI: true,
    highlights: [
      "全职投入AI学习与实践",
      "考取科大讯飞AI工程师证书",
      "独立开发并上线多个AI应用（Vibe Coding）",
      "AI内容创作者：抖音 / 小红书 / 视频号",
    ],
  },
  {
    period: "2025.06 - 2025.12",
    company: "贝壳集团 组织效能中心",
    role: "组织与人才发展高级主管",
    highlights: [
      "日常工作60%以上已实现AI深度替代/增强",
      "搭建内部知识问答Agent，减少重复咨询与专家依赖",
      "开发提案诊断专家Agent，提升上会材料标准化程度",
      "在团队内部推动Prompt工程方法分享，提升部门AI应用能力",
      "作为集体决策机制搭建PMO，推动三横六纵治理结构落地",
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
