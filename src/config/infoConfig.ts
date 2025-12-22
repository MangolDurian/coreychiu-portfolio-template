export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Your Name'
export const headline = 'Full-Stack Developer & Software Engineer'
export const introduction = 'Passionate software engineer focused on building innovative web applications and solving complex problems.'
export const email = 'your.email@gmail.com'
export const githubUsername = 'yourgithub'

// about page
export const aboutMeHeadline = "I'm a passionate software engineer and developer."
export const aboutParagraphs = [
  "I love coding and creating innovative solutions. I started my programming journey during college and have been passionate about it ever since.",
  "My interests include web development, mobile apps, and exploring new technologies. I enjoy working on both personal and open-source projects.",
  "Currently focused on building modern web applications using cutting-edge technologies and best practices."
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
    href: 'https://github.com/yourgithub',
    external: true
  },
  {
    name: 'Email',
    icon: 'envelope',
    href: 'mailto:your.email@gmail.com',
    external: true
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "react",
  "nodedotjs",
  "nextdotjs",
  "tailwindcss",
  "html5",
  "css3",
  "git",
  "github",
  "visualstudiocode",
  "docker",
  "postgresql",
  "mongodb",
  "vercel"
];



