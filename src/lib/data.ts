// 个人网站数据层 - 所有内容集中管理

export const siteConfig = {
  name: "葛昊",
  nameEn: "Maxey Ge",
  // 不写死岗位，用标签覆盖 PM / HRBP / AI 岗位
  tags: ["企业管理咨询", "组织变革", "AI 产品构建", "Vibe Coding", "Agent 独立开发", "Claude Code & OpenClaw 重度用户"],
  tagline: "管理咨询 + 组织变革背景的 AI 实践者 · AI 产品构建者",
  description:
    "近五年企业管理服务经验，持续探索 AI 与业务的深度融合。独立开发完整 Agent 项目近十个，形成了完整的 AI 能力闭环。",
  phone: "150-1120-5028",
  email: "gehao628@163.com",
  location: "北京",
  wechat: "19950356476",
  photo: "/images/photo.png",
};

// Hero 统计
export const heroStats = [
  { label: "企业服务经验", value: "5年" },
  { label: "AI 项目", value: "10+" },
  { label: "服务企业", value: "30+" },
  { label: "AI 认证", value: "5项" },
];

// 导航
export const navLinks = [
  { label: "关于我", href: "#profile" },
  { label: "AI 能力", href: "#ai-stack" },
  { label: "项目作品", href: "#projects" },
  { label: "工作经历", href: "#experience" },
  { label: "联系", href: "#contact" },
];

// ============================================================
// 个人评价
// ============================================================

