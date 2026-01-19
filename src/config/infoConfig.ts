export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Yang Zhi Hao'
export const headline = 'AI Agent Engineer & Java Backend Developer'
export const introduction = 'AI智能体开发开发工程师，专注于AI智能体开发、分布式系统架构、北斗网格引擎和低空经济领域的技术创新。'
export const email = 'yangzhihao688@163.com'
export const githubUsername = 'MangolDurian'

// about page
export const aboutMeHeadline = "AI 智能体开发工程师 · 分布式系统架构师"
export const aboutParagraphs = [
  "2023年6月毕业于东莞理工学院计算机科学与技术专业，现任职于中科云遥（东莞）科技有限公司，担任 AI 智能体开发工程师和后端开发工程师。我热爱编程和技术创新，专注于 Java 后端开发和 AI 智能体技术。",
  "在北斗网格引擎、AI 驱动的向量检索平台、实时视频 AI 推理系统等领域有丰富的实战经验。独立完成多个大型企业级项目的架构设计与核心能力实现，擅长处理高并发、大数据量场景下的技术挑战。",
  "技术栈涵盖 Java / Spring Boot、Elasticsearch、向量检索（pgvector）、AI 大模型应用（MCP 协议、RAG）、计算机视觉（YOLO）、分布式系统架构等。致力于将传统企业级应用与人工智能技术深度融合，创造更智能、更高效的解决方案。",
  "个人博客：https://www.yzh6688.top/ - 分享技术实践和项目经验"
]


// blog
export const blogHeadLine = "我的技术思考和实践"
export const blogIntro = "分享关于 AI 智能体、分布式系统、向量检索和工程化实践的技术文章。"


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/MangolDurian',
    external: true
  },
  {
    name: 'Email',
    icon: 'envelope',
    href: 'mailto:yangzhihao688@163.com',
    external: true
  },
  {
    name: 'Blog',
    icon: 'rss',
    href: 'https://www.yzh6688.top/',
    external: true
  }
]

// https://simpleicons.org/
export const techIcons = [
  "java",
  "spring",
  "springboot",
  "elasticsearch",
  "python",
  "pytorch",
  "fastapi",
  "docker",
  "git",
  "github",
  "mysql",
  "postgresql",
  "redis",
  "rabbitmq",
  "minio",
  "nginx",
  "linux",
  "gdal",
  "opencv"
];



