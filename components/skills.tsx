"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { color, motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white rounded-1 border-2 border-[#189AB4]/40 rounded-xl px-5 py-3 mt-2 dark:bg-black/10 dark:text-white/80 dark:border-[#189AB4]/40 cursor-pointer"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            whileHover={{ 
              scale: 1.1, 
              borderColor: "rgba(24, 154, 180, 0.4)", 
              borderStyle: "solid", 
              borderWidth: "2px", 
            }}
            transition={{ 
              duration: 0.2
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}