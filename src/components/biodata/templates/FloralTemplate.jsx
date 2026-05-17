import { forwardRef } from 'react'

const FloralTemplate = forwardRef(function FloralTemplate({ data, accentColor = '#ec4899' }, ref) {
  const { personalInfo, religious, education, family, contact, hobbies, partnerPreferences } = data

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

      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-base mb-2" style={{ color: accentColor }}>✿ ✦ ✿ ✦ ✿</p>
        {personalInfo.photo && (
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="w-28 h-32 object-cover rounded-full mx-auto mb-3 border-4"
            style={{ borderColor: accentColor }}
          />
        )}
        <h1 className="text-2xl font-bold text-gray-800">{personalInfo.name}</h1>
        {personalInfo.dob && (
          <p className="text-xs mt-1 text-gray-500">{personalInfo.dob}{personalInfo.birthPlace && ` · ${personalInfo.birthPlace}`}</p>
        )}
        <p className="text-base mt-2" style={{ color: accentColor }}>✿ ✦ ✿ ✦ ✿</p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px" style={{ backgroundColor: dividerColor }} />
        <span className="text-xs" style={{ color: accentColor }}>· · ·</span>
        <div className="flex-1 h-px" style={{ backgroundColor: dividerColor }} />
      </div>

      {/* Personal Details */}
      <Section title="Personal Details">
        <div className="grid grid-cols-2 gap-x-6">
          <Row label="Height" value={personalInfo.height} />
          <Row label="Weight" value={personalInfo.weight} />
          <Row label="Complexion" value={personalInfo.complexion} />
          <Row label="Blood Group" value={personalInfo.bloodGroup} />
          <Row label="Birth Time" value={personalInfo.birthTime} />
        </div>
      </Section>

      {(religious.religion || religious.caste) && (
        <Section title="Religious Details">
          <div className="grid grid-cols-2 gap-x-6">
            <Row label="Religion" value={religious.religion} />
            <Row label="Caste" value={religious.caste} />
            <Row label="Sub-Caste" value={religious.subCaste} />
            <Row label="Gotra" value={religious.gotra} />
            <Row label="Nakshatra" value={religious.nakshatra} />
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
            <Row label="Family Type" value={family.familyType} />
            <Row label="Family Status" value={family.familyStatus} />
          </div>
        </Section>
      )}

      {hobbies && (
        <Section title="Hobbies & Interests">
          <p className="text-xs text-gray-700">{hobbies}</p>
        </Section>
      )}

      {(partnerPreferences.ageRange || partnerPreferences.education) && (
        <Section title="Partner Preferences">
          <div className="grid grid-cols-2 gap-x-6">
            <Row label="Age Range" value={partnerPreferences.ageRange} />
            <Row label="Height Range" value={partnerPreferences.heightRange} />
            <Row label="Education" value={partnerPreferences.education} />
            <Row label="Occupation" value={partnerPreferences.occupation} />
            <Row label="Caste" value={partnerPreferences.caste} />
            <Row label="Location" value={partnerPreferences.location} />
          </div>
        </Section>
      )}

      {/* Contact Footer */}
      {(contact.phone || contact.email) && (
        <div className="mt-4 rounded-2xl px-5 py-3 text-center" style={{ backgroundColor: sectionBg }}>
          <p className="text-xs text-gray-600">
            {contact.address && `${contact.address}, `}{contact.city && `${contact.city}, `}{contact.state}
          </p>
          <p className="text-xs mt-1" style={{ color: accentColor }}>
            {contact.phone && contact.phone}{contact.email && ` · ${contact.email}`}
          </p>
        </div>
      )}

      {/* Decorative bottom border */}
      <div className="w-full h-1 rounded-full mt-6" style={{ background: `linear-gradient(to right, ${accentColor}33, ${accentColor}, ${accentColor}33)` }} />
    </div>
  )
})

export default FloralTemplate
