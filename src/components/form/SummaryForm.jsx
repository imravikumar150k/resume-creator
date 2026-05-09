export default function SummaryForm({ data, onChange }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800">Professional Summary</h3>
      <textarea
        value={data}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Brief professional summary (2-4 sentences)"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  )
}
