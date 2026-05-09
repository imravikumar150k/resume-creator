import Input from '../ui/Input'
import Button from '../ui/Button'

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export default function ProjectsForm({ data, onChange }) {
  function addEntry() {
    onChange([...data, { id: generateId(), name: '', description: '', link: '' }])
  }

  function removeEntry(id) {
    onChange(data.filter((entry) => entry.id !== id))
  }

  function updateEntry(id, field, value) {
    onChange(data.map((entry) => entry.id === id ? { ...entry, [field]: value } : entry))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Projects (Optional)</h3>
        <Button onClick={addEntry} variant="secondary" className="text-sm">+ Add</Button>
      </div>
      {data.map((entry) => (
        <div key={entry.id} className="border border-gray-200 rounded-lg p-4 space-y-3">
          <div className="flex justify-end">
            <Button onClick={() => removeEntry(entry.id)} variant="danger" className="text-xs">Remove</Button>
          </div>
          <Input label="Project Name" id={`proj-name-${entry.id}`} value={entry.name} onChange={(e) => updateEntry(entry.id, 'name', e.target.value)} />
          <div>
            <label htmlFor={`proj-desc-${entry.id}`} className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              id={`proj-desc-${entry.id}`}
              value={entry.description}
              onChange={(e) => updateEntry(entry.id, 'description', e.target.value)}
              rows={2}
              placeholder="Brief project description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Input label="Link (optional)" id={`proj-link-${entry.id}`} type="url" value={entry.link} onChange={(e) => updateEntry(entry.id, 'link', e.target.value)} />
        </div>
      ))}
    </div>
  )
}
