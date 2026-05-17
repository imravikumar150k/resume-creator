import { forwardRef } from 'react'

const MinimalistBiodataTemplate = forwardRef(function MinimalistBiodataTemplate({ data, accentColor = '#6b7280' }, ref) {
  const { personalInfo, religious, education, family, contact, hobbies } = data

  function Section({ title, children }) {
    return (
      <section className="mb-8">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accentColor }}>{title}</h3>
        {children}
      </section>
    )
  }

  function Row({ label, value }) {
    if (!value) return null
    return (
      <div className="flex py-1.5">
        <span className="text-xs text-gray-400 w-36 flex-shrink-0">{label}</span>
        <span className="text-xs text-gray-800">{value}</span>
      </div>
    )
  }

  return (
    <div ref={ref} className="resume-preview bg-white max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed" style={{ padding: '3rem' }}>
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-start gap-8">
          {personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-20 h-24 object-cover grayscale"
            />
          )}
          <div>
            <h1 className="text-3xl font-light text-gray-900 tracking-tight">{personalInfo.name}</h1>
            <p className="text-xs text-gray-400 mt-2 tracking-wide uppercase">Biodata</p>
            {personalInfo.dob && (
              <p className="text-xs text-gray-500 mt-3">{personalInfo.dob}{personalInfo.birthPlace && ` · ${personalInfo.birthPlace}`}</p>
            )}
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <Section title="Personal">
        <div className="grid grid-cols-2 gap-x-12">
          <Row label="Height" value={personalInfo.height} />
          <Row label="Complexion" value={personalInfo.complexion} />
          <Row label="Blood Group" value={personalInfo.bloodGroup} />
        </div>
      </Section>

      {(religious.religion || religious.caste) && (
        <Section title="Religious">
          <div className="grid grid-cols-2 gap-x-12">
            <Row label="Caste / Religion" value={[religious.caste, religious.religion].filter(Boolean).join(', ')} />
            <Row label="Gotra" value={religious.gotra} />
            <Row label="Rashi" value={religious.rashi} />
          </div>
        </Section>
      )}

      {(education.degree || education.occupation) && (
        <Section title="Education & Career">
          <div className="grid grid-cols-2 gap-x-12">
            <Row label="Education" value={education.degree} />
            <Row label="College" value={education.college} />
            <Row label="Occupation" value={education.occupation} />
            <Row label="Company" value={education.company} />
            <Row label="Income" value={education.income} />
          </div>
        </Section>
      )}

      {(family.fatherName || family.motherName) && (
        <Section title="Family">
          <div className="grid grid-cols-2 gap-x-12">
            <Row label="Father" value={family.fatherName && `${family.fatherName}${family.fatherOccupation ? ` (${family.fatherOccupation})` : ''}`} />
            <Row label="Mother" value={family.motherName && `${family.motherName}${family.motherOccupation ? ` (${family.motherOccupation})` : ''}`} />
            <Row label="Brothers" value={family.brothers} />
            <Row label="Sisters" value={family.sisters} />
          </div>
        </Section>
      )}

      {hobbies && (
        <Section title="Hobbies">
          <p className="text-xs text-gray-600">{hobbies}</p>
        </Section>
      )}


      {/* Contact */}
      {(contact.address || contact.city || contact.phone || contact.email) && (
        <section className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accentColor }}>Contact</h3>
          <div className="text-sm text-gray-700 space-y-1">
            {contact.address && <p>{contact.address}</p>}
            {(contact.city || contact.state) && <p>{[contact.city, contact.state].filter(Boolean).join(', ')}</p>}
            {contact.phone && <p>{contact.phone}</p>}
            {contact.email && <p>{contact.email}</p>}
          </div>
        </section>
      )}
    </div>
  )
})

export default MinimalistBiodataTemplate
