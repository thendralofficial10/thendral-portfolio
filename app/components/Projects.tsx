"use client";

import { motion } from "framer-motion";

const projects = [
     {
     title: "Oneresi Platform",
     desc: (
      <>
        Oneresi Platform is a modern web application built using{" "}
        <strong>React</strong>, <strong>Next.js</strong>, and{" "}
        <strong>TypeScript</strong>, designed to deliver a fast, scalable,
        and maintainable user experience. The platform leverages{" "}
        <strong>Bootstrap</strong> for responsive UI components while
        ensuring clean architecture, optimized performance, and
        cross-device compatibility.
      </>
    ),
   url: "https://www.oneresi.net/",
  },
  {
    title: "Revotran Website",
    desc: "Corporate website built with WordPress & Elementor.",
    url: "https://revotran.co",
  },
  {
    title: "Great Value Contracting",
    desc: "Service-based WordPress website with performance optimization.",
    url: "https://greatvaluecontracting.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            target="_blank"
            whileHover={{ y: -5 }}
            className="
  group block border rounded-xl p-6
  bg-white dark:bg-neutral-900
  border-gray-200 dark:border-neutral-800
  hover:bg-gray-100 dark:hover:bg-neutral-800
  hover:shadow-lg
  transition-all duration-300
"    >
<h3 className="text-xl font-semibold mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
  {p.title}
</h3>
<p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
  {p.desc}
</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
