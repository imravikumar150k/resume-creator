import Input from '../ui/Input'
import Button from '../ui/Button'

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export default function EducationForm({ data, onChange }) {
  function addEntry() {
    onChange([...data, { id: generateId(), degree: '', institution: '', startDate: '', endDate: '', gpa: '' }])
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
        <h3 className="text-lg font-semibold text-gray-800">Education</h3>
        <Button onClick={addEntry} variant="secondary" className="text-sm">+ Add</Button>
      </div>
      {data.map((entry) => (
        <div key={entry.id} className="border border-gray-200 rounded-lg p-4 space-y-3">
          <div className="flex justify-end">
            <Button onClick={() => removeEntry(entry.id)} variant="danger" className="text-xs">Remove</Button>
          </div>
          <Input label="Degree" id={`degree-${entry.id}`} value={entry.degree} onChange={(e) => updateEntry(entry.id, 'degree', e.target.value)} />
          <Input label="Institution" id={`institution-${entry.id}`} value={entry.institution} onChange={(e) => updateEntry(entry.id, 'institution', e.target.value)} />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Start Date" id={`edu-start-${entry.id}`} value={entry.startDate} onChange={(e) => updateEntry(entry.id, 'startDate', e.target.value)} placeholder="e.g. 2016" />
            <Input label="End Date" id={`edu-end-${entry.id}`} value={entry.endDate} onChange={(e) => updateEntry(entry.id, 'endDate', e.target.value)} placeholder="e.g. 2020" />
          </div>
          <Input label="GPA (optional)" id={`gpa-${entry.id}`} value={entry.gpa} onChange={(e) => updateEntry(entry.id, 'gpa', e.target.value)} />
        </div>
      ))}
    </div>
  )
}
