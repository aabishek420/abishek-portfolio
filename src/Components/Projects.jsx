import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cineImg from "../assets/Cinifinder.png";

const projects = [
  {
    title: " CineFinder-MovieWorld",
    desc: "CineFinder is a modern movie web application built with React + TypeScript that allows users to browse trending movies, search and filter by genre, year, or rating, view detailed movie information, and mark favorites. The app uses TMDb API for movie data and is styled using Material UI (MUI) and Tailwind CSS.",
    image: cineImg,
    category: "frontend",
    link: "https://github.com/aabishek420/CineFinder",
    demo: "https://cinefinder-movieworld.netlify.app/", // Demo link
  },

];

const categories = ["all", "frontend", "backend", "fullstack"];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.3 } },
};

export default function Projects() {
  const [selected, setSelected] = useState("all");

  const filteredProjects =
    selected === "all"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <motion.section
      className="bg-base-200 py-10 px-6 mt-10 min-h-screen"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <motion.h1
        className="text-5xl font-bold text-center mt-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      {/* Filter Buttons */}
      <motion.div
        className="flex gap-5 justify-center items-center mt-8 flex-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {categories.map((btn) => (
          <motion.button
            key={btn}
            onClick={() => setSelected(btn)}
            className={`btn rounded-full uppercase ${
              selected === btn ? "btn-primary" : "btn-outline"
            }`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            {btn}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Cards */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-8 mt-10 min-h-[280px]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              layout
              className="relative bg-base-100 p-1.5 rounded-xl shadow-lg overflow-hidden group w-[320px]"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover"
              />

              {/* Overlay with Buttons */}
              <div className="absolute inset-0 backdrop-blur-xs flex justify-center items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {/* View Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition-colors duration-200"
                >
                  View
                </a>

                {/* Demo Button */}
                <a
                  href={project.demo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-primary-focus transition-colors duration-200"
                >
                  Demo
                </a>
              </div>

              {/* Text */}
              <div className="p-5 text-center">
                <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
                <p className="text-sm text-base-content text-justify">{project.desc}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
