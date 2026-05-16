export const SAMPLE_DATA = {
  personalInfo: {
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndoe',
    website: 'johndoe.dev',
  },
  summary: 'Full Stack Software Engineer with 5 years of experience building scalable web applications. Passionate about clean code, user experience, and delivering impactful products in agile environments.',
  experience: [
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'Acme Corp',
      startDate: '03/2022',
      endDate: '',
      current: true,
      bullets: [
        'Led a team of 5 engineers to redesign the customer dashboard, improving page load times by 40%.',
        'Architected a microservices backend handling 10K+ requests per minute with 99.9% uptime.',
        'Mentored junior developers through code reviews and pair programming sessions.',
      ],
    },
    {
      id: '2',
      title: 'Software Engineer',
      company: 'StartupXYZ',
      startDate: '06/2019',
      endDate: '02/2022',
      current: false,
      bullets: [
        'Built and maintained RESTful APIs serving data to 50K+ active users.',
        'Implemented CI/CD pipelines reducing deployment time from hours to minutes.',
        'Developed a real-time notification system using WebSockets.',
      ],
    },
  ],
  education: [
    { id: '1', degree: 'B.S. Computer Science', institution: 'University of California', startDate: '08/2015', endDate: '05/2019', gpa: '3.8 GPA' },
  ],
  skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'REST APIs', 'GraphQL', 'Tailwind CSS', 'Agile/Scrum'],
  projects: [
    { id: '1', name: 'TaskFlow', description: 'A project management app with real-time collaboration, built with React, Node.js, and Socket.io. Features drag-and-drop boards and team chat.', link: 'github.com/johndoe/taskflow' },
    { id: '2', name: 'WeatherNow', description: 'A weather dashboard that aggregates data from multiple APIs with interactive maps and 7-day forecasts. Built with React and D3.js.', link: 'github.com/johndoe/weathernow' },
  ],
}
