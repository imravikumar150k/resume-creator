import { forwardRef } from 'react'

const GeometricTemplate = forwardRef(function GeometricTemplate({ data, accentColor = '#ea580c' }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white p-8 print:p-0 max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed">
      <header className="mb-5 relative">
        <div className="absolute top-0 left-0 w-16 h-16 opacity-20 rotate-45 -translate-x-4 -translate-y-4" style={{ backgroundColor: accentColor }}></div>
        <h1 className="text-2xl font-bold text-gray-900 relative">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-500 text-xs mt-1 flex flex-wrap gap-x-3 relative">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
        <div className="h-1 mt-3" style={{ background: `linear-gradient(to right, ${accentColor}, ${accentColor}66)` }}></div>
      </header>

      {summary && (
        <section className="mb-4">
          <h2 className="text-sm font-bold mb-1" style={{ color: accentColor }}>Summary</h2>
          <p className="text-gray-700">{summary}</p>
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-4">
          <h2 className="text-sm font-bold mb-2" style={{ color: accentColor }}>Experience</h2>
          {experience.map((entry) => (
            (entry.title || entry.company) && (
              <div key={entry.id} className="mb-3 pl-3" style={{ borderLeft: `4px solid ${accentColor}33` }}>
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-gray-900">{entry.title}</span>
                  <span className="text-xs text-gray-500">
                    {entry.startDate}{entry.startDate && (entry.endDate || entry.current) && ' – '}{entry.current ? 'Present' : entry.endDate}
                  </span>
                </div>
                <div className="text-gray-600 text-xs">{entry.company}</div>
                {entry.bullets.filter(Boolean).length > 0 && (
                  <ul className="list-disc list-inside mt-1 text-gray-700 text-xs">
                    {entry.bullets.filter(Boolean).map((bullet, i) => <li key={i}>{bullet}</li>)}
                  </ul>
                )}
              </div>
            )
          ))}
        </section>
      )}

      {education.length > 0 && education.some((e) => e.degree || e.institution) && (
        <section className="mb-4">
          <h2 className="text-sm font-bold mb-2" style={{ color: accentColor }}>Education</h2>
          {education.map((entry) => (
            (entry.degree || entry.institution) && (
              <div key={entry.id} className="mb-2 pl-3" style={{ borderLeft: `4px solid ${accentColor}33` }}>
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-gray-900">{entry.degree}</span>
                  <span className="text-xs text-gray-500">{entry.startDate}{entry.startDate && entry.endDate && ' – '}{entry.endDate}</span>
                </div>
                <div className="text-gray-600 text-xs">{entry.institution}{entry.gpa && ` — ${entry.gpa}`}</div>
              </div>
            )
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-bold mb-2" style={{ color: accentColor }}>Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, i) => (
              <span key={i} className="text-xs px-2 py-0.5" style={{ backgroundColor: `${accentColor}1a`, color: accentColor, border: `1px solid ${accentColor}33` }}>{skill}</span>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-4">
          <h2 className="text-sm font-bold mb-2" style={{ color: accentColor }}>Projects</h2>
          {projects.map((entry) => (
            entry.name && (
              <div key={entry.id} className="mb-2 pl-3" style={{ borderLeft: `4px solid ${accentColor}33` }}>
                <div className="font-semibold text-gray-900">{entry.name}
                  {entry.link && <span className="text-xs ml-2" style={{ color: accentColor }}>{entry.link}</span>}
                </div>
                {entry.description && <p className="text-gray-700 text-xs">{entry.description}</p>}
              </div>
            )
          ))}
        </section>
      )}
    </div>
  )
})

export default GeometricTemplate
