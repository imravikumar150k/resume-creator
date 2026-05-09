import Input from '../ui/Input'

export default function PersonalInfoForm({ data, onChange }) {
  function update(field, value) {
    onChange({ ...data, [field]: value })
  }

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
      <Input label="Full Name" id="name" value={data.name} onChange={(e) => update('name', e.target.value)} />
      <Input label="Email" id="email" type="email" value={data.email} onChange={(e) => update('email', e.target.value)} />
      <Input label="Phone" id="phone" type="tel" value={data.phone} onChange={(e) => update('phone', e.target.value)} />
      <Input label="Location" id="location" value={data.location} onChange={(e) => update('location', e.target.value)} />
      <Input label="LinkedIn URL" id="linkedin" type="url" value={data.linkedin} onChange={(e) => update('linkedin', e.target.value)} />
      <Input label="Portfolio/Website" id="website" type="url" value={data.website} onChange={(e) => update('website', e.target.value)} />
    </div>
  )
}
