// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "Some of the projects I've worked on and built. These include closed-source enterprise projects in distributed system architecture, AI integration, and high-performance data processing."

export type ProjectItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects
  export const projects: Array<ProjectItemType> = [
    {
      name: '北斗网格码引擎 — 分布式地理空间数据管理系统',
      description:
        '基于 DDD 架构设计的分布式地理信息引擎，支持北斗网格码与 GeoSOT 编码，实现多源空间数据导入、网格索引构建与高性能空间检索。核心亮点：将检索能力以 MCP 工具形式对外暴露，支持智能体通过自然语言驱动的工具调用完成空间数据查询与分析。查询性能从 30s 优化至 3s 内，支持多节点横向扩展。',
      link: { href: '/blogs/beidou-grid-engine', label: '项目详情' },
      category: ['企业系统', 'AI 智能体'],
      techStack: ['Java', 'Spring Boot 3.4', 'Elasticsearch 8.8', 'GDAL', 'RabbitMQ', 'Redis', 'MySQL', 'MCP'],
      tags: ['北斗网格', '地理信息系统', 'AI智能体', 'MCP', '分布式系统', '空间检索']
    },
    {
      name: '影像向量检索平台 — AI 驱动的多模态检索系统',
      description:
        '构建面向地理空间影像的向量化与相似度检索平台，集成对象存储、向量数据库与多模态嵌入模型（CLIP），实现影像与文本的语义级检索。核心亮点：事件驱动架构实现自动化数据处理流水线，pgvector + IVFFlat 索引优化使检索效率提升约 3 倍，支持亚秒级向量查询和多数据集动态扩展。',
      link: { href: '/blogs/image-vector-platform', label: '项目详情' },
      category: ['AI 系统', '数据平台'],
      techStack: ['Spring Boot 3.4', 'PostgreSQL', 'pgvector', 'MinIO', 'Elasticsearch', 'CLIP', 'Java 17'],
      tags: ['向量检索', '多模态 AI', '语义搜索', '事件驱动', 'CLIP', '对象存储']
    },
    {
      name: '公安智能交通识别系统 — 实时视频 AI 推理平台',
      description:
        '面向公安交通管理的实时视频 AI 推理平台，提供车牌识别、事故检测、车辆追踪及夜间飙车识别等能力。核心亮点：稳定处理 50+ 路实时视频流，YOLO + SAHI 切片推理使小目标召回率从 60% 提升至 95%，车牌识别准确率达 96%；结合视觉大模型二次验证，将事故验证响应时间从 15s 降至 6s，误报率降低 50%。',
      link: { href: '/blogs/traffic-ai-system', label: '项目详情' },
      category: ['AI 系统', '计算机视觉'],
      techStack: ['Python', 'FastAPI', 'PyTorch', 'YOLO', 'SAHI', 'MQTT', 'MinIO', 'Docker', 'GPU'],
      tags: ['计算机视觉', '目标检测', '视频流处理', 'YOLO', '实时推理', '智能交通']
    },
    {
      name: '低空经济无人机空域避障服务',
      description:
        '主导低空经济方向，无人机空域障碍物识别服务的底层架构设计与核心能力实现。该系统为无人机提供实时空域障碍物检测和避障路径规划服务，支持多机协同和动态空域管理。',
      link: { href: '/blogs/drone-obstacle-detection', label: '项目详情' },
      category: ['AI系统', '低空经济'],
      techStack: ['Java', 'Spring Cloud', 'OpenCV', 'PostgreSQL', 'Redis'],
      tags: ['无人机', '障碍物识别', '低空经济', '计算机视觉', '路径规划']
    }
  ]
  
  export const githubProjects: Array<ProjectItemType> = [
    {
      name: 'LlamaFactory',
      description: 'Unified Efficient Fine-Tuning of 100+ LLMs & VLMs (ACL 2024) - 统一的大语言模型高效微调框架。',
      link: { href: 'github.com/hiyouga/LlamaFactory', label: 'View on GitHub' },
      gitStars: 66070,
      gitForks: 8027
    },
    {
      name: 'anthropics/skills',
      description: 'Public repository for Agent Skills - Anthropic 官方 AI Agent 技能库。',
      link: { href: 'github.com/anthropics/skills', label: 'View on GitHub' },
      gitStars: 45115,
      gitForks: 4217
    },
    {
      name: 'langchain',
      description: '🦜🔗 The platform for reliable agents - 构建可靠 AI Agent 的平台框架。',
      link: { href: 'github.com/langchain-ai/langchain', label: 'View on GitHub' },
      gitStars: 124544,
      gitForks: 20504
    },
    {
      name: 'MiroThinker',
      description: 'Open source deep research agent optimized for research and prediction - 在 GAIA 基准测试中获得 60.2% 分数的深度研究 Agent。',
      link: { href: 'github.com/MiroMindAI/MiroThinker', label: 'View on GitHub' },
      gitStars: 5364,
      gitForks: 381
    },
    {
      name: 'one-mcp',
      description: 'A centralized proxy platform for MCP servers - 集中式 MCP 服务器代理平台，提供 Web 管理界面。',
      link: { href: 'github.com/burugo/one-mcp', label: 'View on GitHub' },
      gitStars: 303,
      gitForks: 31
    },
    {
      name: 'llm-mcp-rag',
      description: 'LLM + MCP + RAG = Magic. 结合大语言模型、模型上下文协议和检索增强生成的智能系统。',
      link: { href: 'github.com/KelvinQiu802/llm-mcp-rag', label: 'View on GitHub' },
      gitStars: 469,
      gitForks: 83
    },
    {
      name: 'claude-code-reverse',
      description: 'A Tool to Visualize Claude Code\'s LLM Interactions - 可视化 Claude Code 的 LLM 交互工具。',
      link: { href: 'github.com/Yuyz0112/claude-code-reverse', label: 'View on GitHub' },
      gitStars: 1964,
      gitForks: 346
    },
    {
      name: 'pgvector',
      description: 'Open-source vector similarity search for Postgres - PostgreSQL 的开源向量相似度搜索扩展。',
      link: { href: 'github.com/pgvector/pgvector', label: 'View on GitHub' },
      gitStars: 19342,
      gitForks: 1030
    }
  ]
  