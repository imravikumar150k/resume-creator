import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume Creator</h1>
        <p className="text-lg text-gray-600 mb-8">Create a professional resume in minutes</p>
        <Link
          to="/editor"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Create Resume
        </Link>
      </div>
    </div>
  )
}
