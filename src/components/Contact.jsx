import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <motion.p
          whileInView={{opacity:1}}
          initial={{opacity:0}}
          transition={{duration:0.6}}
          className="mb-4"
        >
          Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </motion.p>
        <p className="mb-2"><a href="mailto:devanshusinglafzr@gmail.com" className="text-pink-600 underline">devanshusinglafzr@gmail.com</a></p>
        <p className="mb-4">+91 62394 69201</p>
        <p>
          <a href="https://www.linkedin.com/in/devanshu-singla-a11aa2281/" target="_blank" className="mx-2 underline">LinkedIn</a>
          <a href="https://github.com/devanshuofficial" target="_blank" className="mx-2 underline">GitHub</a>
        </p>
      </div>
    </section>
  )
}

export default Contact
