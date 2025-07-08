import React from 'react'
import { motion } from 'framer-motion'

function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
        <motion.div
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:50}}
          transition={{duration:0.6}}
          className="bg-white dark:bg-zinc-700 p-6 rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold mb-1">Event Coordinator</h3>
          <p className="italic mb-2">Ecolution Club, Chitkara University &bull; Apr 2025 – Present</p>
          <p>Organized and managed conference activities, ensuring seamless flow and participant coordination.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