export interface Competency {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const personalProfile = {
  summary:
    "近五年咨询与企业管理咨询服务项目经理经验打下了结构化思维与用户需求洞察的底层能力，在贝壳推动 AI RAG 知识库与 Agent 工具在企业内部落地的过程中完成了从「方案设计者」到「产品构建者」的转变，AI 探索期从理论学习、专业认证到智能体开发与 Vibe Coding 实践，独立开发多个 Agent 项目，形成了完整的 AI 能力闭环，日常高频使用主流 AI 大模型与编码工具，对 AI 产品形态演进有敏锐嗅觉与前瞻判断。",
  competencies: [
    {
      title: "企业解决方案视角",
      description:
        "外资管理咨询顾问出身，作为项目经理主导百万级战略管理咨询项目交付，项目管理与跨团队协作经验，具备高管对话能力与业务理解力，具备结构化问题诊断、数据分析能力与方案设计能力；甲方内部 COE 经历，推动 Agent 产品在企业内部落地。",
      icon: "Briefcase",
      color: "#3b82f6",
    },
    {
      title: "AI 原生工作方式",
      description:
        "熟练运用 AI 进行信息检索、非结构化数据处理、逻辑推理与代码生成。GPT、Grok、Gemini、Claude Max 等主流大模型订阅，利用 OpenClaw 搭建个人 AI 分身系统，通过结构化知识库与多渠道 AI Agent 实现日常工作流的全面 AI 化，日常高频使用，对模型能力边界有深度体感认知。",
      icon: "Brain",
      color: "#8b5cf6",
    },
    {
      title: "AI 应用开发能力",
      description:
        "熟练使用 Claude Code、Cursor、Codex 等 AI Coding 工具，能以 Vibe Coding 方式独立完成全栈应用的开发与部署；精通 Coze、百炼等主流 Agent 低代码平台，能高效完成智能体与 Skills 搭建；深度理解大语言模型应用场景，对多 Agent 编排有实践经验。",
      icon: "Code",
      color: "#6366f1",
    },
    {
      title: "产品构建与迭代能力",
      description:
        "独立完成近十个 AI 产品的全生命周期管理，覆盖 PRD 撰写、竞品分析、用户画像定义、架构设计、开发迭代；擅长从真实场景痛点出发定义产品方向，在贝壳的 Agent 工具矩阵和个人 AI 分身系统中均验证了「需求洞察 → 快速产品化 → 用户反馈迭代」的闭环能力。",
      icon: "Rocket",
      color: "#10b981",
    },
    {
      title: "AI 赋能组织的实战能力",
      description:
        "不只是「了解 AI」，而是独立搭建了完整的 AI 赋能体系——RAG 知识库、ReAct 提案诊断 Agent、多个会议效率工具，在贝壳实现日常工作 60% 的 AI 替代增强；能将 AI 能力翻译成业务能理解的语言，推动 AI 在组织场景中真正落地。",
      icon: "Building2",
      color: "#f59e0b",
    },
    {
      title: "持续学习与探索驱动",
      description:
        "蚂蚁集团 Agent Engineer 认证、微软 Generative AI 认证、Datawhale AI+编程认证等多项 AI 相关认证。面对 AI 领域日新月异的变化，始终保持强烈的学习热情与探索欲，乐于在不确定性中寻找机会，学生时代即有创业经历，美世咨询时期主导开发创新业务产品创收数百万，离开贝壳两个月内独立完成多个 AI 产品开发。",
      icon: "Sparkles",
      color: "#06b6d4",
    },
  ] as Competency[],
};

// ============================================================
// AI 能力栈（每个技能有详细描述）
// ============================================================

export interface AISkillItem {
  name: string;
  desc: string;
}

export interface AISkillGroup {
  title: string;
  icon: string;
  color: string;
  skills: AISkillItem[];
}

export const aiSkillGroups: AISkillGroup[] = [
  {
    title: "日常 AI 工具",
    icon: "Sparkles",
    color: "#6366f1",
    skills: [
      {
        name: "Claude",
        desc: "主力对话与代码生成工具，重度用户（Max 订阅），日均高频交互",
      },
      {
        name: "GPT / Gemini / Grok",
        desc: "多模型对比使用，根据任务场景灵活切换，对能力边界有深度体感",
      },
      {
        name: "OpenClaw（AI 分身）",
        desc: "搭建个人 AI 操作系统，Telegram + 飞书双渠道 7×24h 智能助手",
      },
    ],
  },
  {
    title: "AI 开发平台",
    icon: "Blocks",
    color: "#8b5cf6",
    skills: [
      {
        name: "Claude Code / Cursor / Codex",
        desc: "AI Coding 工具链，Vibe Coding 方式独立完成全栈项目开发与部署",
      },
      {
        name: "Coze（扣子）/ 阿里云百炼",
        desc: "低代码智能体平台，熟悉 Workflow 编排、插件调用、知识库挂载，快速搭建 Agent 原型",
      },
      {
        name: "Vercel / 阿里云 ECS",
        desc: "全栈应用部署，Nginx 反向代理 + PM2 进程管理，独立完成生产环境交付",
      },
    ],
  },
  {
    title: "技术实践",
    icon: "Code",
    color: "#3b82f6",
    skills: [
      {
        name: "Agent 开发",
        desc: "RAG / Function Calling / ReAct 推理架构 / LangGraph 多 Agent 编排，有完整项目落地经验",
      },
      {
        name: "全栈应用开发",
        desc: "Next.js + FastAPI 前后端分离架构，SSE 流式通信，Web Speech API 语音交互",
      },
      {
        name: "模型本地部署与微调",
        desc: "使用 Ollama 部署开源模型，学习并初步掌握 LoRA 模型微调流程",
      },
      {
        name: "Prompt Engineering",
        desc: "系统化提示词设计，应用于咨询诊断、内容生成、代码生成、组织分析等多种场景",
      },
    ],
  },
];

// ============================================================
// 认证证书
// ============================================================

export interface Certification {
  title: string;
  issuer: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    title: "AI Fine-tuning Engineer",
    issuer: "科大讯飞",
    image: "/images/certs/科大讯飞ai-模型微调.png",
  },
  {
    title: "Agent Engineer",
    issuer: "蚂蚁集团",
    image: "/images/certs/蚂蚁集团ai-智能体证书】.png",
  },
  {
    title: "Generative AI",
    issuer: "Microsoft & LinkedIn",
    image: "/images/certs/微软-generative-ai.png",
  },
  {
    title: "AI+编程能力认证",
    issuer: "字节跳动 / 豆包",
    image: "/images/certs/datawhale-ai编程.png",
  },
];

