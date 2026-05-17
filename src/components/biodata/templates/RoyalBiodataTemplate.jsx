import { forwardRef } from 'react'

const RoyalBiodataTemplate = forwardRef(function RoyalBiodataTemplate({ data, accentColor = '#d97706' }, ref) {
  const { personalInfo, religious, education, family, contact, hobbies, partnerPreferences } = data

  return (
    <div ref={ref} className="resume-preview max-w-[8.5in] mx-auto font-serif text-sm leading-relaxed bg-gray-900 text-gray-100 p-8">
      <div className="text-center mb-6">
        <p className="text-sm tracking-widest" style={{ color: accentColor }}>✦ ✦ ✦</p>
        <h1 className="text-3xl font-bold mt-2" style={{ color: accentColor }}>{personalInfo.name}</h1>
        <p className="text-gray-400 text-xs mt-1">{personalInfo.dob}{personalInfo.birthPlace && ` • ${personalInfo.birthPlace}`}</p>
        <div className="w-32 h-px mx-auto mt-3" style={{ backgroundColor: accentColor }} />
      </div>

      {personalInfo.photo && (
        <div className="flex justify-center mb-6">
          <img src={personalInfo.photo} alt={personalInfo.name} className="w-28 h-36 object-cover" style={{ border: `2px solid ${accentColor}` }} />
        </div>
      )}

      <div className="space-y-4">
        <section>
          <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color: accentColor }}>Personal</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-0.5 text-sm text-gray-300">
            {personalInfo.height && <p>Height: {personalInfo.height}</p>}
            {personalInfo.weight && <p>Weight: {personalInfo.weight}</p>}
            {personalInfo.complexion && <p>Complexion: {personalInfo.complexion}</p>}
            {personalInfo.bloodGroup && <p>Blood Group: {personalInfo.bloodGroup}</p>}
          </div>
        </section>

        {(religious.religion || religious.caste) && (
          <section>
            <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color: accentColor }}>Religious</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-0.5 text-sm text-gray-300">
              {religious.religion && <p>Religion: {religious.religion}</p>}
              {religious.caste && <p>Caste: {religious.caste}</p>}
              {religious.gotra && <p>Gotra: {religious.gotra}</p>}
              {religious.rashi && <p>Rashi: {religious.rashi}</p>}
            </div>
          </section>
        )}

        {(education.degree || education.occupation) && (
          <section>
            <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color: accentColor }}>Education & Career</h3>
            <div className="text-sm text-gray-300 space-y-0.5">
              {education.degree && <p>{education.degree}{education.college && ` — ${education.college}`}</p>}
              {education.occupation && <p>{education.occupation}{education.company && ` at ${education.company}`}</p>}
              {education.income && <p>Income: {education.income}</p>}
            </div>
          </section>
        )}

        {(family.fatherName || family.motherName) && (
          <section>
            <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color: accentColor }}>Family</h3>
            <div className="text-sm text-gray-300 space-y-0.5">
              {family.fatherName && <p>Father: {family.fatherName}{family.fatherOccupation && ` (${family.fatherOccupation})`}</p>}
              {family.motherName && <p>Mother: {family.motherName}{family.motherOccupation && ` (${family.motherOccupation})`}</p>}
              {family.brothers && <p>Brothers: {family.brothers}</p>}
              {family.sisters && <p>Sisters: {family.sisters}</p>}
              {family.familyType && <p>{family.familyType} family • {family.familyStatus}</p>}
            </div>
          </section>
        )}

        {hobbies && (
          <section>
            <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color: accentColor }}>Hobbies</h3>
            <p className="text-sm text-gray-300">{hobbies}</p>
          </section>
        )}

        {(partnerPreferences.ageRange || partnerPreferences.education) && (
          <section>
            <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color: accentColor }}>Partner Preferences</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-0.5 text-sm text-gray-300">
              {partnerPreferences.ageRange && <p>Age: {partnerPreferences.ageRange}</p>}
              {partnerPreferences.heightRange && <p>Height: {partnerPreferences.heightRange}</p>}
              {partnerPreferences.education && <p>Education: {partnerPreferences.education}</p>}
              {partnerPreferences.occupation && <p>Occupation: {partnerPreferences.occupation}</p>}
            </div>
          </section>
        )}
      </div>

      {(contact.phone || contact.email) && (
        <div className="mt-6 pt-3 text-center text-xs text-gray-500" style={{ borderTop: `1px solid ${accentColor}44` }}>
          {contact.phone}{contact.email && ` • ${contact.email}`}{contact.city && ` • ${contact.city}, ${contact.state}`}
        </div>
      )}
    </div>
  )
})

export default RoyalBiodataTemplate
