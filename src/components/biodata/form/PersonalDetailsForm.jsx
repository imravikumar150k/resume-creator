import Input from '../../ui/Input'

export default function PersonalDetailsForm({ data, onChange }) {
  function update(field, value) {
    onChange({ ...data, [field]: value })
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-900 border-b pb-1">Personal Details</h2>
      <Input label="Full Name" value={data.name} onChange={(e) => update('name', e.target.value)} />
      <Input label="Date of Birth" value={data.dob} onChange={(e) => update('dob', e.target.value)} placeholder="e.g. 15 March 1997" />
      <div className="grid grid-cols-2 gap-3">
        <Input label="Birth Time" value={data.birthTime} onChange={(e) => update('birthTime', e.target.value)} placeholder="e.g. 10:30 AM" />
        <Input label="Birth Place" value={data.birthPlace} onChange={(e) => update('birthPlace', e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Height" value={data.height} onChange={(e) => update('height', e.target.value)} placeholder="e.g. 5'4&quot;" />
        <Input label="Weight" value={data.weight} onChange={(e) => update('weight', e.target.value)} placeholder="e.g. 55 kg" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Complexion" value={data.complexion} onChange={(e) => update('complexion', e.target.value)} />
        <Input label="Blood Group" value={data.bloodGroup} onChange={(e) => update('bloodGroup', e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
        <input
          type="text"
          value={data.photo}
          onChange={(e) => update('photo', e.target.value)}
          placeholder="Paste image URL or leave blank"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </section>
  )
}
