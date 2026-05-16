import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { getAllTemplates } from '../components/templates'
import { SAMPLE_DATA } from '../components/templates/sampleData'

export default function TemplateGallery() {
  const [selectedTemplate, setSelectedTemplate] = useLocalStorage('resume-template', 'classic')
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()
  const templates = getAllTemplates()

  function selectTemplate(id) {
    setSelectedTemplate(id)
    navigate('/editor')
  }

  const goLeft = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? templates.length - 1 : prev - 1))
  }, [templates.length])

  const goRight = useCallback(() => {
    setCurrentIndex((prev) => (prev === templates.length - 1 ? 0 : prev + 1))
  }, [templates.length])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'ArrowLeft') {
        goLeft()
      } else if (e.key === 'ArrowRight') {
        goRight()
      } else if (e.key === 'Enter') {
        selectTemplate(templates[currentIndex].id)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goLeft, goRight, currentIndex, templates])

  const template = templates[currentIndex]
  const TemplateComponent = template.component
  const isSelected = selectedTemplate === template.id

  return (
    <main className="flex-1 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-4 md:p-6 flex flex-col overflow-hidden">
      <div className="text-center mb-4 shrink-0">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">Choose a Template</h1>
        <p className="text-indigo-200 text-xs md:text-sm">Browse templates and click to select. Use arrow keys to navigate.</p>
      </div>

      <div className="flex-1 flex items-center justify-center gap-3 md:gap-6 min-h-0">
        {/* Left Arrow */}
        <button
          onClick={goLeft}
          aria-label="Previous template"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white text-xl md:text-2xl transition-all hover:scale-110 shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          &#8249;
        </button>

        {/* Template Card */}
        <button
          onClick={() => selectTemplate(template.id)}
          aria-label={`Select ${template.name} template`}
          className={`max-w-2xl w-full h-full text-left bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all border-2 flex flex-col focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
            isSelected ? 'border-indigo-400 shadow-lg shadow-indigo-500/30' : 'border-white/10 hover:border-white/30'
          }`}
        >
          <div className="flex-1 overflow-hidden relative bg-white rounded-t-lg m-2 md:m-3 mb-0 min-h-0">
            <div className="transform scale-[0.45] md:scale-[0.6] origin-top-left w-[222%] md:w-[167%]">
              <TemplateComponent data={SAMPLE_DATA} />
            </div>
          </div>

          <div className="p-3 md:p-4 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: template.accentColor }} />
              <h3 className="text-base md:text-lg font-semibold text-white">{template.name}</h3>
              {isSelected && <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-0.5 rounded-full ml-auto">Selected</span>}
            </div>
            <p className="text-xs md:text-sm text-slate-400 mt-1">{template.description}</p>
          </div>
        </button>

        {/* Right Arrow */}
        <button
          onClick={goRight}
          aria-label="Next template"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white text-xl md:text-2xl transition-all hover:scale-110 shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          &#8250;
        </button>
      </div>

      {/* Pagination - always visible */}
      <div className="shrink-0 flex items-center justify-center gap-3 mt-3">
        <div aria-label="Template pagination" className="flex items-center gap-1.5 md:gap-2">
          {templates.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to template ${i + 1}`}
              className={`h-2 md:h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 ${i === currentIndex ? 'bg-indigo-400 w-4 md:w-5' : 'bg-white/50 hover:bg-white/80 w-2 md:w-2.5'}`}
            />
          ))}
        </div>
        <span className="text-white text-xs md:text-sm font-medium">{currentIndex + 1} / {templates.length}</span>
      </div>
    </main>
  )
}
