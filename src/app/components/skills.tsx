"use client"

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'
import { SiCplusplus, SiSharp, SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiGraphql } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'
import { DiMysql } from 'react-icons/di'

const Skills = () => {
  const skills: { name: string; icon: IconType; color: string }[] = [
    { name: "C", icon: TbBrandCpp, color: "text-blue-500" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
    { name: "C#", icon: SiSharp, color: "text-green-600" },
    { name: "Python", icon: FaPython, color: "text-yellow-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "SQL", icon: DiMysql, color: "text-blue-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
  ]

  return (
    <section className="section min-h-screen flex flex-col items-center justify-center py-20 bg-gray-900 bg-opacity-60">
      <h2 className="text-4xl font-bold mb-16 text-white">Skills</h2>
      <div className="max-w-5xl w-full">
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-24 h-24 bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center transform rotate-45 group-hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="transform -rotate-45">
                  <skill.icon className={`text-4xl ${skill.color}`} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="text-white font-medium bg-black bg-opacity-75 px-2 py-1 rounded">
                  {skill.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

