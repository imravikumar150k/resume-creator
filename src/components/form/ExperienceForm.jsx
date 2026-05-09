import Input from '../ui/Input'
import Button from '../ui/Button'

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export default function ExperienceForm({ data, onChange }) {
  function addEntry() {
    onChange([...data, { id: generateId(), title: '', company: '', startDate: '', endDate: '', current: false, bullets: [''] }])
  }

  function removeEntry(id) {
    onChange(data.filter((entry) => entry.id !== id))
  }

  function updateEntry(id, field, value) {
    onChange(data.map((entry) => entry.id === id ? { ...entry, [field]: value } : entry))
  }

  function addBullet(id) {
    onChange(data.map((entry) => entry.id === id ? { ...entry, bullets: [...entry.bullets, ''] } : entry))
  }

  function updateBullet(id, bulletIndex, value) {
    onChange(data.map((entry) => entry.id === id ? { ...entry, bullets: entry.bullets.map((b, i) => i === bulletIndex ? value : b) } : entry))
  }

  function removeBullet(id, bulletIndex) {
    onChange(data.map((entry) => entry.id === id ? { ...entry, bullets: entry.bullets.filter((_, i) => i !== bulletIndex) } : entry))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Work Experience</h3>
        <Button onClick={addEntry} variant="secondary" className="text-sm">+ Add</Button>
      </div>
      {data.map((entry) => (
        <div key={entry.id} className="border border-gray-200 rounded-lg p-4 space-y-3">
          <div className="flex justify-end">
            <Button onClick={() => removeEntry(entry.id)} variant="danger" className="text-xs">Remove</Button>
          </div>
          <Input label="Job Title" id={`title-${entry.id}`} value={entry.title} onChange={(e) => updateEntry(entry.id, 'title', e.target.value)} />
          <Input label="Company" id={`company-${entry.id}`} value={entry.company} onChange={(e) => updateEntry(entry.id, 'company', e.target.value)} />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Start Date" id={`start-${entry.id}`} value={entry.startDate} onChange={(e) => updateEntry(entry.id, 'startDate', e.target.value)} placeholder="e.g. Jan 2020" />
            <Input label="End Date" id={`end-${entry.id}`} value={entry.current ? 'Present' : entry.endDate} onChange={(e) => updateEntry(entry.id, 'endDate', e.target.value)} placeholder="e.g. Dec 2022" disabled={entry.current} />
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" checked={entry.current} onChange={(e) => updateEntry(entry.id, 'current', e.target.checked)} />
            Currently working here
          </label>
          <div className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Key Achievements</span>
            {entry.bullets.map((bullet, i) => (
              <div key={i} className="flex gap-2">
                <input
                  value={bullet}
                  onChange={(e) => updateBullet(entry.id, i, e.target.value)}
                  placeholder="Describe an achievement..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {entry.bullets.length > 1 && (
                  <button onClick={() => removeBullet(entry.id, i)} className="text-red-500 hover:text-red-700 px-2">×</button>
                )}
              </div>
            ))}
            <button onClick={() => addBullet(entry.id)} className="text-sm text-blue-600 hover:text-blue-800">+ Add bullet</button>
          </div>
        </div>
      ))}
    </div>
  )
}
