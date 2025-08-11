import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const Contact = () => {
  const form = useRef();
  const [fileBase64, setFileBase64] = useState("");

  // Convert file to Base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
      attachment: fileBase64,
    };

    emailjs
      .send('service_jlbb2tc', 'template_jmeybzo', formData, 'bkMr7w1uRD-reyyED')
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
          form.current.reset();
          setFileBase64("");
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-base-200"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        id="contact"
      >
        <motion.h1
          className="text-5xl font-bold text-center mb-10"
          variants={fadeInUp}
        >
          Contact
        </motion.h1>

        <motion.form
          ref={form}
          className="flex flex-col gap-6 w-full max-w-xl bg-base-300 p-6 rounded-lg shadow-md"
          variants={staggerContainer}
          onSubmit={sendEmail}
        >
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input type="text" name="name" className="input input-primary w-full" required />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input type="email" name="email" className="input input-primary w-full" required />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold mb-1">Subject</label>
            <input type="text" name="subject" className="input input-primary w-full" required />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea name="message" className="textarea textarea-primary w-full h-28 resize-none" required />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold mb-1">Attachment</label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              onChange={handleFileChange}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="btn btn-primary w-full"
            variants={fadeInUp}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </>
  );
};

export default Contact;
