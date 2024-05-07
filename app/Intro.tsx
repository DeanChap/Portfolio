"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsDownload, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";


export default function Intro() {

  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
    ref={ref}
    id="home" 
    className='hero text-white py-28 sm:mb-0 scroll-mt-[100rem]' >
      <div className='container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h4 initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} className='text-2xl font-bold text-gray-950 lg:leading-[94px] lg:text-[38px] dark:text-gray-300'>
          {"Hello, I'm Dean Chap, an aspiring"}
        </motion.h4>
        <motion.h1 initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} className='text-5xl mt-3 font-bold lg:text-[88px] lg:leading-[94px] text-gray-950'>
          <span className="type-forHeader dark:text-gray-300"></span>
        </motion.h1>
        <motion.p initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} className=' font-normal text-base w-full lg:w-3/6 mt-9 text-gray-950 dark:text-gray-300'>
          {" Hey, I'm Dean Chap! Tech enthusiast here. I kicked off my coding adventure with HTML nearly a decade ago, and my journey through college delved me into the fascinating world of computer science. React has become my strong suit, but I'm also venturing into the backend scene with Node.js and Express. Lately, I've been diving into databases like MySQL and SQL, and playing with visualization tools like Tableau to improve my skills as an analyst. Click on Projects to  check out some of my work :)"}
        </motion.p>
        <div className='mt-11'>
          <motion.div className='mt-6 flex items-center gap-3 text-gray-950'
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{
            delay: 0.1,
          }}
          >
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer hover:bg-black/80 hover:text-gray-100 border-2 border-black dark:bg-white/10 dark:text-gray-400 dark:border-0.5 dark:hover:border-gray-400"
              href="/Resume-DeanChap.pdf"
              download
            >
              Download Resume {" "}<BsDownload className='opacity-60 group-hover:translate-y-1 transition'/> 
            </a>
            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-100 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:bg-black/80 border-2 border-black dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/dean-chap-721537187/"
              target="_blank"
            >
              <BsLinkedin/>
            </a>
            <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-100 active:scale-105 transition cursor-pointer hover:bg-black/80 border-2 border-black dark:bg-white/10 dark:text-white/60"
                href="https://github.com/DeanChap"
                target="_blank"
            >
              <FaGithubSquare/>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
