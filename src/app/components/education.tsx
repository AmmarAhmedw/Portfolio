'use client'

import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      school: "Lahore Garrison University",
      degree: "Bachelor of Science, Computational Science",
      duration: "Feb 2021 - Feb 2025",
      location: "Lahore, Punjab, Pakistan",
      description: "Successfully completed courses in mathematics, Computing, and Statistics. Trained an AI model."
    },
    {
      school: "Defence Degree College",
      degree: "Intermediate, Computational Science",
      duration: "Feb 2019 - Jun 2020",
      location: "Lahore, Punjab, Pakistan",
      description: "Designed a project management & learning environment for a class of 40 students. Learned programming fundamentals using languages such as Python and C++."
    },
    {
      school: "Fauji Foundation",
      degree: "High School Diploma, Computational Science",
      duration: "2017 - 2018",
      location: "Lahore, Punjab, Pakistan",
      description: "Developed problem-solving skills through computational problems and logical exercises."
    }
  ];

  return (
    <section className="section min-h-screen flex flex-col items-center justify-center py-20  bg-gray-900 bg-opacity-60 ">
      <h2 className="text-4xl font-bold mb-10 text-white">Education</h2>
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-400 before:to-transparent">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-400 bg-gray-800 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="text-2xl font-semibold text-blue-400">{edu.school}</h3>
              </div>
              <p className="text-xl text-white">{edu.degree}</p>
              <div className="text-gray-400 space-y-1 mt-2">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{edu.location}</span>
                </div>
              </div>
              <div className="mt-3 text-gray-300 flex items-start">
                <BookOpen className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <p>{edu.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

