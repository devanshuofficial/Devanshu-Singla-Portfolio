import React from 'react'

function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={()=>setDark(!dark)}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle
