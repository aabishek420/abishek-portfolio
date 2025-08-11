import React from "react";
import { motion } from "framer-motion";
import javaImg from "../assets/java.jpg";
import reactImg from "../assets/React.jpg";
import sqlImg from "../assets/Sql.jpg";

const certifications = [
  {
    name: "Java Programming",
    image: javaImg,
    link: "https://drive.google.com/file/d/1PfyJFq3gcOKIQJ0qaE6QFmQCGyJqa6R6/view?usp=drive_link"
  },
  {
    name: "Web Designing",
    image: reactImg,
    link: "https://drive.google.com/file/d/1cKwGQ8ts-y5d4OseRhczgeDU7X33a2Rq/view?usp=drive_link"
  },
  {
    name: "SQL Training",
    image: sqlImg,
    link: "https://drive.google.com/file/d/15NcJk3l5QjgpNXwmV1-dFHv_WjPxQDYn/view?usp=drive_link"
  }
];

const parentVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Certification = () => {
  return (
    <div className="py-12 px-4 bg-base-200 min-h-screen" id="certifications">
      {/* Title */}
      <motion.h1
        className="text-5xl text-center font-bold mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.h1>

      {/* Cards */}
      <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap gap-8 justify-center items-center"
      >
        {certifications.map((certificate, index) => (
          <motion.div
            key={index}
            variants={childVariant}
            className="relative bg-base-100 p-0 w-[300px] rounded-xl shadow-md overflow-hidden group cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-300"
          >

            {/* Image */}
            <img
              src={certificate.image}
              alt={certificate.name}
              className="w-full h-[180px] object-cover transition-opacity duration-300 hover:opacity-70"
            />

            {/* Overlay with View button */}
            <div className="absolute inset-0 bg-base-100 bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View
              </a>
            </div>

            {/* Title */}
            <h2 className="py-4 text-xl font-semibold text-center">
              {certificate.name}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certification;
