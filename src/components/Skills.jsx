import React from 'react'
import { motion } from 'framer-motion'

const skillList = [
  'Python','Java','C++','HTML','CSS','JavaScript','Django','Flask',
  'GitHub','Power BI','MySQL','Data Structures','Cloud Computing'
]

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skillList.map(skill=>(
            <motion.span
              key={skill}
              whileHover={{scale:1.1}}
              className="px-4 py-2 bg-pink-600/20 text-pink-700 dark:text-pink-300 rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
