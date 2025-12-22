// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."

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
      name: '北斗网格引擎',
      description:
        '可独立开发维护的北斗网格引擎系统，支持多部门技术债务管理。',
      link: { href: '#', label: '企业项目' },
      category: ['企业系统'],
      techStack: ['Java', 'Spring Boot', 'Elasticsearch', 'MySQL'],
      tags: ['北斗', '网格引擎', '地理信息系统']
    },
    {
      name: 'MCP智能体配套工具',
      description:
        '为北斗网格引擎开发的智能体配套MCP工具，提升系统集成智能化水平。',
      link: { href: 'https://github.com/yangzhihao/mcp-tools', label: '开源项目' },
      category: ['AI工具'],
      techStack: ['Java', 'Python', 'MCP Protocol', 'Docker'],
      tags: ['AI智能体', 'MCP', '工具开发']
    },
    {
      name: '低空经济无人机空域障碍物识别服务',
      description:
        '主导低空经济方向，无人机空域障碍物识别服务的底层架构设计与核心能力实现。',
      link: { href: '#', label: '政府项目' },
      category: ['AI系统'],
      techStack: ['Java', 'Spring Cloud', 'OpenCV', 'PostgreSQL'],
      tags: ['无人机', '障碍物识别', '低空经济', '计算机视觉']
    },
    {
      name: '栅格图片向量化存储平台',
      description:
        '为民航项目原型系统研发，主导栅格图片向量化存储平台的后端底层架构设计与关键能力实现。',
      link: { href: '#', label: '民航项目' },
      category: ['数据平台'],
      techStack: ['Java', 'Elasticsearch', 'Redis', 'Kafka'],
      tags: ['数据存储', '向量化', '民航', '图像处理']
    }
  ]
  
  export const githubProjects: Array<ProjectItemType> = [
    {
      name: 'MCP Tools for Beidou Grid Engine',
      description: 'Intelligent agent配套MCP工具开发，为北斗网格引擎提供智能化接口',
      link: { href: 'https://github.com/yangzhihao/mcp-tools', label: 'View on GitHub' },
      gitStars: 0,
      gitForks: 0
    },
    {
      name: 'Java Backend Examples',
      description: 'Java后端开发示例项目，包含Spring Boot、微服务架构等最佳实践',
      link: { href: 'https://github.com/yangzhihao/java-backend-examples', label: 'View on GitHub' },
      gitStars: 0,
      gitForks: 0
    },
    {
      name: 'Drone Obstacle Detection',
      description: '基于深度学习的无人机空域障碍物识别系统原型',
      link: { href: 'https://github.com/yangzhihao/drone-obstacle-detection', label: 'View on GitHub' },
      gitStars: 0,
      gitForks: 0
    }
  ]
  