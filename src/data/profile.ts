// src/data/profile.ts

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  techStack: string[];
  link?: string;
  highlightTags: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
};

export type AwardItem = {
  title: string;
  org: string;
  year: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const profile = {
  name: "Shreevaths Rao",
  title: "Software Engineer | Full-Stack Developer ",
  location: "United States",
  email: "shreevathsus@gmail.com",
  phone: "+1 (312)-292-8756",
  linkedin: "https://www.linkedin.com/in/shreevaths-rao-7aa42417b/",
  github: "https://github.com/shree-vaths",
  resumeUrl: "https://drive.google.com/file/d/1PXgBC8Qb_X6vqA3Tu9OF0Cc4EMjUOgg5/view?usp=sharing",

  summary:
    "Full-stack engineer with experience in high level designing and implementing digital consumer experiences based on a foundation of computer science in B2B and B2C domain",

  experience: [
    {
      company: "Publicis Sapient",
      role: "Associate Software Developer 2",
      location: "Bangalore, India",
      period: "May 2021 – Jul 2024",
      tags: ["React", "Node.js", "AWS", "OAuth", "Payment Integration"],
      bullets: [
        "Configured realm-wise keys in AWS Secrets Manager, enhancing security posture by isolating credentials per environment, reducing unauthorized access risk by implementing environment-specific encryption and ensuring compliance with enterprise security standards.",
        "Engineered a comprehensive customer registration system enabling store customers to access order history and track shipments through a self-service portal, improving customer satisfaction and reducing support tickets by 35%.",
        "Led cross-functional collaboration with order management, inventory, customer care, and middleware teams to resolve critical integration issues, architecting API contracts and data flows that boosted system interoperability and reduced integration defects by 40%.",
        "Developed automated ETL jobs using Node.js to import promotion and coupon data from third-party systems into the e-commerce platform, reducing checkout processing time by 25% and enhancing overall user experience through real-time discount validation.",
        "Integrated GMO payment gateway with secure tokenization into customer profiles, implementing PCI-compliant payment information storage and decreasing transaction completion time by 40% for Japan-based customers while maintaining enterprise security standards.",
      ],
    },
    {
      company: "Publicis Sapient",
      role: "Associate Software Developer 1",
      location: "Bangalore, India",
      period: "Jul 2020 – Apr 2021",
      tags: ["React", "OAuth", "API Integration", "Geolocation", "Salesforce"],
      bullets: [
        "Implemented Google reCAPTCHA v2 and v3 across registration flows, reducing bot DDOS attacks by 98%, decreasing fraudulent sign-ups by 90%, and cutting manual review efforts by 50% through intelligent threat detection and risk scoring.",
        "Developed OAuth-based social login integration with Facebook, securely importing user profile data through Graph API to streamline onboarding, improve personalization, and reduce registration abandonment rates by 30%.",
        "Architected Kakao social authentication for Korean market expansion, integrating OAuth 2.0 protocol and profile APIs, resulting in a 15% increase in new user signups, 12% boost in daily active users, and enhanced platform accessibility.",
        "Built an interactive store locator feature using Google Maps Geolocation API with latitude/longitude and zip code search capabilities, achieving 95% location accuracy and driving a 30% increase in in-store visits through improved customer discovery.",
        "Integrated Salesforce CRM platform for comprehensive user data retention and 360-degree customer view, improving customer retention rates by 25% and enabling targeted marketing campaigns through centralized profile management and behavioral analytics.",
      ],
    },
    {
      company: "Publicis Sapient",
      role: "Software Engineering Intern",
      location: "Bangalore, India",
      period: "Jan 2020 – Jul 2020",
      tags: ["React", "Node.js", "Express.js", "Testing", "ETL"],
      bullets: [
        "Executed and maintained 500+ unit test cases using Chai and Mocha testing frameworks, achieving 98% code coverage across critical business logic and identifying 30+ critical bugs before production deployment, ensuring robust application quality.",
        "Engineered an automated Express.js ETL pipeline to parse Udemy CSV exports and track 15+ intern learning progress metrics, building interactive Chart.js dashboards in React to visualize completion rates and engagement statistics, reducing manual reporting time by 80%.",
        "Created comprehensive technical documentation in Atlassian Confluence covering architecture decisions, API specifications, and component designs, improving team knowledge retention by 40% and reducing onboarding time for new developers by 25%.",
        "Contributed to React-based web application development by integrating RESTful APIs to fetch user profiles and learning statistics from Udemy, implementing 10+ reusable UI components with React Hooks, and optimizing bundle size and lazy loading to improve page load performance by 30%.",
      ],
    },
  ] as ExperienceItem[],

  projects: [
    {
      name: "Educational Institute Management System",
      description:
        "Developed a full-stack educational management platform enabling course enrollment, and administrative operations with intuitive UI/UX for enhanced institutional efficiency.",
      techStack: ["Spring Boot", "Spring MVC", "JPA/Hibernate", "PostgreSQL", "Docker", "Maven", "Spring Core", "Thymeleaf"],
      link: "https://eazyschoolproject.onrender.com/",
      highlightTags: ["Backend", "FrontEnd"],
    },
    {
      name: "Recipe Sharing Platform",
      description:
        "Engineered a full-stack recipe sharing platform with Next.js and React, enabling food enthusiasts to browse meals and connect through a community-driven interface with optimized performance and SEO.",
      techStack: ["React", "Nexjs", "Router", "Docker", "Render"],
      link: "https://foodreceipeproject.onrender.com/",
      highlightTags: ["FrontEnd"]
    }
  ] as ProjectItem[],

  education: [
    {
      school: "Illinois Institute of Technology",
      degree: "Masters in Computer Science",
      location: "Chicago, IL, USA",
      period: "Graduated May 2026",
      gpa: "4.0 / 4.0",
    },
    {
      school: "RV College of Engineering",
      degree: "Bachelor of Engg Computer Engineering",
      location: "India",
      period: "Graduated May 2020",
      gpa: "3.3 / 4.0",
    },
  ] as EducationItem[],

  skills: [
    {
      name: "Programming Languages",
      skills: [
        "JavaScript (Node.js, Express.js, React.js)",
        "Java (Spring Boot, Spring MVC, Spring Core)",
        "C++",
        "C",
        "HTML5"
      ],
    },
    {
      name: "Frontend Technologies",
      skills: [
        "React.js",
        "Next.js",
        "Bootstrap",
        "Redux",
        "React Hooks"
      ],
    },
    {
      name: "Backend and APIs",
      skills: [
        "Spring Framework",
        "Microservices",
        "Spring Security",
        "Hibernate",
        "JPA",
        "RESTful APIs",
        "Node.js",
        "Express.js"
      ],
    },
    {
      name: "Database & Storage",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "DynamoDB",
        "H2 Database",
        "SQL",
        "NoSQL",
        "Database Design"
      ],
    },
    {
      name: "Cloud & DevOps",
      skills: [
        "AWS (Lambda, DynamoDB, EC2, S3, RDS, Route 53, Secrets Manager, SAM)",
        "Docker",
        "Git",
        "GitHub",
        "JIRA",
        "Confluence",
        "NPM",
        "Maven",
        "Postman",
        "Salesforce"
      ],
    },
    {
      name: "Testing and Quality",
      skills: [
        "JUnit",
        "Mocha",
        "Chai",
        "Unit Testing",
        "Integration Testing",
        "Test-Driven Development",
        "Code Coverage"
      ],
    },
    {
      name: "Areas of Expertise",
      skills: [
        "Full-Stack Development",
        "Backend Engineering",
        "API Development",
        "Data Migration",
        "System Integration",
        "E-commerce Solutions",
        "Payment Gateway Integration",
        "Microservices",
        "Cloud-Native Applications",
        "ETL Jobs"
      ],
    },
    {
      name: "Soft Skills",
      skills: [
        "Problem-Solving",
        "Time Management",
        "Critical Thinking",
        "Research",
        "Interpersonal Skills",
        "Writing & Verbal Communication",
        "Cross-Team Collaboration",
        "Agile Methodology",
        "Technical Documentation",
        "Code Review"
      ],
    },
  ] as SkillCategory[],
};
