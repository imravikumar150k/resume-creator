import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  useEffect(() => { document.title = 'Page Not Found | ResumeMaker' }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <h1 className="text-8xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-indigo-200 mb-8">Page not found</p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
