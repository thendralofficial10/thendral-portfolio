"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-neutral-900 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          Contact
        </motion.h2>

        <p className="mb-6">
          Feel free to reach out for collaborations or opportunities.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:yourmail@example.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
