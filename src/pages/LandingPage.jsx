import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <div className="text-center max-w-lg px-6">
        <h1 className="text-5xl font-bold text-white mb-4">Resume Creator</h1>
        <p className="text-xl text-indigo-200 mb-8">
          Create a professional resume in minutes. No sign-up required. Free forever.
        </p>
        <ul className="text-left text-indigo-100 mb-8 space-y-2 max-w-xs mx-auto">
          <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">&#10003;</span> 20 professional templates</li>
          <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">&#10003;</span> Live side-by-side preview</li>
          <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">&#10003;</span> Download as PDF instantly</li>
          <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">&#10003;</span> No account needed</li>
        </ul>
        <div className="flex flex-col items-center gap-3">
          <Link
            to="/templates"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Choose a Template
          </Link>
          <Link
            to="/editor"
            className="text-indigo-300 hover:text-white text-sm font-medium"
          >
            or start with Classic template →
          </Link>
        </div>
      </div>
    </div>
  )
}
