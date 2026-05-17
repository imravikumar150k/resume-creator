import { forwardRef } from 'react'

const ElegantTemplate = forwardRef(function ElegantTemplate({ data, accentColor = '#be185d' }, ref) {
  const { personalInfo, religious, education, family, contact, hobbies } = data

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
            {personalInfo.complexion && <p><span className="font-semibold">Complexion:</span> {personalInfo.complexion}</p>}
            {personalInfo.bloodGroup && <p><span className="font-semibold">Blood Group:</span> {personalInfo.bloodGroup}</p>}
          </div>
        </section>

        {(religious.religion || religious.caste) && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Religious Details</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
              <p><span className="font-semibold">Caste / Religion:</span> {[religious.caste, religious.religion].filter(Boolean).join(', ')}</p>
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
            </div>
          </section>
        )}

        {hobbies && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Hobbies</h3>
            <p className="text-sm">{hobbies}</p>
          </section>
        )}

      </div>

      {(contact.address || contact.city || contact.phone || contact.email) && (
        <section className="mt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Contact Details</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            {contact.address && <p><span className="font-semibold">Address:</span> {contact.address}</p>}
            {(contact.city || contact.state) && <p><span className="font-semibold">City / State:</span> {[contact.city, contact.state].filter(Boolean).join(', ')}</p>}
            {contact.phone && <p><span className="font-semibold">Phone:</span> {contact.phone}</p>}
            {contact.email && <p><span className="font-semibold">Email:</span> {contact.email}</p>}
          </div>
        </section>
      )}
    </div>
  )
})

export default ElegantTemplate
