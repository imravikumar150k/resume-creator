import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
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
import { SAMPLE_DATA } from '../components/templates/sampleData'

const INITIAL_DATA = SAMPLE_DATA

export default function EditorPage() {
  const [resumeData, setResumeData, clearData] = useLocalStorage('resume-data', INITIAL_DATA)
  const [templateId] = useLocalStorage('resume-template', 'classic')
  const previewRef = useRef(null)
  const navigate = useNavigate()

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
      <header className="bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-end">
        <div className="flex gap-3">
          <Button onClick={() => navigate('/templates')} variant="secondary">Change Template</Button>
          <Button onClick={handleClear} variant="danger">Clear All</Button>
          <Button onClick={handlePrint} variant="primary">Download PDF</Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 overflow-y-auto p-6 space-y-6 border-r border-gray-200">
          <PersonalInfoForm data={resumeData.personalInfo} onChange={(val) => updateField('personalInfo', val)} />
          <SummaryForm data={resumeData.summary} onChange={(val) => updateField('summary', val)} />
          <ExperienceForm data={resumeData.experience} onChange={(val) => updateField('experience', val)} />
          <EducationForm data={resumeData.education} onChange={(val) => updateField('education', val)} />
          <SkillsForm data={resumeData.skills} onChange={(val) => updateField('skills', val)} />
          <ProjectsForm data={resumeData.projects} onChange={(val) => updateField('projects', val)} />
        </div>

        <div className="w-1/2 overflow-y-auto p-6 bg-gray-100">
          <div className="shadow-lg">
            <ResumePreview ref={previewRef} data={resumeData} templateId={templateId} />
          </div>
        </div>
      </div>
    </div>
  )
}
