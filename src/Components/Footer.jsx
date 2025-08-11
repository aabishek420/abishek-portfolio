import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/abishek-a-javadev/',
      label: 'LinkedIn',
    },
    {
      icon: <FaWhatsapp />,
      url: 'https://wa.me/918940068766',
      label: 'WhatsApp',
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/aabishek420/',
      label: 'GitHub',
    },
    {
      icon: <SiGmail />,
      url: 'mailto:aabishek636@gmail.com',
      label: 'Gmail',
    },
  ];

  return (
    <motion.footer
      className="bg-base-300 py-6 px-4 mt-10"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="flex justify-center gap-6 flex-wrap"
        variants={containerVariant}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            variants={iconVariant}
            className="text-3xl text-primary hover:scale-110 transition-transform"
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        className="text-center mt-5 text-secondary font-bold text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        &copy; {new Date().getFullYear()} Designed and Developed by ABISHEK A
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
