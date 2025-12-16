"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiWordpress,
  SiTailwindcss,
  SiGit,
  SiPhp,
  SiMongodb,
  SiNodedotjs,
  SiMysql,
  SiRedux,
  SiDocker,
  SiWoocommerce,
  SiGoogleanalytics,
  SiPostman,
} from "react-icons/si";

const skills = [
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiWordpress, name: "WordPress" },
  { icon: SiWoocommerce, name: "WooCommerce" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiMysql, },
  { icon: SiRedux, name: "Redux" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGit, name: "Git" },
  { icon: SiPostman, name: "API Integration" },
  { icon: SiGoogleanalytics, name: "Digital Marketing" },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-3"
            >
              <Icon className="text-5xl" />
              <span className="text-sm text-center">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
