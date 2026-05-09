import { forwardRef } from 'react'
import { getTemplate } from '../templates'
import '../../styles/resume-print.css'

const ResumePreview = forwardRef(function ResumePreview({ data, templateId = 'classic' }, ref) {
  const { component: TemplateComponent } = getTemplate(templateId)
  return <TemplateComponent ref={ref} data={data} />
})

export default ResumePreview
