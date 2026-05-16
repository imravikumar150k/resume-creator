import { useState } from 'react'

const PRESET_COLORS = [
  '#2563eb', '#4f46e5', '#7c3aed', '#9333ea',
  '#dc2626', '#ea580c', '#d97706', '#b45309',
  '#059669', '#0d9488', '#0ea5e9', '#15803d',
  '#374151', '#1f2937', '#111827', '#6b7280',
]

export default function ColorPicker({ value, onChange, label = 'Accent Color' }) {
  const [showCustom, setShowCustom] = useState(false)

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex flex-wrap gap-2">
        {PRESET_COLORS.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 ${
              value === color ? 'border-gray-900 scale-110' : 'border-transparent'
            }`}
            style={{ backgroundColor: color }}
            aria-label={`Select color ${color}`}
          />
        ))}
        <button
          onClick={() => setShowCustom(!showCustom)}
          className="w-7 h-7 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-xs hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Custom color"
        >
          +
        </button>
      </div>
      {showCustom && (
        <div className="flex items-center gap-2 mt-1">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-8 h-8 rounded cursor-pointer border-0 p-0"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="#hex"
            className="w-24 px-2 py-1 border border-gray-300 rounded text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      )}
    </div>
  )
}
