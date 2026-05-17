import { forwardRef } from 'react'

const ModernBiodataTemplate = forwardRef(function ModernBiodataTemplate({ data, accentColor = '#4f46e5' }, ref) {
  const { personalInfo, religious, education, family, contact, hobbies, partnerPreferences } = data

  function Section({ title, children }) {
    return (
      <section className="mb-4">
        <h3 className="text-sm font-bold uppercase pb-1 mb-2" style={{ borderBottom: `2px solid ${accentColor}` }}>{title}</h3>
        {children}
      </section>
    )
  }

  function Row({ label, value }) {
    if (!value) return null
    return <p className="text-sm py-0.5"><span className="font-medium text-gray-600">{label}:</span> <span className="text-gray-900">{value}</span></p>
  }

  return (
    <div ref={ref} className="resume-preview bg-white max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed">
      {/* Header */}
      <div className="px-8 py-6 text-white" style={{ backgroundColor: accentColor }}>
        <div className="flex items-center gap-6">
          {personalInfo.photo && (
            <img src={personalInfo.photo} alt={personalInfo.name} className="w-24 h-30 object-cover rounded-lg border-2 border-white/30" />
          )}
          <div>
            <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
            <p className="text-white/80 text-sm mt-1">{personalInfo.dob}{personalInfo.birthPlace && ` • ${personalInfo.birthPlace}`}</p>
          </div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-4">
        <Section title="Personal Details">
          <div className="grid grid-cols-2 gap-x-8">
            <Row label="Height" value={personalInfo.height} />
            <Row label="Weight" value={personalInfo.weight} />
            <Row label="Complexion" value={personalInfo.complexion} />
            <Row label="Blood Group" value={personalInfo.bloodGroup} />
            <Row label="Birth Time" value={personalInfo.birthTime} />
          </div>
        </Section>

        {(religious.religion || religious.caste) && (
          <Section title="Religious Details">
            <div className="grid grid-cols-2 gap-x-8">
              <Row label="Religion" value={religious.religion} />
              <Row label="Caste" value={religious.caste} />
              <Row label="Gotra" value={religious.gotra} />
              <Row label="Nakshatra" value={religious.nakshatra} />
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
              <Row label="Family Type" value={family.familyType} />
              <Row label="Family Status" value={family.familyStatus} />
            </div>
          </Section>
        )}

        {hobbies && <Section title="Hobbies & Interests"><p className="text-sm">{hobbies}</p></Section>}

        {(partnerPreferences.ageRange || partnerPreferences.education) && (
          <Section title="Partner Preferences">
            <div className="grid grid-cols-2 gap-x-8">
              <Row label="Age" value={partnerPreferences.ageRange} />
              <Row label="Height" value={partnerPreferences.heightRange} />
              <Row label="Education" value={partnerPreferences.education} />
              <Row label="Occupation" value={partnerPreferences.occupation} />
              <Row label="Caste" value={partnerPreferences.caste} />
              <Row label="Location" value={partnerPreferences.location} />
            </div>
          </Section>
        )}

        {(contact.phone || contact.email) && (
          <div className="pt-3 text-xs text-gray-500" style={{ borderTop: `1px solid ${accentColor}22` }}>
            {contact.address && `${contact.address}, `}{contact.city}, {contact.state} | {contact.phone} | {contact.email}
          </div>
        )}
      </div>
    </div>
  )
})

export default ModernBiodataTemplate
