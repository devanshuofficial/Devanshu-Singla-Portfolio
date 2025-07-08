import React from 'react'
import { motion } from 'framer-motion'

function Education() {
  return (
    <section id="education" className="bg-zinc-100 dark:bg-zinc-800 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
        <motion.div
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-50}}
          transition={{duration:0.6}}
          className="bg-white dark:bg-zinc-700 p-6 rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold mb-1">B.E. Computer Science Engineering (AI/ML)</h3>
          <p className="italic">Chitkara University &bull; 2023–2027 &bull; CGPA: 9.47/10</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
