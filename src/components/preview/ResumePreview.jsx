import { forwardRef } from 'react'
import { getTemplate } from '../templates'
import '../../styles/resume-print.css'

const ResumePreview = forwardRef(function ResumePreview({ data, templateId = 'classic', accentColor }, ref) {
  const template = getTemplate(templateId)
  const TemplateComponent = template.component
  const color = accentColor || template.accentColor
  return <TemplateComponent ref={ref} data={data} accentColor={color} />
})

export default ResumePreview
