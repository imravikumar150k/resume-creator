import { forwardRef } from 'react'

const TraditionalTemplate = forwardRef(function TraditionalTemplate({ data, accentColor = '#92400e' }, ref) {
  const { personalInfo, religious, education, family, contact, hobbies } = data

  return (
    <div ref={ref} className="resume-preview bg-white max-w-[8.5in] mx-auto font-serif text-sm leading-relaxed" style={{ border: `3px double ${accentColor}`, padding: '2rem' }}>
      {/* Header with Om/Shree */}
      <div className="text-center mb-4">
        <p className="text-lg" style={{ color: accentColor }}>॥ श्री गणेशाय नमः ॥</p>
        <h1 className="text-2xl font-bold mt-2" style={{ color: accentColor }}>Biodata</h1>
        <div className="w-24 h-0.5 mx-auto mt-1" style={{ backgroundColor: accentColor }} />
      </div>

      {/* Photo + Name */}
      <div className="flex items-start gap-6 mb-6">
        {personalInfo.photo && (
          <img src={personalInfo.photo} alt={personalInfo.name} className="w-28 h-36 object-cover border-2" style={{ borderColor: accentColor }} />
        )}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900">{personalInfo.name}</h2>
          <table className="mt-2 text-sm">
            <tbody>
              {personalInfo.dob && <tr><td className="font-semibold pr-4 py-0.5" style={{ color: accentColor }}>Date of Birth</td><td>{personalInfo.dob}</td></tr>}
              {personalInfo.birthPlace && <tr><td className="font-semibold pr-4 py-0.5" style={{ color: accentColor }}>Birth Place</td><td>{personalInfo.birthPlace}</td></tr>}
              {personalInfo.height && <tr><td className="font-semibold pr-4 py-0.5" style={{ color: accentColor }}>Height</td><td>{personalInfo.height}</td></tr>}
              {personalInfo.complexion && <tr><td className="font-semibold pr-4 py-0.5" style={{ color: accentColor }}>Complexion</td><td>{personalInfo.complexion}</td></tr>}
              {personalInfo.bloodGroup && <tr><td className="font-semibold pr-4 py-0.5" style={{ color: accentColor }}>Blood Group</td><td>{personalInfo.bloodGroup}</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      {/* Religious Details */}
      {(religious.religion || religious.caste) && (
        <section className="mb-4">
          <h3 className="font-bold text-sm uppercase mb-1 pb-0.5" style={{ color: accentColor, borderBottom: `1px solid ${accentColor}33` }}>Religious Details</h3>
          <table className="text-sm w-full">
            <tbody>
              <tr><td className="font-semibold pr-4 py-0.5 w-1/3">Caste / Religion</td><td>{[religious.caste, religious.religion].filter(Boolean).join(', ')}</td></tr>
              {religious.gotra && <tr><td className="font-semibold pr-4 py-0.5">Gotra</td><td>{religious.gotra}</td></tr>}
              {religious.rashi && <tr><td className="font-semibold pr-4 py-0.5">Rashi</td><td>{religious.rashi}</td></tr>}
            </tbody>
          </table>
        </section>
      )}

      {/* Education & Career */}
      {(education.degree || education.occupation) && (
        <section className="mb-4">
          <h3 className="font-bold text-sm uppercase mb-1 pb-0.5" style={{ color: accentColor, borderBottom: `1px solid ${accentColor}33` }}>Education & Career</h3>
          <table className="text-sm w-full">
            <tbody>
              {education.degree && <tr><td className="font-semibold pr-4 py-0.5 w-1/3">Education</td><td>{education.degree}</td></tr>}
              {education.college && <tr><td className="font-semibold pr-4 py-0.5">College</td><td>{education.college}</td></tr>}
              {education.occupation && <tr><td className="font-semibold pr-4 py-0.5">Occupation</td><td>{education.occupation}</td></tr>}
              {education.company && <tr><td className="font-semibold pr-4 py-0.5">Company</td><td>{education.company}</td></tr>}
              {education.income && <tr><td className="font-semibold pr-4 py-0.5">Income</td><td>{education.income}</td></tr>}
            </tbody>
          </table>
        </section>
      )}

      {/* Family */}
      {(family.fatherName || family.motherName) && (
        <section className="mb-4">
          <h3 className="font-bold text-sm uppercase mb-1 pb-0.5" style={{ color: accentColor, borderBottom: `1px solid ${accentColor}33` }}>Family Details</h3>
          <table className="text-sm w-full">
            <tbody>
              {family.fatherName && <tr><td className="font-semibold pr-4 py-0.5 w-1/3">Father</td><td>{family.fatherName}{family.fatherOccupation && ` (${family.fatherOccupation})`}</td></tr>}
              {family.motherName && <tr><td className="font-semibold pr-4 py-0.5">Mother</td><td>{family.motherName}{family.motherOccupation && ` (${family.motherOccupation})`}</td></tr>}
              {family.brothers && <tr><td className="font-semibold pr-4 py-0.5">Brothers</td><td>{family.brothers}</td></tr>}
              {family.sisters && <tr><td className="font-semibold pr-4 py-0.5">Sisters</td><td>{family.sisters}</td></tr>}
            </tbody>
          </table>
        </section>
      )}

      {/* Hobbies */}
      {hobbies && (
        <section className="mb-4">
          <h3 className="font-bold text-sm uppercase mb-1 pb-0.5" style={{ color: accentColor, borderBottom: `1px solid ${accentColor}33` }}>Hobbies & Interests</h3>
          <p className="text-sm text-gray-800">{hobbies}</p>
        </section>
      )}


      {/* Contact */}
      {(contact.address || contact.city || contact.phone || contact.email) && (
        <section className="mb-4">
          <h3 className="font-bold text-sm uppercase mb-1 pb-0.5" style={{ color: accentColor, borderBottom: `1px solid ${accentColor}33` }}>Contact Details</h3>
          <table className="text-sm w-full">
            <tbody>
              {contact.address && <tr><td className="font-semibold pr-4 py-0.5 w-1/3">Address</td><td>{contact.address}</td></tr>}
              {(contact.city || contact.state) && <tr><td className="font-semibold pr-4 py-0.5">City / State</td><td>{[contact.city, contact.state].filter(Boolean).join(', ')}</td></tr>}
              {contact.phone && <tr><td className="font-semibold pr-4 py-0.5">Phone</td><td>{contact.phone}</td></tr>}
              {contact.email && <tr><td className="font-semibold pr-4 py-0.5">Email</td><td>{contact.email}</td></tr>}
            </tbody>
          </table>
        </section>
      )}
    </div>
  )
})

export default TraditionalTemplate
