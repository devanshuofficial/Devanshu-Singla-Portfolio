import React from 'react'
import { motion } from 'framer-motion'

const certs = [
  'AI Agents & Agentic AI (Vanderbilt University)',
  'IBM Data Science Specialization',
  'Machine Learning with Python'
]

function Certifications() {
  return (
    <section id="certifications" className="bg-zinc-100 dark:bg-zinc-800 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Certifications</h2>
        <ul className="space-y-4">
          {certs.map(c=>(
            <motion.li
              key={c}
              whileHover={{scale:1.02}}
              className="bg-white dark:bg-zinc-700 p-4 rounded-lg shadow"
            >
              {c}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Certifications
