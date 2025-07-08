import React from 'react'

function Footer() {
  return (
    <footer className="py-6 text-center bg-zinc-200 dark:bg-zinc-800">
      © {new Date().getFullYear()} Devanshu Singla. Built with React & TailwindCSS.
    </footer>
  )
}

export default Footer
