import ClassicTemplate from './ClassicTemplate'
import ModernTemplate from './ModernTemplate'
import BoldTemplate from './BoldTemplate'
import ExecutiveTemplate from './ExecutiveTemplate'
import CreativeTemplate from './CreativeTemplate'
import TechTemplate from './TechTemplate'
import AcademicTemplate from './AcademicTemplate'
import MinimalTemplate from './MinimalTemplate'

const templates = [
  { id: 'classic', name: 'Classic', description: 'Traditional serif layout with centered header', component: ClassicTemplate, accentColor: '#374151' },
  { id: 'modern', name: 'Modern', description: 'Clean and minimal with blue accents', component: ModernTemplate, accentColor: '#2563eb' },
  { id: 'bold', name: 'Bold', description: 'Dark header with strong typography', component: BoldTemplate, accentColor: '#111827' },
  { id: 'executive', name: 'Executive', description: 'Formal corporate layout with navy accents', component: ExecutiveTemplate, accentColor: '#1e3a5f' },
  { id: 'creative', name: 'Creative', description: 'Two-column with colored sidebar', component: CreativeTemplate, accentColor: '#1e3a5f' },
  { id: 'tech', name: 'Tech', description: 'Developer-focused with monospace and badges', component: TechTemplate, accentColor: '#6b7280' },
  { id: 'academic', name: 'Academic', description: 'Dense formal layout for research and CV', component: AcademicTemplate, accentColor: '#1f2937' },
  { id: 'minimal', name: 'Minimal', description: 'Ultra-clean pure typography layout', component: MinimalTemplate, accentColor: '#9ca3af' },
]

export function getTemplate(id) {
  return templates.find((t) => t.id === id) || templates[0]
}

export function getAllTemplates() {
  return templates
}

export default templates
