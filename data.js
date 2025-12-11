// data.js - Portfolio Data Configuration
// Edit file ini untuk mengubah konten portfolio Anda

const portfolioData = {
  // Informasi Personal
  personal: {
    name: "John Doe",
    role: "Full Stack Developer",
    headline: "I create beautiful, functional web applications with modern technologies. Passionate about clean code and great user experiences.",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    location: "San Francisco, CA",
    
    // URL foto profil (bisa menggunakan link dari GitHub, Imgur, atau platform lain)
    // Kosongkan untuk menggunakan avatar default
    photo: "",
    
    // URL file CV (bisa link Google Drive, Dropbox, atau file di GitHub)
    cvUrl: "https://drive.google.com/file/d/your-cv-file-id/view",
    
    // Social Media Links
    social: [
      {
        platform: "github",
        url: "https://github.com/yourusername"
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/yourusername"
      },
      {
        platform: "twitter",
        url: "https://twitter.com/yourusername"
      },
      {
        platform: "instagram",
        url: "https://instagram.com/yourusername"
      }
    ]
  },

  // About Me Section
  about: `I'm a passionate full-stack developer with 5+ years of experience building web applications. I love turning complex problems into simple, beautiful, and intuitive designs.

When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.

I believe in writing clean, maintainable code and creating user experiences that make a difference. Let's build something amazing together!`,

  // Skills Section
  // level: 0-100 (persentase kemampuan)
  skills: [
    {
      name: "JavaScript",
      level: 90
    },
    {
      name: "React",
      level: 85
    },
    {
      name: "Node.js",
      level: 80
    },
    {
      name: "Python",
      level: 75
    },
    {
      name: "CSS/Tailwind",
      level: 88
    },
    {
      name: "MongoDB",
      level: 82
    },
    {
      name: "TypeScript",
      level: 78
    },
    {
      name: "Git & GitHub",
      level: 85
    },
    {
      name: "REST API",
      level: 80
    }
  ],

  // Projects Section
  projects: [
    {
      title: "E-Commerce Platform",
      category: "Web App",
      year: "2024",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with React and Node.js, featuring real-time updates and secure payment processing. Supports multiple payment methods and includes advanced search and filtering capabilities.",
      
      // URL thumbnail project (bisa dari GitHub, Imgur, dll)
      thumbnail: "",
      
      // Array gambar tambahan untuk gallery di modal
      images: [],
      
      // Technologies used
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      
      // Live demo URL
      demoUrl: "https://your-project-demo.com",
      
      // GitHub repository URL
      githubUrl: "https://github.com/yourusername/ecommerce-project"
    },
    {
      title: "Task Management App",
      category: "Mobile App",
      year: "2023",
      description: "A productivity app with real-time collaboration and team management features. Includes task assignment, progress tracking, and team chat functionality. Built with React Native for cross-platform compatibility.",
      thumbnail: "",
      images: [],
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      demoUrl: "https://your-app-demo.com",
      githubUrl: "https://github.com/yourusername/task-app"
    },
    {
      title: "Design System Builder",
      category: "Design Tool",
      year: "2023",
      description: "A tool to create and manage design systems with live component preview. Helps teams maintain consistent UI/UX across projects. Features include component library, style guide, and code export functionality.",
      thumbnail: "",
      images: [],
      technologies: ["Vue.js", "Tailwind CSS", "TypeScript", "Vite"],
      demoUrl: "https://your-design-tool.com",
      githubUrl: "https://github.com/yourusername/design-system"
    },
    {
      title: "Weather Forecast App",
      category: "Web App",
      year: "2023",
      description: "A modern weather application with real-time data and 7-day forecasts. Features include location detection, weather alerts, and beautiful animated weather icons.",
      thumbnail: "",
      images: [],
      technologies: ["React", "Weather API", "Chart.js", "CSS3"],
      demoUrl: "https://your-weather-app.com",
      githubUrl: "https://github.com/yourusername/weather-app"
    },
    {
      title: "Blog CMS Platform",
      category: "Web App",
      year: "2022",
      description: "A content management system for bloggers with markdown support, SEO optimization, and analytics dashboard. Includes user authentication and role-based access control.",
      thumbnail: "",
      images: [],
      technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
      demoUrl: "https://your-cms-demo.com",
      githubUrl: "https://github.com/yourusername/blog-cms"
    },
    {
      title: "Fitness Tracker",
      category: "Mobile App",
      year: "2022",
      description: "A comprehensive fitness tracking application with workout logging, progress charts, and personalized recommendations. Syncs across devices and integrates with popular fitness APIs.",
      thumbnail: "",
      images: [],
      technologies: ["React Native", "Node.js", "MongoDB", "Health APIs"],
      demoUrl: "https://your-fitness-app.com",
      githubUrl: "https://github.com/yourusername/fitness-tracker"
    }
  ]
};
