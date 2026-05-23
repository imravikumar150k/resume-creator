import { useRef, useState, useEffect } from 'react'

export default function SaveIndicator({ data }) {
  const [status, setStatus] = useState('saved')
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    setStatus('saving')
    const timer = setTimeout(() => setStatus('saved'), 500)
    return () => clearTimeout(timer)
  }, [data])

  return (
    <div className="flex items-center gap-1.5 text-xs" aria-live="polite">
      {status === 'saving' ? (
        <>
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-600">Saving...</span>
        </>
      ) : (
        <>
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-emerald-600">Saved</span>
        </>
      )}
    </div>
  )
}
