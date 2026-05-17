import Input from '../../ui/Input'

export default function ReligiousForm({ data, onChange }) {
  function update(field, value) {
    onChange({ ...data, [field]: value })
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-900 border-b pb-1">Religious Details</h2>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Religion" value={data.religion} onChange={(e) => update('religion', e.target.value)} />
        <Input label="Caste" value={data.caste} onChange={(e) => update('caste', e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Gotra" value={data.gotra} onChange={(e) => update('gotra', e.target.value)} />
        <Input label="Rashi" value={data.rashi} onChange={(e) => update('rashi', e.target.value)} />
      </div>
    </section>
  )
}
