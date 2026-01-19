
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: '东莞理工学院',
      major: '计算机科学与技术',
      logo: 'college',
      start: 'Graduated in',
      end: '2023.06'
    },
  ]