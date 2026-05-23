import { forwardRef } from 'react'

const SlateTemplate = forwardRef(function SlateTemplate({ data, accentColor = '#0ea5e9' }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-slate-900 p-8 print:p-0 max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed text-slate-200">
      <header className="mb-5 pb-3 border-b border-slate-600">
        <h1 className="text-2xl font-bold text-white">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-slate-400 text-xs mt-1 flex flex-wrap gap-x-3">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a>}
          {personalInfo.website && <a href={personalInfo.website.startsWith('http') ? personalInfo.website : `https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer">{personalInfo.website}</a>}
        </div>
      </header>

      {summary && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-1" style={{ color: accentColor }}>Summary</h2>
          <p className="text-slate-300">{summary}</p>
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-2" style={{ color: accentColor }}>Experience</h2>
          {experience.map((entry) => (
            (entry.title || entry.company) && (
              <div key={entry.id} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-white">{entry.title}</span>
                  <span className="text-xs text-slate-500">
                    {entry.startDate}{entry.startDate && (entry.endDate || entry.current) && ' — '}{entry.current ? 'Present' : entry.endDate}
                  </span>
                </div>
                <div className="text-slate-400 text-xs">{entry.company}</div>
                {entry.bullets.filter(Boolean).length > 0 && (
                  <ul className="list-disc list-inside mt-1 text-slate-300 text-xs">
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
          <h2 className="text-sm font-bold uppercase mb-2" style={{ color: accentColor }}>Education</h2>
          {education.map((entry) => (
            (entry.degree || entry.institution) && (
              <div key={entry.id} className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-white">{entry.degree}</span>
                  <span className="text-xs text-slate-500">{entry.startDate}{entry.startDate && entry.endDate && ' — '}{entry.endDate}</span>
                </div>
                <div className="text-slate-400 text-xs">{entry.institution}{entry.gpa && ` — ${entry.gpa}`}</div>
              </div>
            )
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-2" style={{ color: accentColor }}>Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, i) => (
              <span key={i} className="bg-slate-700 text-xs px-2 py-0.5 rounded" style={{ color: accentColor }}>{skill}</span>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-2" style={{ color: accentColor }}>Projects</h2>
          {projects.map((entry) => (
            entry.name && (
              <div key={entry.id} className="mb-2">
                <div className="font-semibold text-white">{entry.name}
                  {entry.link && <a href={entry.link.startsWith('http') ? entry.link : `https://${entry.link}`} target="_blank" rel="noopener noreferrer" className="text-xs ml-2" style={{ color: accentColor }}>{entry.link}</a>}
                </div>
                {entry.description && <p className="text-slate-300 text-xs">{entry.description}</p>}
              </div>
            )
          ))}
        </section>
      )}
    </div>
  )
})

export default SlateTemplate
