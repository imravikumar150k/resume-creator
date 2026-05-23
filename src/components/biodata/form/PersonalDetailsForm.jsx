import { useState } from 'react'
import Input from '../../ui/Input'
import ImageCropper from '../../ui/ImageCropper'

export default function PersonalDetailsForm({ data, onChange }) {
  const [rawImage, setRawImage] = useState(null)

  function update(field, value) {
    onChange({ ...data, [field]: value })
  }

  function handleFileSelect(e) {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setRawImage(reader.result)
      reader.readAsDataURL(file)
    }
    e.target.value = ''
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-900 border-b pb-1">Personal Details</h2>
      <Input label="Full Name" value={data.name} onChange={(e) => update('name', e.target.value)} />
      <Input label="Date of Birth" type="date" value={data.dob} onChange={(e) => update('dob', e.target.value)} />
      <div className="grid grid-cols-2 gap-3">
        <Input label="Birth Place" value={data.birthPlace} onChange={(e) => update('birthPlace', e.target.value)} />
        <Input label="Height" value={data.height} onChange={(e) => update('height', e.target.value)} placeholder="e.g. 5'4&quot;" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Complexion</label>
          <select
            value={data.complexion}
            onChange={(e) => update('complexion', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="Very Fair">Very Fair</option>
            <option value="Fair">Fair</option>
            <option value="Wheatish">Wheatish</option>
            <option value="Wheatish Brown">Wheatish Brown</option>
            <option value="Dark">Dark</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
          <select
            value={data.bloodGroup}
            onChange={(e) => update('bloodGroup', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {data.photo && (
          <div className="mt-2 flex items-center gap-3">
            <img src={data.photo} alt="Preview" className="w-12 h-16 object-cover rounded border" />
            <button type="button" onClick={() => update('photo', '')} className="text-xs text-red-600 hover:text-red-800">Remove</button>
          </div>
        )}
      </div>

      {rawImage && (
        <ImageCropper
          imageSrc={rawImage}
          onCropDone={(croppedImg) => {
            update('photo', croppedImg)
            setRawImage(null)
          }}
          onCancel={() => setRawImage(null)}
        />
      )}
    </section>
  )
}
