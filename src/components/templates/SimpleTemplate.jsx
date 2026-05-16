import { forwardRef } from 'react'

const SimpleTemplate = forwardRef(function SimpleTemplate({ data }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white p-8 print:p-0 max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed">
      <header className="mb-4">
        <h1 className="text-xl font-bold text-gray-900">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-500 text-xs mt-0.5">
          {[personalInfo.email, personalInfo.phone, personalInfo.location, personalInfo.linkedin, personalInfo.website].filter(Boolean).join(' | ')}
        </div>
      </header>

      {summary && (
        <section className="mb-3">
          <p className="text-gray-700">{summary}</p>
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-3">
          <h2 className="font-bold text-gray-900 mb-1">Experience</h2>
          {experience.map((entry) => (
            (entry.title || entry.company) && (
              <div key={entry.id} className="mb-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">{entry.title}, {entry.company}</span>
                  <span className="text-xs text-gray-500">{entry.startDate}{entry.startDate && (entry.endDate || entry.current) && '–'}{entry.current ? 'Present' : entry.endDate}</span>
                </div>
                {entry.bullets.filter(Boolean).length > 0 && (
                  <ul className="list-disc list-inside text-gray-700 text-xs mt-0.5">
                    {entry.bullets.filter(Boolean).map((bullet, i) => <li key={i}>{bullet}</li>)}
                  </ul>
                )}
              </div>
            )
          ))}
        </section>
      )}

      {education.length > 0 && education.some((e) => e.degree || e.institution) && (
        <section className="mb-3">
          <h2 className="font-bold text-gray-900 mb-1">Education</h2>
          {education.map((entry) => (
            (entry.degree || entry.institution) && (
              <div key={entry.id} className="flex justify-between">
                <span className="text-gray-900">{entry.degree}, {entry.institution}{entry.gpa && ` (${entry.gpa})`}</span>
                <span className="text-xs text-gray-500">{entry.startDate}{entry.startDate && entry.endDate && '–'}{entry.endDate}</span>
              </div>
            )
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-3">
          <h2 className="font-bold text-gray-900 mb-1">Skills</h2>
          <p className="text-gray-700 text-xs">{skills.join(', ')}</p>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-3">
          <h2 className="font-bold text-gray-900 mb-1">Projects</h2>
          {projects.map((entry) => (
            entry.name && (
              <div key={entry.id} className="mb-1">
                <span className="font-medium text-gray-900">{entry.name}</span>
                {entry.description && <span className="text-gray-600 text-xs"> — {entry.description}</span>}
              </div>
            )
          ))}
        </section>
      )}
    </div>
  )
})

export default SimpleTemplate
