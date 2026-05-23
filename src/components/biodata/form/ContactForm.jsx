import Input from '../../ui/Input'

export default function ContactForm({ data, onChange }) {
  function update(field, value) {
    onChange({ ...data, [field]: value })
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-900 border-b pb-1">Contact Details</h2>
      <Input label="Address" value={data.address} onChange={(e) => update('address', e.target.value)} />
      <div className="grid grid-cols-2 gap-3">
        <Input label="City" value={data.city} onChange={(e) => update('city', e.target.value)} />
        <Input label="State" value={data.state} onChange={(e) => update('state', e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Phone" value={data.phone} onChange={(e) => update('phone', e.target.value)} />
        <Input label="Email" value={data.email} onChange={(e) => update('email', e.target.value)} />
      </div>
    </section>
  )
}
