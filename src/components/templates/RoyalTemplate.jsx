import { forwardRef } from 'react'

const RoyalTemplate = forwardRef(function RoyalTemplate({ data }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-[#1a1a2e] p-8 print:p-0 max-w-[8.5in] mx-auto font-serif text-sm leading-relaxed text-gray-200">
      <header className="text-center mb-5 pb-3 border-b border-amber-500/50">
        <h1 className="text-3xl font-bold text-amber-400 tracking-wide">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-400 text-xs mt-2 flex flex-wrap justify-center gap-x-4">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      {summary && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">Profile</h2>
          <p className="text-gray-300 italic">{summary}</p>
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">Experience</h2>
          {experience.map((entry) => (
            (entry.title || entry.company) && (
              <div key={entry.id} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-amber-200">{entry.title}</span>
                  <span className="text-xs text-gray-500">
                    {entry.startDate}{entry.startDate && (entry.endDate || entry.current) && ' – '}{entry.current ? 'Present' : entry.endDate}
                  </span>
                </div>
                <div className="text-gray-400 text-xs">{entry.company}</div>
                {entry.bullets.filter(Boolean).length > 0 && (
                  <ul className="list-disc list-inside mt-1 text-gray-300 text-xs">
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
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">Education</h2>
          {education.map((entry) => (
            (entry.degree || entry.institution) && (
              <div key={entry.id} className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-amber-200">{entry.degree}</span>
                  <span className="text-xs text-gray-500">{entry.startDate}{entry.startDate && entry.endDate && ' – '}{entry.endDate}</span>
                </div>
                <div className="text-gray-400 text-xs">{entry.institution}{entry.gpa && ` — ${entry.gpa}`}</div>
              </div>
            )
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, i) => (
              <span key={i} className="bg-amber-900/30 text-amber-300 text-xs px-2 py-0.5 border border-amber-700/50 rounded">{skill}</span>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">Projects</h2>
          {projects.map((entry) => (
            entry.name && (
              <div key={entry.id} className="mb-2">
                <div className="font-semibold text-amber-200">{entry.name}
                  {entry.link && <span className="text-xs text-amber-500 ml-2">{entry.link}</span>}
                </div>
                {entry.description && <p className="text-gray-300 text-xs">{entry.description}</p>}
              </div>
            )
          ))}
        </section>
      )}
    </div>
  )
})

export default RoyalTemplate