// ============================================================
// 项目作品（分个人 / 企业内部）
// ============================================================

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  motivation: string;
  targetUsers: string;
  keyResults: string[];
  highlights: string[];
  tags: string[];
  link?: string;
  linkLabel?: string;
  type: "live" | "case-study" | "github" | "system";
  status: "online" | "dev" | "completed" | "running";
  gradient: string;
  category: "personal" | "enterprise";
}

export const projects: Project[] = [
  // ---- 个人独立项目 ----
  {
    title: "企业 AI 转型智能评估系统",
    subtitle: "Multi-Agent 模拟咨询团队，30 分钟完成企业 AI 转型评估",
    description:
      "基于 LangGraph 的 Multi-Agent 系统，模拟完整咨询团队协作流程，帮助企业评估 AI 应用机会并生成定制化转型建议报告。",
    motivation:
      "企业想推进 AI 转型却不知从何下手——请咨询公司做诊断要 3-6 个月、50-100 万，周期长、门槛高；自行评估又缺乏系统性框架和行业对标数据，决策层难以形成清晰的转型路径。",
    targetUsers: "转型方向不清晰 · 缺乏系统评估框架 · 外部咨询成本过高",
    keyResults: [
      "LangGraph 编排 5 个专业 Agent 协同完成完整咨询流程",
      "30 分钟内生成万字级专业评估报告",
      "SSE 流式通信实时可视化 Agent 工作进度与 Pipeline 动画",
    ],
    highlights: [
      "LangGraph 编排 5 个专业 Agent（访谈员、分析师、标杆研究员、战略规划师、质量审核员）",
      "SSE 流式通信实现每个 Agent 工作进度实时可视化（Pipeline 动画）",
      "Web Speech API 中文语音输入，Next.js + FastAPI 前后端分离，部署阿里云 ECS",
    ],
    tags: ["LangGraph", "Multi-Agent", "Next.js", "FastAPI", "SSE"],
    link: "http://8.140.217.161/assess",
    linkLabel: "在线体验",
    type: "live",
    status: "online",
    gradient: "linear-gradient(135deg, #6366f1, #7c3aed)",
    category: "personal",
  },
  {
    title: "CompAgent 企业数据分析智能体",
    subtitle: "市场基准数据 × 企业 Excel × AI 分析，自动生成咨询级诊断报告",
    description:
      "面向企业管理层的 AI 数据诊断工具，将市场基准数据 × 企业内部数据 × AI 分析整合为咨询级竞争力诊断报告。",
    motivation:
      "企业做数据竞争力分析时需要大量人力手动对齐内部数据与市场基准，外部咨询成本高、周期长，且分析方法论难以沉淀为可复用的工具，每次都从零开始。",
    targetUsers: "数据对齐耗时耗力 · 外部咨询成本高 · 方法论难沉淀复用",
    keyResults: [
      "支持任意格式 Excel 上传并自动完成字段映射与岗位语义匹配",
      "CR 竞争力分析 + 5 色风险分级 + 部门/职级分布可视化",
      "内置资深薪酬顾问 Agent 支持自然语言对话与 PDF 报告导出",
    ],
    highlights: [
      "支持任意格式 Excel 上传，自动完成字段映射与岗位语义匹配（对标美世体系）",
      "CR 竞争力分析 + 5 色风险分级 + 部门/职级分布可视化",
      "内置资深薪酬顾问 Agent，支持自然语言提问与 PDF 报告导出",
    ],
    tags: ["LangGraph", "FastAPI", "Excel 处理", "PDF 生成"],
    link: "http://8.140.217.161:8080",
    linkLabel: "在线体验",
    type: "live",
    status: "online",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    category: "personal",
  },
  {
    title: "个人 AI 分身系统",
    subtitle: "三层架构个人 AI 操作系统，已稳定运行数月",
    description:
      "从零设计的完整个人 AI 操作系统，由三层架构组成，实现日常工作流的全面 AI 化，已稳定运行数月，日均交互数十次。",
    motivation:
      "日常使用的 AI 工具越来越多但彼此割裂，知识无法共享、任务无法自动化、跨平台切换成本高，缺乏一个统一的 AI 操作系统来整合所有工作流。",
    targetUsers: "AI 工具彼此割裂 · 知识无法跨平台共享 · 重复性任务无法自动化",
    keyResults: [
      "结构化知识中枢 + 自动化任务引擎 + 多渠道 AI Agent 三层架构",
      "4 个定时任务自动执行（晨报/行业侦察/项目巡检/周复盘）",
      "Telegram + 飞书双渠道 7×24h 随时可对话",
    ],
    highlights: [
      "结构化知识中枢：Markdown 文件体系覆盖身份、目标、技能、项目管理，所有 AI 工具共享上下文",
      "自动化任务引擎：4 个定时任务（晨报 / 行业侦察 / 项目巡检 / 周复盘），自动写入并推送通知",
      "多渠道 AI Agent：Telegram + 飞书双渠道 7×24h 可对话，具备 CEO 顾问、心理教练等多重角色",
    ],
    tags: ["OpenClaw", "LaunchAgent", "Telegram", "飞书"],
    type: "system",
    status: "running",
    gradient: "linear-gradient(135deg, #8b5cf6, #a855f7)",
    category: "personal",
  },
  {
    title: "AI Career Coach 求职工具矩阵",
    subtitle: "简历 × JD 智能对齐改写 + AI 语音模拟面试",
    description:
      "AI 驱动的职业发展工具集，包含简历优化官（简历×JD 自动对齐改写）与 AI 面试陪练（语音模拟面试 + 评估报告）。",
    motivation:
      "求职者投递不同岗位需要反复调整简历却缺乏 JD 对齐工具，面试准备缺乏针对性实战练习，传统方式效率低且反馈滞后。",
    targetUsers: "简历难以精准匹配 JD · 面试缺乏实战练习 · 反馈周期长",
    keyResults: [
      "简历智能匹配 JD 关键词并自动改写经历描述",
      "语音模拟面试 + 多维度评估报告生成",
      "Claude API + 智谱 GLM 双模型驱动，按场景灵活切换",
    ],
    highlights: [
      "简历 × JD 自动对齐改写，智能匹配关键词与经历描述",
      "语音模拟面试 + 多维度评估报告",
      "Claude API + 智谱 GLM 双模型驱动",
    ],
    tags: ["Claude API", "智谱 GLM", "Next.js", "语音交互"],
    link: "https://ai-career-coach-ivory-six.vercel.app",
    linkLabel: "在线体验",
    type: "live",
    status: "online",
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    category: "personal",
  },
  // ---- 贝壳集团内部项目 ----
  {
    title: "集体决策 RAG 智能知识库",
    subtitle: "104 份核心知识资产 RAG 智能问答平台",
    description:
      "贝壳集团内部 AI 知识管理平台，解决知识分散、重复咨询专家的痛点，为秘书处成员提供即时智能问答。",
    motivation:
      "集体决策机制涉及的制度、流程、案例分散在上百份文档中，秘书处成员遇到问题只能反复咨询资深专家，响应慢、效率低，知识复用率极低。",
    targetUsers: "知识分散在上百份文档中 · 依赖专家口头传递 · 知识复用率低",
    keyResults: [
      "整合 104 份核心知识资产，覆盖 DOP 三角赋能体系",
      "RAG Pipeline 流式问答 + 自动标注引用来源",
      "支持 PDF/Word/PPT 上传与批量导入",
      "知识查询响应从「找专家等数小时」降至秒级，日常重复咨询量大幅减少",
    ],
    highlights: [
      "整合 104 份核心知识资产，覆盖 DOP 三角赋能体系（运营方/决策方/提案方）",
      "RAG Pipeline：文档解析 → 分块 → 智谱 Embedding 向量化 → ChromaDB → 流式生成",
      "支持 PDF/Word/PPT 上传与批量导入，回答自动标注引用来源",
    ],
    tags: ["RAG", "ChromaDB", "FastAPI", "Next.js", "智谱 Embedding"],
    link: "http://8.140.217.161:8081",
    linkLabel: "在线体验",
    type: "live",
    status: "online",
    gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
    category: "enterprise",
  },
  {
    title: "提案诊断专家 Agent",
    subtitle: "ReAct 推理架构 × Function Calling，四维度提案质量诊断",
    description:
      "贝壳集团提案质量自动诊断系统，基于 ReAct 推理架构，Agent 自主决定检索时机与策略，全过程可视化呈现推理链路。",
    motivation:
      "提案质量参差不齐严重影响集体决策效率——结构不完整、逻辑不清晰、缺乏数据支撑等问题反复出现，但提案方在提交前缺乏专业的自检工具。",
    targetUsers: "提案质量参差不齐 · 缺乏提交前自检工具 · 诊断依赖人工经验",
    keyResults: [
      "ReAct 推理 + Function Calling，最多 8 轮自主决策循环",
      "四维度诊断（结构/逻辑/决策友好性/可执行性）10 分制评分",
      "SSE 实时推送思考链与工具调用过程，可视化呈现推理链路",
      "提案方提交前即可获得 AI 诊断反馈，提案质量与一次通过率显著提升",
    ],
    highlights: [
      "ReAct 推理 + Function Calling，最多 8 轮推理循环（理解→检索标准→检索案例→综合报告）",
      "四维度诊断：结构完整性、逻辑严谨性、决策友好性、可执行性，输出 10 分制评分",
      "SSE 实时推送思考链与工具调用过程，前端可视化呈现 Agent 每一步推理",
    ],
    tags: ["ReAct", "Function Calling", "SSE", "RAG"],
    link: "http://8.140.217.161:8081/tools/proposal",
    linkLabel: "在线体验",
    type: "live",
    status: "online",
    gradient: "linear-gradient(135deg, #f59e0b, #f97316)",
    category: "enterprise",
  },
];

