import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  const roles = ['Aspiring AI Engineer', 'Full‑Stack Developer', 'Data Enthusiast']
  const [index, setIndex] = React.useState(0)

  React.useEffect(()=>{
    const id = setInterval(()=> setIndex(i => (i+1)%roles.length), 3000)
    return ()=>clearInterval(id)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center" id="#">
      <motion.div
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Devanshu <span className="text-pink-600">Singla</span>
        </h1>
        <p className="text-xl md:text-2xl">
          {roles[index]}
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="px-6 py-2 bg-pink-600 text-white rounded-full">Explore Work</a>
          <a href="/public/Devanshu Singla Resume.pdf" download className="px-6 py-2 border-2 border-pink-600 rounded-full">Résumé</a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
