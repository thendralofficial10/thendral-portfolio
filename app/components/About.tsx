"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-32"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-extrabold leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="text-blue-600 dark:text-blue-400">
               A.Thendral B.E,
            </span>
          </motion.h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
           I am a passionate <strong>Front-End Developer</strong> and{" "}
            <strong>Web Developer</strong> specializing in building responsive,
            user-friendly, and performance-optimized web applications using
            modern technologies.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400">
            I am continuously expanding my skills to evolve into a{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Full-Stack Developer
            </span>
            , focusing on backend development, databases, hosting, APIs, and
            scalable application architecture.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Thendral Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
