import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md px-8 py-4 flex items-center justify-between shadow-lg border-b border-slate-700/50">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-indigo-500/30 transition-shadow">
          <span className="text-white font-black text-sm">RM</span>
        </div>
        <span className="text-xl font-bold text-white tracking-tight">
          Resume<span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Maker</span>
        </span>
      </Link>
      <div className="flex items-center gap-1">
        <Link
          to="/"
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/') ? 'bg-white/10 text-white shadow-inner' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
        >
          Home
        </Link>
        <Link
          to="/templates"
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/templates') ? 'bg-white/10 text-white shadow-inner' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
        >
          Templates
        </Link>
        <Link
          to="/editor"
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/editor') ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
        >
          Start Building
        </Link>
      </div>
    </nav>
  )
}
