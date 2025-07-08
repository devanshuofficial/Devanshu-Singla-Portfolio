import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-20 px-4">
      <motion.h2
        className="text-3xl font-bold mb-6"
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:50}}
        transition={{duration:0.6}}
      >About Me</motion.h2>
      <motion.p
        className="leading-relaxed text-lg"
        whileInView={{opacity:1}}
        initial={{opacity:0}}
        transition={{duration:0.8}}
      >
        I'm an aspiring AI Engineer and Computer Science Engineering (AI/ML) student at
        Chitkara University with a strong foundation in Python, Java, C++, and Data Structures & Algorithms.
        Passionate about leveraging AI and Machine Learning to build data-driven solutions and tackle real-world problems.
      </motion.p>
    </section>
  )
}

export default About
