'use client'

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Punch Group",
      duration: "August 2024 - Present",
      location: "Lahore, Punjab, Pakistan",
      description: "Worked on various projects, including front-end development, backend development, and infrastructure setup."
    },
    {
        title: "Project Manager",
        company: "Punch Group",
        duration: "July 2024 - Present",
        location: "Lahore, Punjab, Pakistan",
        description: "Ensuring high-quality software delivery through rigorous testing and quality assurance processes."
      },
    {
      title: "Software Engineer Intern",
      company: "Punch Group",
      duration: "May 2024 - July 2024",
      location: "Lahore, Punjab, Pakistan",
      description: "Working on cutting-edge software projects and gaining hands-on experience in full-stack development."
    },

  ];

  return (
    <section className="section min-h-screen flex flex-col items-center justify-center py-20  bg-gray-900 bg-opacity-60">
      <h2 className="text-4xl font-bold mb-10 text-white">Work Experience</h2>
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-400 before:to-transparent">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-400 bg-gray-800 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="text-2xl font-semibold text-blue-400">{exp.title}</h3>
              </div>
              <p className="text-xl text-white">{exp.company}</p>
              <div className="text-gray-400 space-y-1 mt-2">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{exp.location}</span>
                </div>
              </div>
              <p className="mt-3 text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;

