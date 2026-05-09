export const SAMPLE_DATA = {
  personalInfo: {
    name: 'Alex Johnson',
    email: 'alex@email.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/alexj',
    website: 'alexjohnson.dev',
  },
  summary: 'Senior software engineer with 8+ years of experience building scalable web applications. Passionate about clean code and user experience.',
  experience: [
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      startDate: 'Jan 2021',
      endDate: '',
      current: true,
      bullets: ['Led migration of legacy system to microservices', 'Mentored team of 4 junior developers'],
    },
    {
      id: '2',
      title: 'Software Engineer',
      company: 'StartupXYZ',
      startDate: 'Mar 2018',
      endDate: 'Dec 2020',
      current: false,
      bullets: ['Built real-time data pipeline processing 1M events/day', 'Reduced API response time by 40%'],
    },
  ],
  education: [
    { id: '1', degree: 'B.S. Computer Science', institution: 'University of California', startDate: '2014', endDate: '2018', gpa: '3.7' },
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL'],
  projects: [
    { id: '1', name: 'OpenSource CLI Tool', description: 'Developer productivity tool with 2k+ GitHub stars', link: 'github.com/alexj/tool' },
  ],
}
