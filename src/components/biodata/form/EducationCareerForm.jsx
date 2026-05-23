import Input from '../../ui/Input'

export default function EducationCareerForm({ data, onChange }) {
  function update(field, value) {
    onChange({ ...data, [field]: value })
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-900 border-b pb-1">Education & Career</h2>
      <Input label="Highest Degree" value={data.degree} onChange={(e) => update('degree', e.target.value)} placeholder="e.g. MBA - Finance" />
      <Input label="College / University" value={data.college} onChange={(e) => update('college', e.target.value)} />
      <Input label="Occupation" value={data.occupation} onChange={(e) => update('occupation', e.target.value)} />
      <div className="grid grid-cols-2 gap-3">
        <Input label="Company" value={data.company} onChange={(e) => update('company', e.target.value)} />
        <Input label="Annual Income" value={data.income} onChange={(e) => update('income', e.target.value)} placeholder="e.g. 18 LPA" />
      </div>
    </section>
  )
}
