export const SAMPLE_DATA = {
  personalInfo: {
    name: 'Neeraj Kumar Gupta',
    email: 'neerajgupta6525@gmail.com',
    phone: '9915449346',
    location: 'Chitrapury colony, Hyderabad, India',
    linkedin: 'linkedin.com/in/nxgupta',
    website: 'github.com/nxgupta',
  },
  summary: 'Full Stack Software Engineer with 4 years of experience in developing and optimizing web applications using the MERN stack. Skilled in creating scalable solutions and enhancing user experience within agile environments.',
  experience: [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Mirabel Technologies',
      startDate: '05/2023',
      endDate: '',
      current: true,
      bullets: [
        'Collaborated with a 17-member team to deliver CRM features, boosting customer engagement by 20% through code splitting and lazy loading of modules/images.',
        'Led development of a Form Builder module with AWS S3 integration for file upload and storage.',
        'Implemented GPT-powered action prompts, increasing content creation by 60% and response rates by 15%.',
        'Optimized backend API and introduced infinite scrolling, reducing MongoDB load by 40% and enhancing UX.',
        'Developed a Trial Site Application, streamlining client onboarding and reducing manual sales effort by 50%.',
        'Created interactive data visualizations with react-highcharts for actionable survey and campaign insights.',
      ],
    },
    {
      id: '2',
      title: 'Assistant Systems Engineer',
      company: 'Tata Consultancy Services',
      startDate: '04/2021',
      endDate: '04/2023',
      current: false,
      bullets: [
        'Designed and developed scalable solutions, boosting application performance by 15%.',
        'Delivered new features using the MERN stack, enhancing user satisfaction and app reliability.',
        'Resolved 50+ user-reported issues, minimizing downtime and increasing user trust.',
        'Applied Agile methodologies and used Azure dashboards for efficient tracking and timely delivery.',
        'Conducted pair programming and peer code reviews to maintain high-quality standards.',
      ],
    },
    {
      id: '3',
      title: 'Associate Product Support',
      company: 'Unicommerce Esolutions Limited',
      startDate: '09/2020',
      endDate: '12/2020',
      current: false,
      bullets: [
        'Provided technical support, achieving a high issue resolution rate and ensuring customer satisfaction by 20%.',
      ],
    },
  ],
  education: [
    { id: '1', degree: 'B.Tech - Electronics and Communication', institution: 'Lovely Professional University', startDate: '08/2016', endDate: '09/2020', gpa: '9.14 CGPA' },
  ],
  skills: ['HTML5', 'CSS3', 'Javascript', 'React.js', 'React-Hooks', 'React-Router', 'Context Api', 'Redux-Toolkit', 'Node.js', 'Express.js', 'REST Api', 'MongoDB', 'MongoDBCompass', 'BitBucket', 'JIRA', 'VS Code', 'GitHub', 'DevTools', 'AWS(S3)', 'JWT', 'Recaptcha', 'Bootstrap', 'Tailwind CSS', 'Postman', 'Data structures', 'Problem Solving'],
  projects: [
    { id: '1', name: 'Jobify', description: 'Job tracking app - Built frontend using React.js from scratch using Figma UI. Used Area & Bar Chart from recharts to display jobs applied per month. Built a robust server with Express and MongoDB. Used JWT for Authentication.', link: '' },
    { id: '2', name: 'Q-Kart', description: 'React.js E-commerce application offering a variety of products. Implemented core logic for authentication, shopping cart, and checkout. Utilized REST APIs to dynamically load and render data served by the backend server.', link: '' },
  ],
}
