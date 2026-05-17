import { forwardRef } from 'react'
import { getBiodataTemplate } from '../templates'
import '../../../styles/resume-print.css'

const BiodataPreview = forwardRef(function BiodataPreview({ data, templateId = 'traditional', accentColor }, ref) {
  const template = getBiodataTemplate(templateId)
  const TemplateComponent = template.component
  const color = accentColor || template.accentColor
  return <TemplateComponent ref={ref} data={data} accentColor={color} />
})

export default BiodataPreview
