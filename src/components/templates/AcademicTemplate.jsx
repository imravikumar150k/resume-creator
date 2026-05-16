import { forwardRef } from 'react'

const AcademicTemplate = forwardRef(function AcademicTemplate({ data, accentColor = '#1f2937' }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white p-8 print:p-0 max-w-[8.5in] mx-auto font-sans text-xs leading-snug">
      <header className="text-center mb-3">
        <h1 className="text-xl font-bold text-gray-900">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-600 text-[10px] mt-1">
          {[personalInfo.email, personalInfo.phone, personalInfo.location, personalInfo.linkedin, personalInfo.website]
            .filter(Boolean)
            .join(' | ')}
        </div>
      </header>

      {summary && (
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase pb-0.5 mb-1" style={{ color: accentColor, borderBottom: `1px solid ${accentColor}` }}>Research Interests</h2>
          <p className="text-gray-700">{summary}</p>
        </section>
      )}

      {education.length > 0 && education.some((e) => e.degree || e.institution) && (
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase pb-0.5 mb-1" style={{ color: accentColor, borderBottom: `1px solid ${accentColor}` }}>Education</h2>
          {education.map((entry) => (
            (entry.degree || entry.institution) && (
              <div key={entry.id} className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-gray-900">{entry.degree}</span>
                  <span className="text-[10px] text-gray-500">
                    {entry.startDate}{entry.startDate && entry.endDate && ' — '}{entry.endDate}
                  </span>
                </div>
                <div className="text-gray-600">{entry.institution}{entry.gpa && ` — GPA: ${entry.gpa}`}</div>
              </div>
            )
          ))}
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase pb-0.5 mb-1" style={{ color: accentColor, borderBottom: `1px solid ${accentColor}` }}>Experience</h2>
          {experience.map((entry) => (
            (entry.title || entry.company) && (
              <div key={entry.id} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-gray-900">{entry.title}</span>
                  <span className="text-[10px] text-gray-500">
                    {entry.startDate}{entry.startDate && (entry.endDate || entry.current) && ' — '}{entry.current ? 'Present' : entry.endDate}
                  </span>
                </div>
                <div className="text-gray-600 italic">{entry.company}</div>
                {entry.bullets.filter(Boolean).length > 0 && (
                  <ul className="mt-0.5 text-gray-700 space-y-0">
                    {entry.bullets.filter(Boolean).map((bullet, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="shrink-0">{'\u2014'}</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase pb-0.5 mb-1" style={{ color: accentColor, borderBottom: `1px solid ${accentColor}` }}>Skills</h2>
          <p className="text-gray-700">{skills.join(', ')}</p>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase pb-0.5 mb-1" style={{ color: accentColor, borderBottom: `1px solid ${accentColor}` }}>Publications & Projects</h2>
          {projects.map((entry) => (
            entry.name && (
              <div key={entry.id} className="mb-1.5">
                <div className="font-semibold text-gray-900">
                  {entry.name}
                  {entry.link && <span className="text-[10px] ml-2" style={{ color: accentColor }}>{entry.link}</span>}
                </div>
                {entry.description && <p className="text-gray-700">{entry.description}</p>}
              </div>
            )
          ))}
        </section>
      )}
    </div>
  )
})

export default AcademicTemplate
