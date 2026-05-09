import ClassicTemplate from './ClassicTemplate'

const templates = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional serif layout with centered header',
    component: ClassicTemplate,
    accentColor: '#374151',
  },
]

export function getTemplate(id) {
  return templates.find((t) => t.id === id) || templates[0]
}

export function getAllTemplates() {
  return templates
}

export default templates
