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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={entry.startDate?.split(' ')[0] || ''}
                  onChange={(e) => {
                    const year = entry.startDate?.split(' ')[1] || ''
                    updateEntry(entry.id, 'startDate', e.target.value && year ? `${e.target.value} ${year}` : e.target.value)
                  }}
                  className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Month</option>
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <select
                  value={entry.startDate?.split(' ')[1] || ''}
                  onChange={(e) => {
                    const month = entry.startDate?.split(' ')[0] || ''
                    updateEntry(entry.id, 'startDate', month && e.target.value ? `${month} ${e.target.value}` : e.target.value)
                  }}
                  className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Year</option>
                  {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={entry.endDate?.split(' ')[0] || ''}
                  onChange={(e) => {
                    const year = entry.endDate?.split(' ')[1] || ''
                    updateEntry(entry.id, 'endDate', e.target.value && year ? `${e.target.value} ${year}` : e.target.value)
                  }}
                  className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Month</option>
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <select
                  value={entry.endDate?.split(' ')[1] || ''}
                  onChange={(e) => {
                    const month = entry.endDate?.split(' ')[0] || ''
                    updateEntry(entry.id, 'endDate', month && e.target.value ? `${month} ${e.target.value}` : e.target.value)
                  }}
                  className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Year</option>
                  {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
            </div>
          </div>
          <Input label="GPA (optional)" id={`gpa-${entry.id}`} value={entry.gpa} onChange={(e) => updateEntry(entry.id, 'gpa', e.target.value)} />
        </div>
      ))}
    </div>
  )
}
