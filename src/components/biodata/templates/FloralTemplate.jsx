import { forwardRef } from 'react'

const FloralTemplate = forwardRef(function FloralTemplate({ data, accentColor = '#ec4899' }, ref) {
  const { personalInfo, religious, education, family, contact, hobbies } = data

  const sectionBg = `${accentColor}15`
  const dividerColor = `${accentColor}40`

  function Section({ title, children }) {
    return (
      <section className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <span style={{ color: accentColor }} className="text-base">✿</span>
          <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: accentColor }}>{title}</h3>
          <span style={{ color: accentColor }} className="text-base">✿</span>
        </div>
        <div className="rounded-2xl px-5 py-4" style={{ backgroundColor: sectionBg }}>
          {children}
        </div>
      </section>
    )
  }

  function Row({ label, value }) {
    if (!value) return null
    return (
      <div className="flex py-1">
        <span className="text-xs font-semibold w-32 flex-shrink-0" style={{ color: accentColor }}>{label}</span>
        <span className="text-xs text-gray-700">{value}</span>
      </div>
    )
  }

  return (
    <div ref={ref} className="resume-preview bg-white max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed" style={{ padding: '2rem' }}>
      {/* Decorative top border */}
      <div className="w-full h-1 rounded-full mb-6" style={{ background: `linear-gradient(to right, ${accentColor}33, ${accentColor}, ${accentColor}33)` }} />

      {/* Header - Photo/Name left, Contact right */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-start gap-4">
          {personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-28 h-32 object-cover rounded-full border-4"
              style={{ borderColor: accentColor }}
            />
          )}
          <div>
            <p className="text-base mb-1" style={{ color: accentColor }}>✿ ✦ ✿</p>
            <h1 className="text-2xl font-bold text-gray-800">{personalInfo.name}</h1>
            {personalInfo.dob && (
              <p className="text-xs mt-1 text-gray-500">{personalInfo.dob}{personalInfo.birthPlace && ` · ${personalInfo.birthPlace}`}</p>
            )}
          </div>
        </div>

        {(contact.phone || contact.email || contact.address || contact.city) && (
          <div className="text-left text-xs text-gray-700">
            {contact.phone && <p style={{ color: accentColor }} className="font-semibold">{contact.phone}</p>}
            {contact.email && <p>{contact.email}</p>}
            {contact.address && <p>{contact.address}</p>}
            {(contact.city || contact.state) && <p>{[contact.city, contact.state].filter(Boolean).join(', ')}</p>}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px" style={{ backgroundColor: dividerColor }} />
        <span className="text-xs" style={{ color: accentColor }}>✿</span>
        <div className="flex-1 h-px" style={{ backgroundColor: dividerColor }} />
      </div>

      {/* Personal Details */}
      <Section title="Personal Details">
        <div className="grid grid-cols-2 gap-x-6">
          <Row label="Height" value={personalInfo.height} />
          <Row label="Complexion" value={personalInfo.complexion} />
          <Row label="Blood Group" value={personalInfo.bloodGroup} />
        </div>
      </Section>

      {(religious.religion || religious.caste) && (
        <Section title="Religious Details">
          <div className="grid grid-cols-2 gap-x-6">
            <Row label="Caste / Religion" value={[religious.caste, religious.religion].filter(Boolean).join(', ')} />

            <Row label="Gotra" value={religious.gotra} />
            <Row label="Rashi" value={religious.rashi} />
          </div>
        </Section>
      )}

      {(education.degree || education.occupation) && (
        <Section title="Education & Career">
          <div className="grid grid-cols-2 gap-x-6">
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
          <div className="grid grid-cols-2 gap-x-6">
            <Row label="Father" value={family.fatherName && `${family.fatherName}${family.fatherOccupation ? ` (${family.fatherOccupation})` : ''}`} />
            <Row label="Mother" value={family.motherName && `${family.motherName}${family.motherOccupation ? ` (${family.motherOccupation})` : ''}`} />
            <Row label="Brothers" value={family.brothers} />
            <Row label="Sisters" value={family.sisters} />
          </div>
        </Section>
      )}

      {hobbies && (
        <Section title="Hobbies & Interests">
          <p className="text-xs text-gray-700">{hobbies}</p>
        </Section>
      )}



      {/* Decorative bottom border */}
      <div className="w-full h-1 rounded-full mt-6" style={{ background: `linear-gradient(to right, ${accentColor}33, ${accentColor}, ${accentColor}33)` }} />
    </div>
  )
})

export default FloralTemplate
