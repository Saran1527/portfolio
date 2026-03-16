import React, { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: "Core Technologies" | "Additional Skills" | "Other Relevant Skills";
}

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Frontend Development
    { name: "React.js", level: 95, category: "Front-End Development" },
    { name: "Redux / Redux Toolkit", level: 85, category: "Front-End Development" },
    { name: "Material-UI (MUI)", level: 90, category: "Front-End Development" },
    { name: "Tailwind CSS", level: 88, category: "Front-End Development" },
    { name: "HTML5", level: 92, category: "Front-End Development" },
    { name: "CSS3", level: 90, category: "Front-End Development" },
    { name: "Responsive Web Design", level: 90, category: "Front-End Development" },
    { name: "JavaScript (ES6+)", level: 92, category: "Front-End Development" },
    { name: "TypeScript", level: 82, category: "Front-End Development" },

    // Backend Development
    { name: "Python", level: 90, category: "Back-End Development" },
    { name: "Django", level: 90, category: "Back-End Development" },
    { name: "Node.js", level: 85, category: "Back-End Development" },
    { name: "Express.js", level: 85, category: "Back-End Development" },
    { name: "FastAPI", level: 78, category: "Back-End Development" },
    { name: "RESTful API Development", level: 90, category: "Back-End Development" },
    { name: "Authentication (JWT, OAuth)", level: 85, category: "Back-End Development" },

    // Database Management
    { name: "MongoDB", level: 90, category: "Database" },
    { name: "MySQL", level: 88, category: "Database" },
    { name: "PostgreSQL", level: 88, category: "Database" },
    { name: "SQLite", level: 85, category: "Database" },
    { name: "Database Design & Query Optimization", level: 82, category: "Database" },

    // DevOps & Deployment
    { name: "Docker", level: 72, category: "DevOps & Deployment" },
    { name: "CI/CD Pipelines", level: 75, category: "DevOps & Deployment" },
    { name: "Git", level: 90, category: "DevOps & Deployment" },
    { name: "GitHub", level: 90, category: "DevOps & Deployment" },

    // Tools & Development Practices
    { name: "Postman (API Testing)", level: 95, category: "Tools & Practices" },
    { name: "Swagger / OpenAPI", level: 80, category: "Tools & Practices" },
    { name: "Performance Optimization", level: 82, category: "Tools & Practices" },
    { name: "Agile & Scrum Methodologies", level: 80, category: "Tools & Practices" },
    { name: "Debugging & Problem Solving", level: 90, category: "Tools & Practices" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");

            const progressBars = entry.target.querySelectorAll(".progress-bar");
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.width
                  }%`;
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animateElements?.forEach((el) => observer.observe(el));

    return () => {
      animateElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const categories = [
    { id: "Front-End Development", name: "Front-End Development" },
    { id: "Back-End Development", name: "Back-End Development" },
    { id: "Database", name: "Database" },
    { id: "DevOps & Deployment", name: "DevOps & Deployment" },
    { id: "Tools & Practices", name: "Tools & Practices" },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I specialize in Full Stack Development with expertise in the MERN stack (MongoDB, Express, React, Node.js) and Python frameworks (Django/Flask), building scalable applications from frontend to backend.

          </p>
        </div>

        <div className="animate-on-scroll opacity-0">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="progress-bar bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "0%" }}
                          data-width={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
