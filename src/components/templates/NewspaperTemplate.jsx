import { forwardRef } from 'react'

const NewspaperTemplate = forwardRef(function NewspaperTemplate({ data, accentColor = '#111827' }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white p-8 print:p-0 max-w-[8.5in] mx-auto font-serif text-sm leading-relaxed">
      <header className="text-center mb-4 pb-2" style={{ borderBottom: `2px solid ${accentColor}` }}>
        <h1 className="text-4xl font-black uppercase tracking-tight" style={{ color: accentColor }}>{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-700 text-xs mt-1 flex flex-wrap justify-center gap-x-2">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
          {personalInfo.linkedin && <span>• {personalInfo.linkedin}</span>}
          {personalInfo.website && <span>• {personalInfo.website}</span>}
        </div>
      </header>

      {summary && (
        <section className="mb-3 text-center">
          <p className="text-gray-700 italic text-xs">{summary}</p>
        </section>
      )}

      <div className="flex gap-4">
        <div className="flex-1">
          {experience.length > 0 && experience.some((e) => e.title || e.company) && (
            <section className="mb-3">
              <h2 className="text-xs font-black uppercase border-b border-gray-400 mb-1">Experience</h2>
              {experience.map((entry) => (
                (entry.title || entry.company) && (
                  <div key={entry.id} className="mb-2">
                    <div className="font-bold text-xs text-gray-900">{entry.title}</div>
                    <div className="text-[10px] text-gray-600 italic">{entry.company} | {entry.startDate}{entry.startDate && (entry.endDate || entry.current) && '–'}{entry.current ? 'Present' : entry.endDate}</div>
                    {entry.bullets.filter(Boolean).length > 0 && (
                      <ul className="list-disc list-inside text-gray-700 text-[11px] mt-0.5">
                        {entry.bullets.filter(Boolean).map((bullet, i) => <li key={i}>{bullet}</li>)}
                      </ul>
                    )}
                  </div>
                )
              ))}
            </section>
          )}

          {projects.length > 0 && projects.some((p) => p.name) && (
            <section className="mb-3">
              <h2 className="text-xs font-black uppercase border-b border-gray-400 mb-1">Projects</h2>
              {projects.map((entry) => (
                entry.name && (
                  <div key={entry.id} className="mb-1">
                    <span className="font-bold text-xs text-gray-900">{entry.name}</span>
                    {entry.description && <p className="text-gray-700 text-[11px]">{entry.description}</p>}
                  </div>
                )
              ))}
            </section>
          )}
        </div>

        <div className="w-[35%] border-l border-gray-300 pl-4">
          {education.length > 0 && education.some((e) => e.degree || e.institution) && (
            <section className="mb-3">
              <h2 className="text-xs font-black uppercase border-b border-gray-400 mb-1">Education</h2>
              {education.map((entry) => (
                (entry.degree || entry.institution) && (
                  <div key={entry.id} className="mb-1">
                    <div className="font-bold text-xs text-gray-900">{entry.degree}</div>
                    <div className="text-[10px] text-gray-600">{entry.institution}</div>
                    <div className="text-[10px] text-gray-500">{entry.startDate}{entry.startDate && entry.endDate && '–'}{entry.endDate}{entry.gpa && ` | ${entry.gpa}`}</div>
                  </div>
                )
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section className="mb-3">
              <h2 className="text-xs font-black uppercase border-b border-gray-400 mb-1">Skills</h2>
              <div className="text-[11px] text-gray-700 space-y-0.5">
                {skills.map((skill, i) => <div key={i}>• {skill}</div>)}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
})

export default NewspaperTemplate
