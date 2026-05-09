import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { getAllTemplates } from '../components/templates'
import { SAMPLE_DATA } from '../components/templates/sampleData'

export default function TemplateGallery() {
  const [selectedTemplate, setSelectedTemplate] = useLocalStorage('resume-template', 'classic')
  const navigate = useNavigate()
  const templates = getAllTemplates()

  function selectTemplate(id) {
    setSelectedTemplate(id)
    navigate('/editor')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose a Template</h1>
          <p className="text-gray-600">Select a template to get started. You can change it anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => {
            const TemplateComponent = template.component
            const isSelected = selectedTemplate === template.id

            return (
              <button
                key={template.id}
                onClick={() => selectTemplate(template.id)}
                className={`text-left bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border-2 ${
                  isSelected ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="transform scale-[0.35] origin-top-left w-[286%]">
                    <TemplateComponent data={SAMPLE_DATA} />
                  </div>
                </div>

                <div className="p-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: template.accentColor }} />
                    <h3 className="font-semibold text-gray-900">{template.name}</h3>
                    {isSelected && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full ml-auto">Selected</span>}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{template.description}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
