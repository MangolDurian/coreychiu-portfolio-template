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
      name: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
      link: { href: 'https://yzh6688.top', label: 'Live Demo' },
      category: ['Website'],
      techStack: ['Next.js', 'TailwindCSS', 'TypeScript'],
      tags: ['Portfolio', 'Personal Website']
    },
    {
      name: 'Task Management App',
      description:
        'A comprehensive task management application with team collaboration features.',
      link: { href: '#', label: 'Coming Soon' },
      category: ['Web App'],
      techStack: ['React', 'Node.js', 'MongoDB'],
      tags: ['Productivity', 'Team Collaboration']
    },
    {
      name: 'Weather Dashboard',
      description:
        'Real-time weather dashboard with forecasts and interactive maps.',
      link: { href: '#', label: 'Demo' },
      category: ['Web App'],
      techStack: ['JavaScript', 'API Integration', 'Charts.js'],
      tags: ['Weather', 'Dashboard', 'Data Visualization']
    }
  ]
  
  export const githubProjects: Array<ProjectItemType> = [
    {
      name: 'Portfolio Template',
      description: 'A modern portfolio website template built with Next.js and Tailwind CSS',
      link: { href: 'github.com/yourgithub/your-portfolio', label: 'View on GitHub' },
      gitStars: 0,
      gitForks: 0
    },
    {
      name: 'React Components Library',
      description: 'Reusable React components with TypeScript support',
      link: { href: 'github.com/yourgithub/react-components', label: 'View on GitHub' },
      gitStars: 0,
      gitForks: 0
    }
  ]
  