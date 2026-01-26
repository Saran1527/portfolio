import React, { useEffect, useRef } from 'react';
import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Developer working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <p className="text-white text-center">
                  <span className="block text-2xl font-bold">1+</span>
                  <span className="text-sm">Year Exp.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Full Stack  Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a dedicated Full Stack Developer with hands-on experience in building scalable web and mobile applications. My journey began with web development, and over time I've expanded into both MERN stack and Python full-stack projects, combining robust backends with sleek, user-friendly interfaces.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I've worked on diverse projects including a Human Resource Management System (HRMS), Student Management System, Learning Management System (LMS), Food Delivery Website, Customer Relationship Management (CRM) System, and an Asset Management Platform. Each project sharpened my skills in designing efficient architectures, building RESTful APIs, and creating seamless user experiences.

            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I love solving complex problems and delivering high-quality, user-friendly
              applications. My approach combines technical excellence with a keen eye for design
              and user experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Chennai</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">1+ Year In Acsass</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">B.E. Electronics and Communication Engineering - 2024</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">B.E(ECE)- 85%</span>
              </div>
              {/* <div className="flex items-center">
                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">AWS Certified Developer</span>
              </div> */}
            </div>

            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 inline-block"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;
