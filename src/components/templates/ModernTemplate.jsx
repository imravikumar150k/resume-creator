import { forwardRef } from 'react'

const ModernTemplate = forwardRef(function ModernTemplate({ data }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white p-8 print:p-0 max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-600 text-xs mt-2 flex flex-wrap gap-x-3">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      {summary && (
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase text-gray-800 border-b-2 border-blue-600 pb-1 mb-2">Summary</h2>
          <p className="text-gray-700">{summary}</p>
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase text-gray-800 border-b-2 border-blue-600 pb-1 mb-2">Experience</h2>
          {experience.map((entry) => (
            (entry.title || entry.company) && (
              <div key={entry.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-gray-900">{entry.title}</span>
                  <span className="text-xs text-gray-500">
                    {entry.startDate}{entry.startDate && (entry.endDate || entry.current) && ' — '}{entry.current ? 'Present' : entry.endDate}
                  </span>
                </div>
                <div className="text-gray-600">{entry.company}</div>
                {entry.bullets.filter(Boolean).length > 0 && (
                  <ul className="mt-1 text-gray-700 space-y-0.5">
                    {entry.bullets.filter(Boolean).map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
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

      {education.length > 0 && education.some((e) => e.degree || e.institution) && (
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase text-gray-800 border-b-2 border-blue-600 pb-1 mb-2">Education</h2>
          {education.map((entry) => (
            (entry.degree || entry.institution) && (
              <div key={entry.id} className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-gray-900">{entry.degree}</span>
                  <span className="text-xs text-gray-500">
                    {entry.startDate}{entry.startDate && entry.endDate && ' — '}{entry.endDate}
                  </span>
                </div>
                <div className="text-gray-600">{entry.institution}{entry.gpa && ` — GPA: ${entry.gpa}`}</div>
              </div>
            )
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase text-gray-800 border-b-2 border-blue-600 pb-1 mb-2">Skills</h2>
          <p className="text-gray-700">{skills.join(' \u2022 ')}</p>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase text-gray-800 border-b-2 border-blue-600 pb-1 mb-2">Projects</h2>
          {projects.map((entry) => (
            entry.name && (
              <div key={entry.id} className="mb-2">
                <div className="font-semibold text-gray-900">
                  {entry.name}
                  {entry.link && <span className="text-xs text-blue-600 ml-2">{entry.link}</span>}
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

export default ModernTemplate
