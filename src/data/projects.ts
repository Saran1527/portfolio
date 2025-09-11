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
    title: "E-Commerce Website",
    description: "Developed a fully functional, responsive e-commerce web application using React and Redux for state management. The project simulates a real-world online store experience using Fake Store API for product data. Built dynamic UI with Bootstrap for responsive design and modern layout.Integrated Fake Store API to fetch and display product listings, categories, and details. Implemented Redux for efficient global state management across cart, product, and user flows.Added core e-commerce features: product browsing, filtering, add to cart, and cart management.Focused on clean component architecture, reusable code, and smooth user experience",
    image: `${ecommerce}`,
    technologies: ["React", "Redux", "Bootstrap", "Fake API"],
    category: 'web',
    github: 'https://github.com/Saran1527/E-Commerce-Website',
    demo: "https://ecommerce2622.netlify.app/",
  },
 

  {
    id: 2,
    title: "Library Management System",
 description: "A full-stack application for managing library resources, including book catalog, user management, borrowing/return tracking, and admin controls. Designed with an intuitive interface and secure backend APIs.",    image: `${image}`,
    technologies: ['React.js','Node.js', 'Express', 'Socket.io', 'MongoDB'],
    category: 'Full Stack Development',
    github: 'https://github.com/Saran1527/Library-Management-System',
  },
  {
    id: 3,
    title: 'Chat Application Backend',
    description: 'A scalable backend for a real-time chat application with message persistence, user presence, and notifications.',
    image: 'https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React.js','Node.js', 'Express', 'Socket.io', 'MongoDB'],
    category: 'Full Stack Development',
    github: 'https://github.com/Saran1527/Real-Time-Chat-Application',
  },
];
