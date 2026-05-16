import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function LandingPage() {
  usePageTitle(null)

  return (
    <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-4">
      <div className="text-center max-w-lg px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resume Creator</h1>
        <p className="text-lg md:text-xl text-indigo-200 mb-8">
          Create a professional resume in minutes. No sign-up required. Free forever.
        </p>
        <ul aria-label="Features" className="text-left text-indigo-100 mb-8 space-y-2 max-w-xs mx-auto">
          <li className="flex items-center gap-2"><span aria-hidden="true" className="text-emerald-400 font-bold">&#10003;</span> 20 professional templates</li>
          <li className="flex items-center gap-2"><span aria-hidden="true" className="text-emerald-400 font-bold">&#10003;</span> Live side-by-side preview</li>
          <li className="flex items-center gap-2"><span aria-hidden="true" className="text-emerald-400 font-bold">&#10003;</span> Download as PDF instantly</li>
          <li className="flex items-center gap-2"><span aria-hidden="true" className="text-emerald-400 font-bold">&#10003;</span> No account needed</li>
        </ul>
        <div className="flex flex-col items-center gap-3">
          <Link
            to="/templates"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Choose a Template
          </Link>
          <Link
            to="/editor"
            className="text-indigo-300 hover:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded px-2 py-1"
          >
            or start with Classic template &rarr;
          </Link>
        </div>
      </div>
    </main>
  )
}
