import livewire from "../image/livewire.png";
import ecommerce from "../image/Screenshot 2025-05-31 131846.png";
import image from "../image/image.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'mobile' | 'web' | 'backend';
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Website Chatbot",
    description:
      "Built an AI-powered chatbot that analyzes website content and answers user queries using Google Gemini API. Implemented semantic search with embeddings and FastAPI backend.",
    image: "https://www.icertis.com/globalassets/1.-sections/contracting-basics/conversational-ai/conversational-ai-learn-article-header-inset.jpeg?width=985",
    technologies: ["Python", "FastAPI", "Gemini API", "MySQL"],
    category: "Artificial Intelligence",
  },

  {
    id: 2,
    title: "Customer Relationship Management (CRM) System",
    description:
      "Developed a full-stack CRM platform to manage customer interactions, sales tracking, and support tickets. Implemented REST APIs and business dashboards for managing customer data.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3MhAswliZF_b-W0uXLbQWwYNXRHT_8sZGQ&s",
    technologies: ["Python", "Django", "React.js", "MySQL"],
    category: "Python Full Stack Development",
  },

  {
    id: 3,
    title: "Student & College Management System",
    description:
      "Created a role-based management system for students, faculty, and administrators including modules for enrollment, attendance tracking, and result processing.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwjXREkKJ5U7m4S2oR4A1pvZ4JdKl2no88g&s",
    technologies: ["Python", "Django", "MySQL","React.js"],
    category: "Python Full Stack Development",
  },

  {
    id: 4,
    title: "E-Commerce Web Application",
    description:
      "Developed a responsive e-commerce platform using React and Redux with product browsing, filtering, and cart management integrated with REST APIs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJq_fPEfwAmE5twBcYiH-7Qq7ft3a560-Mw&s",
    technologies: ["React.js", "Redux Toolkit", "Bootstrap", "REST API"],
    category: "frontend",
    github: "https://github.com/Saran1527/E-Commerce-Website",
    demo: "https://ecommerce2622.netlify.app/",
  },

  {
    id: 5,
    title: "Library Management System",
    description:
      "A MERN stack application designed to automate library operations including book management, borrowing, and member tracking.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7sPuX8Ktf2Y6Uh7vz-BC2FDle8rzPgeaKA&s",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    category: "Mern Stack Development",
    github: "https://github.com/Saran1527/Library-Management-System",
  },

  {
    id: 6,
    title: "Real-Time Chat Application",
    description:
      "Built a real-time messaging application using Node.js and Socket.io supporting instant communication, online status tracking, and persistent chat history.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEcQCJEApVKkW6TH1-Dm2l2QFr5_RrIv07g&s",
    technologies: ["Node.js", "Express.js", "Socket.io", "MongoDB", "React.js"],
    category: "Mern Stack Development",
    github: "https://github.com/Saran1527/Real-Time-Chat-Application",
  }

];
