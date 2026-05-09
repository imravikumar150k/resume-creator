import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-lg px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Resume Creator</h1>
        <p className="text-xl text-gray-600 mb-8">
          Create a professional resume in minutes. No sign-up required. Free forever.
        </p>
        <ul className="text-left text-gray-700 mb-8 space-y-2 max-w-xs mx-auto">
          <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Live side-by-side preview</li>
          <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Download as PDF instantly</li>
          <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Auto-saves your progress</li>
          <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> No account needed</li>
        </ul>
        <Link
          to="/editor"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Create Your Resume
        </Link>
      </div>
    </div>
  )
}
