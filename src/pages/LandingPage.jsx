import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function LandingPage() {
  usePageTitle(null)

  return (
    <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-4">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resume & Biodata Creator</h1>
        <p className="text-lg md:text-xl text-indigo-200 mb-8">
          Create professional resumes and matrimonial biodata in minutes. No sign-up required. Free forever.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
          {/* Resume Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">Resume Builder</h2>
            <ul aria-label="Resume features" className="text-left text-indigo-100 mb-4 space-y-1 text-sm">
              <li className="flex items-center gap-2"><span aria-hidden="true" className="text-emerald-400 font-bold">&#10003;</span> 20 professional templates</li>
              <li className="flex items-center gap-2"><span aria-hidden="true" className="text-emerald-400 font-bold">&#10003;</span> Live side-by-side preview</li>
              <li className="flex items-center gap-2"><span aria-hidden="true" className="text-emerald-400 font-bold">&#10003;</span> Download as PDF instantly</li>
            </ul>
            <Link
              to="/templates"
              className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Build Resume
            </Link>
          </div>

          {/* Biodata Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">Biodata Maker</h2>
            <ul aria-label="Biodata features" className="text-left text-indigo-100 mb-4 space-y-1 text-sm">
              <li className="flex items-center gap-2"><span aria-hidden="true" className="text-rose-400 font-bold">&#10003;</span> 8 matrimonial templates</li>
              <li className="flex items-center gap-2"><span aria-hidden="true" className="text-rose-400 font-bold">&#10003;</span> Personal &amp; family details</li>
              <li className="flex items-center gap-2"><span aria-hidden="true" className="text-rose-400 font-bold">&#10003;</span> PDF export with one click</li>
            </ul>
            <Link
              to="/biodata/templates"
              className="inline-block w-full bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              Create Biodata
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
