export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 px-8 py-4 flex items-center justify-between">
      <p className="text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} ResumeMaker. All rights reserved.
      </p>
      <p className="text-slate-400 text-sm">
        Made with <span className="text-red-400">&#9829;</span> by <span className="font-semibold text-white">ResumeMaker</span>
      </p>
    </footer>
  )
}
