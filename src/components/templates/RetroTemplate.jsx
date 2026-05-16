import { forwardRef } from 'react'

const RetroTemplate = forwardRef(function RetroTemplate({ data }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-amber-50 p-8 print:p-0 max-w-[8.5in] mx-auto font-mono text-sm leading-relaxed">
      <header className="mb-5 pb-3 border-b-2 border-dashed border-amber-800">
        <h1 className="text-2xl font-bold text-amber-900">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-amber-700 text-xs mt-1 flex flex-wrap gap-x-3">
          {personalInfo.email && <span>[{personalInfo.email}]</span>}
          {personalInfo.phone && <span>[{personalInfo.phone}]</span>}
          {personalInfo.location && <span>[{personalInfo.location}]</span>}
          {personalInfo.linkedin && <span>[{personalInfo.linkedin}]</span>}
          {personalInfo.website && <span>[{personalInfo.website}]</span>}
        </div>
      </header>

      {summary && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase text-amber-800 mb-1">{'>'} Summary</h2>
          <p className="text-amber-900">{summary}</p>
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase text-amber-800 mb-2">{'>'} Experience</h2>
          {experience.map((entry) => (
            (entry.title || entry.company) && (
              <div key={entry.id} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-amber-900">{entry.title}</span>
                  <span className="text-xs text-amber-600">
                    {entry.startDate}{entry.startDate && (entry.endDate || entry.current) && ' → '}{entry.current ? 'Present' : entry.endDate}
                  </span>
                </div>
                <div className="text-amber-700 text-xs">@ {entry.company}</div>
                {entry.bullets.filter(Boolean).length > 0 && (
                  <ul className="mt-1 text-amber-900 text-xs space-y-0.5">
                    {entry.bullets.filter(Boolean).map((bullet, i) => <li key={i}>- {bullet}</li>)}
                  </ul>
                )}
              </div>
            )
          ))}
        </section>
      )}

      {education.length > 0 && education.some((e) => e.degree || e.institution) && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase text-amber-800 mb-2">{'>'} Education</h2>
          {education.map((entry) => (
            (entry.degree || entry.institution) && (
              <div key={entry.id} className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-amber-900">{entry.degree}</span>
                  <span className="text-xs text-amber-600">{entry.startDate}{entry.startDate && entry.endDate && ' → '}{entry.endDate}</span>
                </div>
                <div className="text-amber-700 text-xs">@ {entry.institution}{entry.gpa && ` | ${entry.gpa}`}</div>
              </div>
            )
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase text-amber-800 mb-2">{'>'} Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, i) => (
              <span key={i} className="bg-amber-200 text-amber-900 text-xs px-2 py-0.5 border border-amber-400">{skill}</span>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase text-amber-800 mb-2">{'>'} Projects</h2>
          {projects.map((entry) => (
            entry.name && (
              <div key={entry.id} className="mb-2">
                <div className="font-bold text-amber-900">{entry.name}
                  {entry.link && <span className="text-xs text-amber-600 ml-2">[{entry.link}]</span>}
                </div>
                {entry.description && <p className="text-amber-800 text-xs">{entry.description}</p>}
              </div>
            )
          ))}
        </section>
      )}
    </div>
  )
})

export default RetroTemplate
