// SYNTAX AND CAPITALIZATION MATTERS!!!

// Header section - Defines basic website information
const header = {
  homepage: 'https://ddanish25.github.io/', // URL for the homepage - !!! IMPORTANT: UPDATE THIS TO YOUR OFFICIAL WEBSITE LINK BEFORE DEPLOYING!!!!
  title: 'WEB PORTFOLIO', // Title shown in left of the navigation bar
}

// About section
const about = {
  name: 'Danish',
  role: 'Full stack devolper',
  description:
    'I am an aspiring computer engineer fueled by a fervent passion for innovation. With a background rich in coding, CADing, and circuits, I thrive on pushing the boundaries of technology to create impactful solutions. Throughout my experiences, I have honed my skills in diverse areas, from software development to hardware design. Whether it is crafting efficient code for complex applications or architecting robust circuit layouts, I approach each challenge with enthusiasm and a drive for excellence. Beyond technical prowess, I believe in the power of collaboration and continuous learning. I am committed to staying abreast of emerging technologies and industry trends, eager to contribute to groundbreaking projects and collaborate with like-minded innovators',
  resume: 'https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs',
  social: {
    linkedin: 'https://www.linkedin.com/in/danish-ejaz-535513302/', // LinkedIn profile link
    github: 'https://github.com', // GitHub profile link
  },
}

// Projects section - keep same format per project [sourceCode: github, livePreivew: any link] [Uploading Images: /public/img - using it here follow format ( "./img/<img file>" ) ]
/*const projects = [
  {
    name: 'Code your Love',
    description:
      'Hearts & HTML: A hands-on coding workshop where you\'ll create a beautiful interactive Valentine\'s card using HTML & CSS! No prior experience needed—just bring your creativity and get ready to code some love! 💖💻 Feb 12th | 7:00 - 8:00 PM | HH 2.402',
    stack: ['HTML', 'CSS', 'JS'],
    sourceCode: 'https://github.com/gdscutd/valentinesCard',
    livePreview: 'https://gdg.community.dev/events/details/google-gdg-on-campus-the-university-of-texas-at-dallas-richardson-united-states-presents-hearts-amp-html-code-a-valentines-card-that-pops',
    image: './img/val.png',
  },
  {
    name: 'Firebase Authentication',
    description:
      'Join us for a hands-on workshop where you’ll build a sleek login page using React, Tailwind, and Firebase Authentication! Learn how to sign up and log in with email & password, as well as authenticate with Google—all in a modern, responsive UI. Perfect for beginners and those looking to integrate Firebase Auth into their projects. 🚀 Feb. 18th | 7:00 to 8:00 PM | ECSS 2.415',
    stack: ['Firebase', 'React'],
    sourceCode: 'https://github.com/gdscutd/react-firebase-auth',
    image: './img/firebase.png',
  },
  {
    name: 'Portfolio',
    description:
      'Join us for a Personal Portfolio Workshop using React.js and Tailwind CSS. This beginner-friendly session provides a code template to help you get started, offering hands-on learning to build your personal portfolio step by step. Learn modern web development tools to create a sleek, responsive website that enhances your resume. The workshop includes a Q&A session and live debugging support from peers and mentors. February 24th | 7:00 PM to 8:30 PM | ECSS 2.415.',
    stack: ['React', 'Vite', 'Tailwind'],
    livePreview: 'https://gdg.community.dev/events/details/google-gdg-on-campus-the-university-of-texas-at-dallas-richardson-united-states-presents-design-your-own-personal-website/',
    image: './img/portfolio.png',
  },
]*/

// Skills section
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'c++',
  'ardiuno',
  'java',
  //'TypeScript',
  //'React',
  //'Redux',
  //'SASS',
  //'Material UI',
  //'Git',
  //'CI/CD',
  //'Jest',
  //'Enzyme', //u can add more langages after
]

// Experience section - Work and Volunteering
const experience = [
  {
    title: 'Embedded System Developer', // position
    company: 'formula SAE', // company
    location: 'Richardson, TX',
    date: '2024 - Present',
    description:
      'Developed scalable web applications, optimized frontend performance, and collaborated on cross-functional teams.',
  },
  {
    title: 'Software Programmer',
    company: 'Google Developer Student Clubs (GDSC)',
    location: 'University of Texas at Dallas',
    date: '2025 - Present',
    description:
      'Engaged in hands-on learning by attending workshops on web development, artificial intelligence, and other emerging technologies. Built mini projects, including web applications and AI models, to strengthen technical skills and real-world problem-solving.',
  },
]

// Education section
const education = [
  {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'University of Texas at Dallas',
    location: 'Richardson, TX',
    date: 'Augest 2024 - present',
    description: 'Coursework in software engineering, data structures, and full-stack development.',
  },
]

// Contact section - (optional)
const contact = {
  email: 'ddanish2506@gmail.com',
}


// Important: If you add extra sections, make sure to export them here
// Export all sections so they can be used in other files
export { header, about, projects, skills, experience, education, contact }