// ============================================================
// 工作经历
// ============================================================

export interface ExperienceSection {
  title: string;
  items: string[];
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  summary?: string;
  sections?: ExperienceSection[];
  highlights?: string[];
  isAI?: boolean;
  clients?: { name: string; category: string; color: string }[];
}

export const experiences: Experience[] = [
  {
    period: "2025.06 - 2025.12",
    company: "贝壳集团 · 组织效能中心",
    role: "COE 高级主管",
    summary:
      "作为集体决策机制搭建与落地 PMO，主导集团级治理机制建设与 AI 赋能体系构建，日常工作 60% 以上已实现 AI 深度替代/增强，初步建成「一个奇妙等式 + 一套知识库 + 一个课程体系 + 一个交流社群 + N 个 AI 智能体工具」的系统化赋能体系。",
    sections: [
      {
        title: "组织治理",
        items: [
          "推动贝壳「三横六纵」治理结构理念共识，聚焦关键场景落实集体决策机制",
          "持续跟进事业线与事务线已建 AT 运行状况并开展赋能",
          "系统化复盘各 BG 优秀实践与典型挑战，提炼可复用方法与流程",
        ],
      },
      {
        title: "组织管理",
        items: [
          "负责集团一/二/三级组织架构变更的审批、复核与配套调整",
          "参与集团组织管控模式研究，支持人力资源战略规划与总部组织架构调整方案设计",
          "承担贝壳国际化组织研究、TOP 模型升级、组织效能诊断等专项研究",
        ],
      },
      {
        title: "业务支持",
        items: [
          "针对事业线组织协同问题开展专项研究，萃取行业内外领先实践并提出结构化建议",
          "支持事业线集中化提效课题，提炼关键评估维度与衡量指标体系",
          "主导价值流岗位价值评估 AI 课程内容制作与审核，推动专业知识的规模化复用",
        ],
      },
      {
        title: "AI 赋能与智能化建设",
        items: [
          "独立搭建集体决策 RAG 智能知识库，整合 104 份核心知识资产，支持秘书处即时智能问答",
          "开发提案诊断专家 Agent（基础版 RAG 检索 + 进阶版 ReAct 推理），四维度自动诊断",
          "开发议程生成、纪要生成、AT/EMT 自检等多个 AI 工具，建成系统化智能赋能体系",
          "团队内持续进行 Prompt 工程与智能体设计经验分享，推动部门 AI 应用能力提升",
          "研究 AI 时代组织形态演进路径，搭建岗位盘点与 AI 替代评估模型",
        ],
      },
    ],
  },
  {
    period: "2021.07 - 2025.06",
    company: "美世咨询（Mercer）",
    role: "咨询顾问 → 项目经理",
    summary:
      "4 年间从咨询顾问成长为项目经理，独立主导百万级战略与管理咨询项目交付，服务数十家中大型企业，覆盖消费品、生命科学、高科技、汽车制造、工程建筑、能源化工等行业，项目内容涵盖战略解码、组织诊断、岗位体系、人才管理等全模块。",
    sections: [
      {
        title: "战略规划类项目",
        items: [
          "某大型医药集团战略澄清与解码：作为项目经理，通过行业研究、专家访谈、闭门研讨会明确五年战略目标，完成关键成功要素分解与战略必赢之仗研讨，落地年度业务规划与高管绩效合约",
          "某白酒龙头企业人力资源战略规划：负责人力资本效能诊断与蓝图规划，通过皮尔逊相关系数与双尾假设检验建立多元回归编制预测模型，完成关键人才数量与结构规划",
        ],
      },
      {
        title: "组织诊断与体系建设",
        items: [
          "某大型省属国企组织诊断：作为项目经理，构建「战略-领军-组织-人才」四维诊断框架（4 维视角、6 大议题、12 个评价性指标、5 个监测性指标），主导与董事长的成果汇报",
          "某低空经济龙头公司岗位职级体系优化：作为项目经理，负责从 BD 到交付全过程，完成岗位梳理、IPE 岗位价值评估、任职资格体系搭建与职级管理办法",
        ],
      },
      {
        title: "人才管理类项目",
        items: [
          "某外资消费品人才能力建模：通过战略解读、BEI 访谈、能力素质卡牌分析与高管研讨会，产出不同层级管理者成功者画像，形成人才观与用人标准",
          "某白酒龙头企业员工契合度诊断：作为项目经理，主导 4 万份调研问卷设计与回收，按层级/司龄/职能多维切分分析，开展焦点小组访谈并完成诊断报告",
          "中建某下属企业学习地图设计：精准识别营销体系优势与痛点，通过 BEI 访谈与对标提炼能力素质标准，设计含内容清单、方式匹配的学习地图体系",
        ],
      },
      {
        title: "关键能力",
        items: [
          "商业思维与业务理解力：多个战略规划与解码项目交付，基于战略完成组织能力优化",
          "高管对话与个人影响力：多次担任中大型项目经理，主导董事长/CEO 级别决策者沟通与汇报，多次在大型研讨会中担任组织与引导角色",
          "数据分析与建模：大型集团编制预测多元回归模型搭建、人效指标提取与分析、4 万份问卷多维数据分析等",
        ],
      },
    ],
    clients: [
      { name: "茅台集团", category: "国企", color: "#dc2626" },
      { name: "中国建筑", category: "国企", color: "#1d4ed8" },
      { name: "中国化学", category: "国企", color: "#0369a1" },
      { name: "中国石油", category: "国企", color: "#b45309" },
      { name: "吉利科技", category: "民企", color: "#0d9488" },
      { name: "国为医药", category: "民企", color: "#059669" },
      { name: "陶德砂锅", category: "民企", color: "#d97706" },
      { name: "Zippo", category: "外企", color: "#7c3aed" },
      { name: "Ford", category: "外企", color: "#2563eb" },
      { name: "Cummins", category: "外企", color: "#dc2626" },
    ],
  },
];

// ============================================================
// 教育背景
// ============================================================

export interface Education {
  school: string;
  degree: string;
  period: string;
  subtitle?: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    school: "西南财经大学",
    degree: "金融学 & 工商管理双学位",
    period: "2018 - 2022",
    subtitle: "经济与管理研究院 · 经济与管理国际化创新人才班",
    highlights: [
      "大学生骨干培训班进修",
      "互联网+ 创新创业大赛省赛金奖、国赛铜奖",
      "国家级大学生创新创业训练计划优秀结项",
    ],
  },
];
