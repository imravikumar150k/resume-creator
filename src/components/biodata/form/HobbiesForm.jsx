export default function HobbiesForm({ data, onChange }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-900 border-b pb-1">Hobbies & Interests</h2>
      <textarea
        value={data}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        placeholder="e.g. Classical dance, Reading, Cooking, Yoga, Traveling"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </section>
  )
}
