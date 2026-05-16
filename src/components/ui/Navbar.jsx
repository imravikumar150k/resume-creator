import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 shadow-lg border-b border-slate-700/50">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          aria-label="ResumeMaker home"
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-lg"
        >
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-indigo-500/30 transition-shadow">
            <span className="text-white font-black text-sm">RM</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Resume<span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Maker</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 ${isActive('/') ? 'bg-white/10 text-white shadow-inner' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
          >
            Home
          </Link>
          <Link
            to="/templates"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 ${isActive('/templates') ? 'bg-white/10 text-white shadow-inner' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
          >
            Templates
          </Link>
          <Link
            to="/editor"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 ${isActive('/editor') ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
          >
            Start Building
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-lg p-1 transition-colors"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 mt-3 pb-2">
          <Link
            to="/"
            onClick={closeMenu}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 ${isActive('/') ? 'bg-white/10 text-white shadow-inner' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
          >
            Home
          </Link>
          <Link
            to="/templates"
            onClick={closeMenu}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 ${isActive('/templates') ? 'bg-white/10 text-white shadow-inner' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
          >
            Templates
          </Link>
          <Link
            to="/editor"
            onClick={closeMenu}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 ${isActive('/editor') ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
          >
            Start Building
          </Link>
        </div>
      )}
    </nav>
  )
}
