import { forwardRef } from 'react'

const FestiveTemplate = forwardRef(function FestiveTemplate({ data, accentColor = '#dc2626' }, ref) {
  const { personalInfo, religious, education, family, contact, hobbies } = data

  function Section({ title, children }) {
    return (
      <section className="mb-4">
        <h3
          className="text-sm font-bold uppercase tracking-wide text-white px-4 py-1.5 mb-3"
          style={{ backgroundColor: accentColor }}
        >
          {title}
        </h3>
        <div className="px-2">
          {children}
        </div>
      </section>
    )
  }

  function Row({ label, value }) {
    if (!value) return null
    return (
      <div className="flex py-1 border-b border-gray-100 last:border-0">
        <span className="text-xs font-semibold text-gray-700 w-36 flex-shrink-0">{label}</span>
        <span className="text-xs text-gray-900">{value}</span>
      </div>
    )
  }

  return (
    <div ref={ref} className="resume-preview bg-white max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed" style={{ border: `2px solid ${accentColor}` }}>
      {/* Header banner */}
      <div className="text-white text-center py-5 px-6" style={{ backgroundColor: accentColor }}>
        <p className="text-lg font-light tracking-widest mb-1">॥ शुभ विवाह ॥</p>
        {personalInfo.photo && (
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="w-24 h-28 object-cover rounded-lg mx-auto my-3 border-2 border-white/50"
          />
        )}
        <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
        {personalInfo.dob && (
          <p className="text-white/80 text-xs mt-1">{personalInfo.dob}{personalInfo.birthPlace && ` · ${personalInfo.birthPlace}`}</p>
        )}
      </div>

      {/* Yellow accent strip */}
      <div className="h-1.5 w-full" style={{ backgroundColor: '#fbbf24' }} />

      <div className="px-6 py-5">
        {/* Personal Details */}
        <Section title="Personal Details">
          <div className="grid grid-cols-2 gap-x-8">
            <Row label="Height" value={personalInfo.height} />
            <Row label="Complexion" value={personalInfo.complexion} />
            <Row label="Blood Group" value={personalInfo.bloodGroup} />
          </div>
        </Section>

        {(religious.religion || religious.caste) && (
          <Section title="Religious Details">
            <div className="grid grid-cols-2 gap-x-8">
              <Row label="Caste / Religion" value={[religious.caste, religious.religion].filter(Boolean).join(', ')} />
              <Row label="Gotra" value={religious.gotra} />
              <Row label="Rashi" value={religious.rashi} />
            </div>
          </Section>
        )}

        {(education.degree || education.occupation) && (
          <Section title="Education & Career">
            <div className="grid grid-cols-2 gap-x-8">
              <Row label="Education" value={education.degree} />
              <Row label="College" value={education.college} />
              <Row label="Occupation" value={education.occupation} />
              <Row label="Company" value={education.company} />
              <Row label="Income" value={education.income} />
            </div>
          </Section>
        )}

        {(family.fatherName || family.motherName) && (
          <Section title="Family Details">
            <div className="grid grid-cols-2 gap-x-8">
              <Row label="Father" value={family.fatherName && `${family.fatherName}${family.fatherOccupation ? ` (${family.fatherOccupation})` : ''}`} />
              <Row label="Mother" value={family.motherName && `${family.motherName}${family.motherOccupation ? ` (${family.motherOccupation})` : ''}`} />
              <Row label="Brothers" value={family.brothers} />
              <Row label="Sisters" value={family.sisters} />
            </div>
          </Section>
        )}

        {hobbies && (
          <Section title="Hobbies & Interests">
            <p className="text-xs text-gray-700 py-1">{hobbies}</p>
          </Section>
        )}

      </div>

      {/* Contact footer */}
      {(contact.address || contact.city || contact.phone || contact.email) && (
        <div className="text-white py-3 px-6 text-sm" style={{ backgroundColor: accentColor }}>
          <h3 className="font-bold text-xs uppercase mb-2 text-white/80">Contact Details</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-0.5">
            {contact.address && <p>Address: {contact.address}</p>}
            {(contact.city || contact.state) && <p>City: {[contact.city, contact.state].filter(Boolean).join(', ')}</p>}
            {contact.phone && <p>Phone: {contact.phone}</p>}
            {contact.email && <p>Email: {contact.email}</p>}
          </div>
        </div>
      )}
    </div>
  )
})

export default FestiveTemplate
