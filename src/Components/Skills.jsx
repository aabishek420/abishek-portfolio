import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
} from 'react-icons/si';

const skillsData = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-8xl text-orange-500" />,
    description: "Markup language used to structure content on the web.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-8xl text-blue-500" />,
    description: "Style sheet language used for describing the look and layout of HTML.",
  },
  {
    name: "BOOTSTRAP",
    icon: <FaBootstrap className="text-8xl text-purple-600" />,
    description: "Popular CSS framework for building responsive websites quickly.",
  },
  {
    name: "TAILWIND CSS",
    icon: <SiTailwindcss className="text-8xl text-cyan-500" />,
    description: "Utility-first CSS framework for rapidly building custom designs.",
  },
  {
    name: "REACT JS",
    icon: <FaReact className="text-8xl text-sky-500 animate-spin-slow" />,
    description: "JavaScript library for building user interfaces using components.",
  },
  {
    name: "JAVA",
    icon: <FaJava className="text-8xl text-red-500" />,
    description: "General-purpose programming language known for portability and OOP.",
  },
  {
    name: "SPRING BOOT",
    icon: <SiSpringboot className="text-8xl text-green-500" />,
    description: "Java-based framework for building RESTful web services easily.",
  },
  {
    name: "MYSQL",
    icon: <SiMysql className="text-8xl text-blue-700" />,
    description: "Open-source relational database management system.",
  },
  {
    name: "GIT",
    icon: <FaGitAlt className="text-8xl text-red-600" />,
    description: "Version control system for tracking changes in source code.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0].name);
  const skill = skillsData.find((s) => s.name === selectedSkill);

  return (
    <motion.div
      className="bg-base-100 px-4 py-10"
      id="skills"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h1
        className="uppercase text-4xl md:text-5xl text-center my-8 font-bold"
        variants={fadeInUp}
      >
        Skills
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        variants={staggerContainer}
      >
        {skillsData.map((skill, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedSkill(skill.name)}
            className={`px-4 py-2 rounded-md font-semibold shadow-md transition-all ${
              selectedSkill === skill.name
                ? 'bg-primary text-white scale-105'
                : 'bg-base-300 hover:bg-base-200'
            }`}
            variants={fadeInUp}
          >
            {skill.name}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSkill}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center sm:items-stretch"
        >
          <div className="flex-1 min-w-[250px] max-w-[300px] h-auto py-6 rounded-lg hover:scale-105 transition-all shadow-lg bg-base-300 flex justify-center items-center">
            {skill.icon}
          </div>
          <div className="flex-1 min-w-[250px] max-w-[300px] h-auto py-6 px-4 text-lg font-medium rounded-lg hover:scale-105 transition-all shadow-lg bg-base-300 text-center flex justify-center items-center">
            <p>{skill.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Skills;
