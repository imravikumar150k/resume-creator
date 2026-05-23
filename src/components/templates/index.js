import ClassicTemplate from './ClassicTemplate'
import ModernTemplate from './ModernTemplate'
import BoldTemplate from './BoldTemplate'
import ExecutiveTemplate from './ExecutiveTemplate'
import CreativeTemplate from './CreativeTemplate'
import TechTemplate from './TechTemplate'
import AcademicTemplate from './AcademicTemplate'
import MinimalTemplate from './MinimalTemplate'
import ElegantTemplate from './ElegantTemplate'
import CompactTemplate from './CompactTemplate'
import TimelineTemplate from './TimelineTemplate'
import CorporateTemplate from './CorporateTemplate'
import FreshTemplate from './FreshTemplate'
import SlateTemplate from './SlateTemplate'
import ProfessionalTemplate from './ProfessionalTemplate'
import SimpleTemplate from './SimpleTemplate'
import GradientTemplate from './GradientTemplate'
import NewspaperTemplate from './NewspaperTemplate'
import GeometricTemplate from './GeometricTemplate'
import RoyalTemplate from './RoyalTemplate'

const templates = [
  { id: 'classic', name: 'Classic', description: 'Traditional serif layout with centered header', component: ClassicTemplate, accentColor: '#374151' },
  { id: 'modern', name: 'Modern', description: 'Clean and minimal with blue accents', component: ModernTemplate, accentColor: '#2563eb' },
  { id: 'bold', name: 'Bold', description: 'Dark header with strong typography', component: BoldTemplate, accentColor: '#111827' },
  { id: 'executive', name: 'Executive', description: 'Formal corporate layout with navy accents', component: ExecutiveTemplate, accentColor: '#1e3a5f' },
  { id: 'creative', name: 'Creative', description: 'Two-column with colored sidebar', component: CreativeTemplate, accentColor: '#1e3a5f' },
  { id: 'tech', name: 'Tech', description: 'Developer-focused with monospace and badges', component: TechTemplate, accentColor: '#6b7280' },
  { id: 'academic', name: 'Academic', description: 'Dense formal layout for research and CV', component: AcademicTemplate, accentColor: '#1f2937' },
  { id: 'minimal', name: 'Minimal', description: 'Ultra-clean pure typography layout', component: MinimalTemplate, accentColor: '#9ca3af' },
  { id: 'elegant', name: 'Elegant', description: 'Refined serif with gold accents', component: ElegantTemplate, accentColor: '#b45309' },
  { id: 'compact', name: 'Compact', description: 'Dense layout maximizing content space', component: CompactTemplate, accentColor: '#4b5563' },
  { id: 'timeline', name: 'Timeline', description: 'Visual timeline for experience entries', component: TimelineTemplate, accentColor: '#0d9488' },
  { id: 'corporate', name: 'Corporate', description: 'Professional business with thick borders', component: CorporateTemplate, accentColor: '#1f2937' },
  { id: 'fresh', name: 'Fresh', description: 'Bright green tones with rounded elements', component: FreshTemplate, accentColor: '#059669' },
  { id: 'slate', name: 'Slate', description: 'Dark theme with sky blue highlights', component: SlateTemplate, accentColor: '#0ea5e9' },
  { id: 'professional', name: 'Professional', description: 'Clean layout with green section headers', component: ProfessionalTemplate, accentColor: '#15803d' },
  { id: 'simple', name: 'Simple', description: 'Bare essentials with no decoration', component: SimpleTemplate, accentColor: '#6b7280' },
  { id: 'gradient', name: 'Gradient', description: 'Purple-to-pink gradient header', component: GradientTemplate, accentColor: '#9333ea' },
  { id: 'newspaper', name: 'Newspaper', description: 'Multi-column editorial style', component: NewspaperTemplate, accentColor: '#111827' },
  { id: 'geometric', name: 'Geometric', description: 'Orange geometric shapes and accents', component: GeometricTemplate, accentColor: '#ea580c' },
  { id: 'royal', name: 'Royal', description: 'Dark background with gold typography', component: RoyalTemplate, accentColor: '#d97706' },
]

export function getTemplate(id) {
  return templates.find((t) => t.id === id) || templates[0]
}

export function getAllTemplates() {
  return templates
}

export default templates
