import TraditionalTemplate from './TraditionalTemplate'
import ElegantTemplate from './ElegantTemplate'
import ModernBiodataTemplate from './ModernBiodataTemplate'
import RoyalBiodataTemplate from './RoyalBiodataTemplate'
import FloralTemplate from './FloralTemplate'
import MinimalistBiodataTemplate from './MinimalistBiodataTemplate'
import FestiveTemplate from './FestiveTemplate'
import ClassicBiodataTemplate from './ClassicBiodataTemplate'

const biodataTemplates = [
  { id: 'traditional', name: 'Traditional', description: 'Decorative border with warm gold and maroon tones', accentColor: '#92400e', component: TraditionalTemplate },
  { id: 'elegant', name: 'Elegant', description: 'Floral corner accents with soft serif fonts', accentColor: '#be185d', component: ElegantTemplate },
  { id: 'modern-biodata', name: 'Modern', description: 'Clean card layout with prominent photo', accentColor: '#4f46e5', component: ModernBiodataTemplate },
  { id: 'royal-biodata', name: 'Royal', description: 'Dark background with gold ornamental text', accentColor: '#d97706', component: RoyalBiodataTemplate },
  { id: 'floral', name: 'Floral', description: 'Watercolor flower borders with pastel colors', accentColor: '#ec4899', component: FloralTemplate },
  { id: 'minimalist-biodata', name: 'Minimalist', description: 'Simple and clean, no decoration', accentColor: '#6b7280', component: MinimalistBiodataTemplate },
  { id: 'festive', name: 'Festive', description: 'Bright colors with mandala patterns', accentColor: '#dc2626', component: FestiveTemplate },
  { id: 'classic-biodata', name: 'Classic', description: 'Simple bordered table layout', accentColor: '#1f2937', component: ClassicBiodataTemplate },
]

export function getBiodataTemplate(id) {
  return biodataTemplates.find((t) => t.id === id) || biodataTemplates[0]
}

export function getAllBiodataTemplates() {
  return biodataTemplates
}

export default biodataTemplates
