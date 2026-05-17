import Input from '../../ui/Input'

export default function FamilyForm({ data, onChange }) {
  function update(field, value) {
    onChange({ ...data, [field]: value })
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-900 border-b pb-1">Family Details</h2>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Father's Name" value={data.fatherName} onChange={(e) => update('fatherName', e.target.value)} />
        <Input label="Father's Occupation" value={data.fatherOccupation} onChange={(e) => update('fatherOccupation', e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Mother's Name" value={data.motherName} onChange={(e) => update('motherName', e.target.value)} />
        <Input label="Mother's Occupation" value={data.motherOccupation} onChange={(e) => update('motherOccupation', e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Brothers" value={data.brothers} onChange={(e) => update('brothers', e.target.value)} placeholder="e.g. 1 Elder (Married)" />
        <Input label="Sisters" value={data.sisters} onChange={(e) => update('sisters', e.target.value)} placeholder="e.g. 1 Younger (Unmarried)" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Family Type" value={data.familyType} onChange={(e) => update('familyType', e.target.value)} placeholder="Joint / Nuclear" />
        <Input label="Family Status" value={data.familyStatus} onChange={(e) => update('familyStatus', e.target.value)} placeholder="e.g. Upper Middle Class" />
      </div>
    </section>
  )
}
