import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useLocalStorage } from '../hooks/useLocalStorage'
import PersonalInfoForm from '../components/form/PersonalInfoForm'
import SummaryForm from '../components/form/SummaryForm'
import ExperienceForm from '../components/form/ExperienceForm'
import EducationForm from '../components/form/EducationForm'
import SkillsForm from '../components/form/SkillsForm'
import ProjectsForm from '../components/form/ProjectsForm'
import ResumePreview from '../components/preview/ResumePreview'
import Button from '../components/ui/Button'

const INITIAL_DATA = {
  personalInfo: { name: '', email: '', phone: '', location: '', linkedin: '', website: '' },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  projects: [],
}

export default function EditorPage() {
  const [resumeData, setResumeData, clearData] = useLocalStorage('resume-data', INITIAL_DATA)
  const previewRef = useRef(null)

  const handlePrint = useReactToPrint({ contentRef: previewRef })

  function updateField(field, value) {
    setResumeData({ ...resumeData, [field]: value })
  }

  function handleClear() {
    if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      clearData()
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Resume Creator</h1>
        <div className="flex gap-3">
          <Button onClick={handleClear} variant="danger">Clear All</Button>
          <Button onClick={handlePrint} variant="primary">Download PDF</Button>
        </div>
      </header>

      {/* Split panels */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Form */}
        <div className="w-1/2 overflow-y-auto p-6 space-y-6 border-r border-gray-200">
          <PersonalInfoForm data={resumeData.personalInfo} onChange={(val) => updateField('personalInfo', val)} />
          <SummaryForm data={resumeData.summary} onChange={(val) => updateField('summary', val)} />
          <ExperienceForm data={resumeData.experience} onChange={(val) => updateField('experience', val)} />
          <EducationForm data={resumeData.education} onChange={(val) => updateField('education', val)} />
          <SkillsForm data={resumeData.skills} onChange={(val) => updateField('skills', val)} />
          <ProjectsForm data={resumeData.projects} onChange={(val) => updateField('projects', val)} />
        </div>

        {/* Right: Preview */}
        <div className="w-1/2 overflow-y-auto p-6 bg-gray-100">
          <div className="shadow-lg">
            <ResumePreview ref={previewRef} data={resumeData} />
          </div>
        </div>
      </div>
    </div>
  )
}
