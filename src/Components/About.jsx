import React from "react";
import profilepic from "../assets/abi.jpg"; // You can set this to null to test
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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

const aboutData = {
  description: [
    "My name is Abishek A. I have completed my Bachelor’s degree in Computer Science from Dhanalakshmi Srinivasan Engineering College. I have a strong interest in backend development, especially using Java and Spring Boot.",
    "I’ve worked on several academic and mini-projects, including a notes management application using Java, Spring Boot, MySQL, and Firebase for authentication. Through these, I’ve gained hands-on experience in RESTful APIs, entity relationships, JWT-based security, and DTOs for clean data handling.",
    "I’m also comfortable with front-end basics using HTML, CSS, JavaScript, and React, and I’ve worked on simple UI integrations like login-register pages. I’m looking for a challenging Java backend developer role where I can grow, learn from experienced people, and contribute meaningfully.",
  ],
  education: [
    {
      degree: "B.E Computer Science & Engineering",
      college: "Dhanalakshmi Srinivasan Engineering College, Tamil Nadu",
      year: "2020 - 2024",
      percentage: "83%",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      college: "Government Model Higher Secondary School, Ariyalur, Tamil Nadu",
      year: "Jun 2019 – Apr 2020",
      percentage: "59%",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      college: "Gowdhama Buddhar School, Ariyalur, Tamil Nadu",
      year: "Jun 2017 – Apr 2018",
      percentage: "79%",
    },
    {
      degree: "IOT Internship",
      college: "Nandha Info Tech",
      year: "Jun 2023 – Jul 2023",
      percentage: "Coimbatore",
    },
  ],
};

const About = () => {
  const hasProfilePic = Boolean(profilepic);

  return (
    <motion.section
      id="about"
      className="pt-24 p-5 bg-base-300 min-h-screen"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-center text-4xl md:text-5xl font-bold mb-6"
          variants={fadeInUp}
        >
          About Me
        </motion.h1>

        {/* Description */}
        <motion.div className="p-5 space-y-4" variants={staggerContainer}>
          {aboutData.description.map((para, idx) => (
            <motion.p
              key={idx}
              className="text-justify text-sm md:text-base leading-relaxed"
              variants={fadeInUp}
            >
              {para}
            </motion.p>
          ))}
        </motion.div>

        {/* Profile & Education */}
        <div className="flex flex-col lg:flex-row gap-6 p-5">
          {/* If profile pic exists, show it; otherwise show Education */}
          {hasProfilePic ? (
            <motion.div
              className="bg-base-200 p-4 rounded-lg shadow flex justify-center items-center"
              variants={fadeInUp}
            >
              <img
                src={profilepic}
                alt="Profile"
                className="w-full max-w-[250px] h-auto rounded-lg shadow-md"
              />
            </motion.div>
          ) : (
            <motion.div
              className="bg-base-200 flex-1 p-6 rounded-lg shadow flex flex-col gap-5"
              variants={staggerContainer}
            >
              <motion.h2 className="text-3xl font-bold" variants={fadeInUp}>
                Education
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutData.education.map((item, i) => (
                  <motion.article
                    key={i}
                    className="bg-base-300 p-5 rounded-md hover:scale-105 transition-all duration-300 shadow-lg"
                    variants={fadeInUp}
                  >
                    <h3 className="text-xl font-semibold mb-1">
                      {item.degree}
                    </h3>
                    <h4 className="text-md font-medium mb-1">{item.college}</h4>
                    <p className="text-sm font-bold">
                      {item.year} | {item.percentage}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* If profile pic exists, Education goes in second column */}
          {hasProfilePic && (
            <motion.div
              className="bg-base-200 flex-1 p-6 rounded-lg shadow flex flex-col gap-5"
              variants={staggerContainer}
            >
              <motion.h2 className="text-3xl font-bold" variants={fadeInUp}>
                Education
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutData.education.map((item, i) => (
                  <motion.article
                    key={i}
                    className="bg-base-300 p-5 rounded-md hover:scale-105 transition-all duration-300 shadow-lg"
                    variants={fadeInUp}
                  >
                    <h3 className="text-xl font-semibold mb-1">
                      {item.degree}
                    </h3>
                    <h4 className="text-md font-medium mb-1">{item.college}</h4>
                    <p className="text-sm font-bold">
                      {item.year} | {item.percentage}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
