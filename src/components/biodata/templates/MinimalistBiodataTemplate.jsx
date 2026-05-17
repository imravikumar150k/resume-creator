import { forwardRef } from 'react'

const MinimalistBiodataTemplate = forwardRef(function MinimalistBiodataTemplate({ data, accentColor = '#6b7280' }, ref) {
  const { personalInfo, religious, education, family, contact, hobbies, partnerPreferences } = data

  function Section({ title, children }) {
    return (
      <section className="mb-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{title}</h3>
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
          <Row label="Weight" value={personalInfo.weight} />
          <Row label="Complexion" value={personalInfo.complexion} />
          <Row label="Blood Group" value={personalInfo.bloodGroup} />
          <Row label="Birth Time" value={personalInfo.birthTime} />
        </div>
      </Section>

      {(religious.religion || religious.caste) && (
        <Section title="Religious">
          <div className="grid grid-cols-2 gap-x-12">
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
            <Row label="Family Type" value={family.familyType} />
            <Row label="Family Status" value={family.familyStatus} />
          </div>
        </Section>
      )}

      {hobbies && (
        <Section title="Hobbies">
          <p className="text-xs text-gray-600">{hobbies}</p>
        </Section>
      )}

      {(partnerPreferences.ageRange || partnerPreferences.education) && (
        <Section title="Partner Preferences">
          <div className="grid grid-cols-2 gap-x-12">
            <Row label="Age Range" value={partnerPreferences.ageRange} />
            <Row label="Height Range" value={partnerPreferences.heightRange} />
            <Row label="Education" value={partnerPreferences.education} />
            <Row label="Occupation" value={partnerPreferences.occupation} />
            <Row label="Caste" value={partnerPreferences.caste} />
            <Row label="Location" value={partnerPreferences.location} />
          </div>
        </Section>
      )}

      {/* Contact */}
      {(contact.phone || contact.email) && (
        <div className="pt-6 mt-2 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            {contact.address && `${contact.address}, `}{contact.city && `${contact.city}, `}{contact.state}
            {contact.phone && ` · ${contact.phone}`}{contact.email && ` · ${contact.email}`}
          </p>
        </div>
      )}
    </div>
  )
})

export default MinimalistBiodataTemplate
