export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = '杨智昊'
export const headline = 'Java Backend Developer & AI Agent Engineer'
export const introduction = 'Java后端开发工程师，专注于AI智能体开发、北斗网格引擎和低空经济领域的技术创新。'
export const email = 'yangzhihao@example.com'
export const githubUsername = 'yangzhihao'

// about page
export const aboutMeHeadline = "Java后端开发工程师，AI智能体开发专家"
export const aboutParagraphs = [
  "2023年6月毕业于东莞理工学院，现任职于中科云遥（东莞）科技有限公司。我热爱编程，专注于Java后端开发和AI智能体技术。",
  "在北斗网格引擎、低空经济无人机空域障碍物识别、AI智能体配套工具开发等领域有丰富的实战经验。主导过多个重要项目的底层架构设计与核心能力实现。",
  "技术栈包括Java、Spring Boot、Elasticsearch、MCP工具开发等，致力于将传统企业级应用与人工智能技术深度融合，创造更智能的解决方案。"
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


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
    href: 'https://github.com/yangzhihao',
    external: true
  },
  {
    name: 'Email',
    icon: 'envelope',
    href: 'mailto:yangzhihao@example.com',
    external: true
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://linkedin.com/in/yangzhihao',
    external: true
  }
]

// https://simpleicons.org/
export const techIcons = [
  "java",
  "spring",
  "elasticsearch",
  "python",
  "docker",
  "git",
  "github",
  "postman",
  "mysql",
  "postgresql",
  "redis",
  "kafka",
  "nginx",
  "linux",
  "jenkins",
  "mongodb",
  "apache"
];



