import { motion } from "framer-motion";
import Textra from "react-textra";
import Abi from "../assets/Abi.pdf"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center bg-base-100"
    >
      <div className="text-center space-y-6 px-4">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hello, I'm Abishek A
        </motion.h1>

        {/* Textra animated text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Textra
            data={[
              "Fullstack Developer",
              "Front End Developer",
              "Java Developer",
            ]}
            effect="topDown"
            className="text-2xl md:text-3xl font-bold text-secondary"
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-4">
            {/* Hire Me - mailto link */}
            <a
              href="mailto:aabishek636@gmail.com"
              className="btn btn-primary hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </a>

            {/* Download Resume - PDF file */}
            <a
              href={Abi}
              download="Abishek_Resume.pdf"
              className="btn btn-neutral hover:scale-105 transition-transform duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
