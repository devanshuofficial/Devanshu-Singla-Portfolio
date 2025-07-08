import React from 'react'
import ThemeToggle from './ThemeToggle'
import { motion } from 'framer-motion'

const navLinks = [
  {href: '#about', label:'About'},
  {href: '#projects', label:'Projects'},
  {href: '#skills', label:'Skills'},
  {href: '#education', label:'Education'},
  {href: '#experience', label:'Experience'},
  {href: '#certifications', label:'Certifications'},
  {href: '#contact', label:'Contact'},
]

function Navbar({ dark, setDark }) {
  return (
    <header className="fixed w-full top-0 backdrop-blur bg-white/70 dark:bg-zinc-900/70 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="font-bold text-xl text-pink-600">Devanshu</a>
        <ul className="hidden md:flex gap-6">
          {navLinks.map(link=>(
            <li key={link.href}>
              <a href={link.href} className="hover:text-pink-600">{link.label}</a>
            </li>
          ))}
        </ul>
        <ThemeToggle dark={dark} setDark={setDark}/>
      </nav>
    </header>
  )
}

export default Navbar
