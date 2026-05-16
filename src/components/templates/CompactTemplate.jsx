import { forwardRef } from 'react'

const CompactTemplate = forwardRef(function CompactTemplate({ data, accentColor = '#4b5563' }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white p-8 print:p-0 max-w-[8.5in] mx-auto font-sans text-xs leading-snug">
      <header className="mb-3 pb-2 border-b border-gray-400">
        <h1 className="text-xl font-bold text-gray-900">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-600 text-[10px] mt-0.5 flex flex-wrap gap-x-3">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      {summary && (
        <section className="mb-2">
          <p className="text-gray-700">{summary}</p>
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-2">
          <h2 className="text-[10px] font-bold uppercase mb-1" style={{ color: accentColor }}>Experience</h2>
          {experience.map((entry) => (
            (entry.title || entry.company) && (
              <div key={entry.id} className="mb-2">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-900">{entry.title} <span className="font-normal text-gray-600">at {entry.company}</span></span>
                  <span className="text-[10px] text-gray-400">{entry.startDate}{entry.startDate && (entry.endDate || entry.current) && '–'}{entry.current ? 'Present' : entry.endDate}</span>
                </div>
                {entry.bullets.filter(Boolean).length > 0 && (
                  <ul className="list-disc list-inside text-gray-700 mt-0.5">
                    {entry.bullets.filter(Boolean).map((bullet, i) => <li key={i}>{bullet}</li>)}
                  </ul>
                )}
              </div>
            )
          ))}
        </section>
      )}

      {education.length > 0 && education.some((e) => e.degree || e.institution) && (
        <section className="mb-2">
          <h2 className="text-[10px] font-bold uppercase mb-1" style={{ color: accentColor }}>Education</h2>
          {education.map((entry) => (
            (entry.degree || entry.institution) && (
              <div key={entry.id} className="flex justify-between">
                <span><span className="font-bold text-gray-900">{entry.degree}</span> — {entry.institution}{entry.gpa && ` (${entry.gpa})`}</span>
                <span className="text-[10px] text-gray-400">{entry.startDate}{entry.startDate && entry.endDate && '–'}{entry.endDate}</span>
              </div>
            )
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-2">
          <h2 className="text-[10px] font-bold uppercase mb-1" style={{ color: accentColor }}>Skills</h2>
          <p className="text-gray-700">{skills.join(', ')}</p>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-2">
          <h2 className="text-[10px] font-bold uppercase mb-1" style={{ color: accentColor }}>Projects</h2>
          {projects.map((entry) => (
            entry.name && (
              <div key={entry.id} className="mb-1">
                <span className="font-bold text-gray-900">{entry.name}</span>
                {entry.link && <span className="text-[10px] ml-1" style={{ color: accentColor }}>{entry.link}</span>}
                {entry.description && <span className="text-gray-600 ml-1">— {entry.description}</span>}
              </div>
            )
          ))}
        </section>
      )}
    </div>
  )
})

export default CompactTemplate
