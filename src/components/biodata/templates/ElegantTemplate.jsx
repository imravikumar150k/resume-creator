import { forwardRef } from 'react'

const ElegantTemplate = forwardRef(function ElegantTemplate({ data, accentColor = '#be185d' }, ref) {
  const { personalInfo, religious, education, family, contact, hobbies, partnerPreferences } = data

  return (
    <div ref={ref} className="resume-preview max-w-[8.5in] mx-auto font-serif text-sm leading-relaxed p-8" style={{ backgroundColor: '#fdf8f4', border: `2px solid ${accentColor}44` }}>
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-widest" style={{ color: accentColor }}>— Biodata —</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-1">{personalInfo.name}</h1>
        <div className="flex justify-center gap-4 mt-2 text-xs text-gray-600">
          {personalInfo.dob && <span>{personalInfo.dob}</span>}
          {personalInfo.birthPlace && <span>{personalInfo.birthPlace}</span>}
        </div>
      </div>

      {personalInfo.photo && (
        <div className="flex justify-center mb-6">
          <img src={personalInfo.photo} alt={personalInfo.name} className="w-32 h-40 object-cover rounded-lg shadow-md" style={{ border: `2px solid ${accentColor}55` }} />
        </div>
      )}

      <div className="space-y-4">
        {/* Personal */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Personal Details</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            {personalInfo.height && <p><span className="font-semibold">Height:</span> {personalInfo.height}</p>}
            {personalInfo.weight && <p><span className="font-semibold">Weight:</span> {personalInfo.weight}</p>}
            {personalInfo.complexion && <p><span className="font-semibold">Complexion:</span> {personalInfo.complexion}</p>}
            {personalInfo.bloodGroup && <p><span className="font-semibold">Blood Group:</span> {personalInfo.bloodGroup}</p>}
            {personalInfo.birthTime && <p><span className="font-semibold">Birth Time:</span> {personalInfo.birthTime}</p>}
          </div>
        </section>

        {(religious.religion || religious.caste) && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Religious Details</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
              {religious.religion && <p><span className="font-semibold">Religion:</span> {religious.religion}</p>}
              {religious.caste && <p><span className="font-semibold">Caste:</span> {religious.caste}</p>}
              {religious.gotra && <p><span className="font-semibold">Gotra:</span> {religious.gotra}</p>}
              {religious.rashi && <p><span className="font-semibold">Rashi:</span> {religious.rashi}</p>}
            </div>
          </section>
        )}

        {(education.degree || education.occupation) && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Education & Career</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
              {education.degree && <p><span className="font-semibold">Education:</span> {education.degree}</p>}
              {education.occupation && <p><span className="font-semibold">Occupation:</span> {education.occupation}</p>}
              {education.company && <p><span className="font-semibold">Company:</span> {education.company}</p>}
              {education.income && <p><span className="font-semibold">Income:</span> {education.income}</p>}
            </div>
          </section>
        )}

        {(family.fatherName || family.motherName) && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Family Details</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
              {family.fatherName && <p><span className="font-semibold">Father:</span> {family.fatherName}</p>}
              {family.fatherOccupation && <p><span className="font-semibold">Father&apos;s Work:</span> {family.fatherOccupation}</p>}
              {family.motherName && <p><span className="font-semibold">Mother:</span> {family.motherName}</p>}
              {family.motherOccupation && <p><span className="font-semibold">Mother&apos;s Work:</span> {family.motherOccupation}</p>}
              {family.brothers && <p><span className="font-semibold">Brothers:</span> {family.brothers}</p>}
              {family.sisters && <p><span className="font-semibold">Sisters:</span> {family.sisters}</p>}
              {family.familyType && <p><span className="font-semibold">Family Type:</span> {family.familyType}</p>}
            </div>
          </section>
        )}

        {hobbies && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Hobbies</h3>
            <p className="text-sm">{hobbies}</p>
          </section>
        )}

        {(partnerPreferences.ageRange || partnerPreferences.education) && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Partner Preferences</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
              {partnerPreferences.ageRange && <p><span className="font-semibold">Age:</span> {partnerPreferences.ageRange}</p>}
              {partnerPreferences.heightRange && <p><span className="font-semibold">Height:</span> {partnerPreferences.heightRange}</p>}
              {partnerPreferences.education && <p><span className="font-semibold">Education:</span> {partnerPreferences.education}</p>}
              {partnerPreferences.occupation && <p><span className="font-semibold">Occupation:</span> {partnerPreferences.occupation}</p>}
            </div>
          </section>
        )}
      </div>

      {(contact.phone || contact.email) && (
        <div className="mt-6 pt-3 text-center text-xs text-gray-500" style={{ borderTop: `1px solid ${accentColor}33` }}>
          {contact.phone && <span>{contact.phone}</span>}
          {contact.phone && contact.email && <span> • </span>}
          {contact.email && <span>{contact.email}</span>}
          {contact.city && <span> • {contact.city}, {contact.state}</span>}
        </div>
      )}
    </div>
  )
})

export default ElegantTemplate
