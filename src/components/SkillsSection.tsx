import React, { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: "Core Technologies" | "Additional Skills" | "Other Relevant Skills";
}

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

 const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: 95, category: "Front-End Skills" },
  { name: "Bootstrap", level: 90, category: "Front-End Skills" },
  { name: "Material-UI", level: 91, category: "Front-End Skills" },
  { name: "HTML/CSS", level: 90, category: "Front-End Skills" },
  { name: "Tailwind CSS", level: 88, category: "Front-End Skills" },

  // Core Technologies
  { name: "JavaScript", level: 90, category: "Core Technologies" },
  { name: "TypeScript", level: 80, category: "Core Technologies" },
  { name: "Redux", level: 90, category: "Core Technologies" },
  { name: "RESTful APIs", level: 85, category: "Core Technologies" },

  // Backend
  { name: "Node.js", level: 90, category: "Back-End Skills" },
  { name: "Express.js", level: 90, category: "Back-End Skills" },
  { name: "MongoDB", level: 90, category: "Back-End Skills" },
  { name: "MySQL", level: 88, category: "Back-End Skills" },
  { name: "SQLLite", level: 88, category: "Back-End Skills" },
  { name: "Python", level: 85, category: "Back-End Skills" },
  { name: "Django", level: 80, category: "Back-End Skills" },
  { name: "Flask", level: 75, category: "Back-End Skills" },

  // DevOps / Tools
  { name: "Git & GitHub", level: 85, category: "Other Relevant Skills" },
  { name: "Firebase", level: 75, category: "Other Relevant Skills" },
  { name: "Docker", level: 70, category: "Other Relevant Skills" },
  { name: "CI/CD Pipelines", level: 70, category: "Other Relevant Skills" },

  // Additional
  { name: "Push Notifications", level: 70, category: "Other Relevant Skills" },
  { name: "Performance Optimization", level: 80, category: "Other Relevant Skills" },
  { name: "Authentication & Security (JWT, OAuth)", level: 85, category: "Other Relevant Skills" },
  { name: "Agile & Scrum Practices", level: 75, category: "Other Relevant Skills" },
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
                (bar as HTMLElement).style.width = `${
                  (bar as HTMLElement).dataset.width
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
    { id: "Core Technologies", name: "Core Technologies" },
    { id: "Front-End Skills", name: "Front-End Skills" },
    { id: "Back-End Skills", name: "Back-End Skills" },
    { id: "Other Relevant Skills", name: "Other Relevant Skills" },
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
