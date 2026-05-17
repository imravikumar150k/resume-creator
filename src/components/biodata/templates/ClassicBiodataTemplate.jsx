import { forwardRef } from 'react'

const ClassicBiodataTemplate = forwardRef(function ClassicBiodataTemplate({ data, accentColor = '#1f2937' }, ref) {
  const { personalInfo, religious, education, family, contact, hobbies } = data

  const cellStyle = {
    border: `1px solid ${accentColor}`,
    padding: '4px 8px',
    fontSize: '11px',
  }

  const labelStyle = {
    ...cellStyle,
    fontWeight: '600',
    backgroundColor: `${accentColor}0d`,
    width: '35%',
    color: accentColor,
  }

  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: accentColor,
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '6px 8px',
  }

  function SectionTable({ title, rows }) {
    const filtered = rows.filter(r => r.value)
    if (filtered.length === 0) return null
    return (
      <div className="mb-3">
        <table className="w-full border-collapse" style={{ border: `1px solid ${accentColor}` }}>
          <thead>
            <tr>
              <th colSpan={2} style={headerCellStyle}>{title}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(({ label, value }) => (
              <tr key={label}>
                <td style={labelStyle}>{label}</td>
                <td style={cellStyle}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div ref={ref} className="resume-preview bg-white max-w-[8.5in] mx-auto font-sans text-xs leading-snug" style={{ padding: '1.5rem', border: `2px solid ${accentColor}` }}>
      {/* Document Title */}
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold tracking-widest uppercase" style={{ color: accentColor }}>Biodata</h1>
        <div className="w-full h-px mt-1" style={{ backgroundColor: accentColor }} />
      </div>

      {/* Photo + Name + Personal block */}
      <div className="flex gap-4 mb-3">
        {personalInfo.photo && (
          <div className="flex-shrink-0">
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-24 h-30 object-cover"
              style={{ border: `1px solid ${accentColor}` }}
            />
          </div>
        )}
        <div className="flex-1">
          <table className="w-full border-collapse" style={{ border: `1px solid ${accentColor}` }}>
            <thead>
              <tr>
                <th colSpan={2} style={headerCellStyle}>Personal Information</th>
              </tr>
            </thead>
            <tbody>
              {personalInfo.name && <tr><td style={labelStyle}>Full Name</td><td style={{ ...cellStyle, fontWeight: '600' }}>{personalInfo.name}</td></tr>}
              {personalInfo.dob && <tr><td style={labelStyle}>Date of Birth</td><td style={cellStyle}>{personalInfo.dob}</td></tr>}
              {personalInfo.birthPlace && <tr><td style={labelStyle}>Birth Place</td><td style={cellStyle}>{personalInfo.birthPlace}</td></tr>}
              {personalInfo.height && <tr><td style={labelStyle}>Height</td><td style={cellStyle}>{personalInfo.height}</td></tr>}
              {personalInfo.complexion && <tr><td style={labelStyle}>Complexion</td><td style={cellStyle}>{personalInfo.complexion}</td></tr>}
              {personalInfo.bloodGroup && <tr><td style={labelStyle}>Blood Group</td><td style={cellStyle}>{personalInfo.bloodGroup}</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      {/* Two-column layout for compact sections */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {(religious.religion || religious.caste) && (
          <SectionTable
            title="Religious Details"
            rows={[
              { label: 'Caste / Religion', value: [religious.caste, religious.religion].filter(Boolean).join(', ') },
              { label: 'Gotra', value: religious.gotra },
              { label: 'Rashi', value: religious.rashi },
            ]}
          />
        )}

        {(education.degree || education.occupation) && (
          <SectionTable
            title="Education & Career"
            rows={[
              { label: 'Education', value: education.degree },
              { label: 'College', value: education.college },
              { label: 'Occupation', value: education.occupation },
              { label: 'Company', value: education.company },
              { label: 'Income p.a.', value: education.income },
            ]}
          />
        )}
      </div>

      {(family.fatherName || family.motherName) && (
        <SectionTable
          title="Family Details"
          rows={[
            { label: 'Father\'s Name', value: family.fatherName && `${family.fatherName}${family.fatherOccupation ? ` (${family.fatherOccupation})` : ''}` },
            { label: 'Mother\'s Name', value: family.motherName && `${family.motherName}${family.motherOccupation ? ` (${family.motherOccupation})` : ''}` },
            { label: 'Brothers', value: family.brothers },
            { label: 'Sisters', value: family.sisters },
          ]}
        />
      )}

      {hobbies && (
        <div className="mb-3">
          <table className="w-full border-collapse" style={{ border: `1px solid ${accentColor}` }}>
            <thead>
              <tr><th style={headerCellStyle}>Hobbies &amp; Interests</th></tr>
            </thead>
            <tbody>
              <tr><td style={cellStyle}>{hobbies}</td></tr>
            </tbody>
          </table>
        </div>
      )}


      {/* Contact */}
      {(contact.phone || contact.email) && (
        <table className="w-full border-collapse" style={{ border: `1px solid ${accentColor}` }}>
          <thead>
            <tr><th colSpan={2} style={headerCellStyle}>Contact Details</th></tr>
          </thead>
          <tbody>
            {(contact.address || contact.city || contact.state) && (
              <tr>
                <td style={labelStyle}>Address</td>
                <td style={cellStyle}>{[contact.address, contact.city, contact.state].filter(Boolean).join(', ')}</td>
              </tr>
            )}
            {contact.phone && <tr><td style={labelStyle}>Phone</td><td style={cellStyle}>{contact.phone}</td></tr>}
            {contact.email && <tr><td style={labelStyle}>Email</td><td style={cellStyle}>{contact.email}</td></tr>}
          </tbody>
        </table>
      )}
    </div>
  )
})

export default ClassicBiodataTemplate
