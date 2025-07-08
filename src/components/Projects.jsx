import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'SimuDrive',
    desc: 'Self-driving car simulation showcasing neural networks and evolutionary algorithms.',
    link: 'https://github.com/devanshuofficial/SimuDrive-Neural-Network-Car-Simulation'
  },
  {
    title: 'Crunch',
    desc: 'Real-time responsive chat app with secure auth and channel-based messaging.',
    link: 'https://github.com/devanshuofficial/Crunch'
  },
  {
    title: 'Toll Tax Management System',
    desc: 'Django web app for toll operations including booths, passes, and receipts.',
    link: 'https://github.com/devanshuofficial/Toll-Tax-Management-System'
  }
]

function Projects() {
  return (
    <section id="projects" className="bg-zinc-100 dark:bg-zinc-800 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(p=>(
            <motion.div
              key={p.title}
              whileHover={{y:-10}}
              className="p-6 rounded-lg bg-white dark:bg-zinc-700 shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-600">{p.title}</h3>
              <p className="mb-4">{p.desc}</p>
              <a href={p.link} target="_blank" className="text-pink-600 underline">View Code</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
