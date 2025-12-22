
// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const careerList: Array<CareerItemType> = [
    {
      company: 'Tech Company Inc.',
      title: 'Full-Stack Developer',
      logo: 'code',
      start: '2022',
      end: 'Present'
    },
    {
      company: 'Digital Solutions Ltd.',
      title: 'Junior Developer',
      logo: 'laptopcode',
      start: '2020',
      end: '2022'
    }
  ]