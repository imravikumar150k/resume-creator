import Input from '../../ui/Input'

export default function PartnerPreferencesForm({ data, onChange }) {
  function update(field, value) {
    onChange({ ...data, [field]: value })
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-900 border-b pb-1">Partner Preferences</h2>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Age Range" value={data.ageRange} onChange={(e) => update('ageRange', e.target.value)} placeholder="e.g. 28-33 years" />
        <Input label="Height Range" value={data.heightRange} onChange={(e) => update('heightRange', e.target.value)} placeholder="e.g. 5'8&quot; - 6'2&quot;" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Education" value={data.education} onChange={(e) => update('education', e.target.value)} placeholder="e.g. Graduate / Post-Graduate" />
        <Input label="Occupation" value={data.occupation} onChange={(e) => update('occupation', e.target.value)} placeholder="e.g. Well settled professional" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Caste Preference" value={data.caste} onChange={(e) => update('caste', e.target.value)} />
        <Input label="Location Preference" value={data.location} onChange={(e) => update('location', e.target.value)} />
      </div>
    </section>
  )
}
