import { forwardRef } from 'react'

const ElegantTemplate = forwardRef(function ElegantTemplate({ data, accentColor = '#b45309' }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white p-8 print:p-0 max-w-[8.5in] mx-auto font-serif text-sm leading-relaxed">
      <header className="text-center mb-5 pb-4" style={{ borderBottom: `2px solid ${accentColor}` }}>
        <h1 className="text-3xl font-light tracking-widest text-gray-800 uppercase">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-500 text-xs mt-2 flex flex-wrap justify-center gap-x-4 tracking-wide">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a>}
          {personalInfo.website && <a href={personalInfo.website.startsWith('http') ? personalInfo.website : `https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer">{personalInfo.website}</a>}
        </div>
      </header>

      {summary && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: accentColor }}>Profile</h2>
          <p className="text-gray-700 italic">{summary}</p>
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: accentColor }}>Experience</h2>
          {experience.map((entry) => (
            (entry.title || entry.company) && (
              <div key={entry.id} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-gray-800">{entry.title}</span>
                  <span className="text-xs text-gray-400 italic">
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
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: accentColor }}>Education</h2>
          {education.map((entry) => (
            (entry.degree || entry.institution) && (
              <div key={entry.id} className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-gray-800">{entry.degree}</span>
                  <span className="text-xs text-gray-400 italic">{entry.startDate}{entry.startDate && entry.endDate && ' – '}{entry.endDate}</span>
                </div>
                <div className="text-gray-600 text-xs">{entry.institution}{entry.gpa && ` — ${entry.gpa}`}</div>
              </div>
            )
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: accentColor }}>Skills</h2>
          <p className="text-gray-700 text-xs">{skills.join(' · ')}</p>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: accentColor }}>Projects</h2>
          {projects.map((entry) => (
            entry.name && (
              <div key={entry.id} className="mb-2">
                <span className="font-semibold text-gray-800">{entry.name}</span>
                {entry.link && <a href={entry.link.startsWith('http') ? entry.link : `https://${entry.link}`} target="_blank" rel="noopener noreferrer" className="text-xs ml-2" style={{ color: accentColor }}>{entry.link}</a>}
                {entry.description && <p className="text-gray-700 text-xs">{entry.description}</p>}
              </div>
            )
          ))}
        </section>
      )}
    </div>
  )
})

export default ElegantTemplate
