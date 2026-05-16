import { forwardRef } from 'react'

const TechTemplate = forwardRef(function TechTemplate({ data, accentColor = '#6b7280' }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed">
      <header className="bg-gray-50 px-8 py-5">
        <h1 className="text-2xl font-bold text-gray-900">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-600 text-xs mt-1 flex flex-wrap gap-x-3">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      <div className="px-8 py-6">
        {summary && (
          <section className="mb-5">
            <h2 className="font-mono text-sm font-bold text-gray-700 mb-2">Summary</h2>
            <p className="text-gray-700">{summary}</p>
          </section>
        )}

        {skills.length > 0 && (
          <section className="mb-5">
            <h2 className="font-mono text-sm font-bold text-gray-700 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, i) => (
                <span key={i} className="bg-gray-100 rounded px-2 py-0.5 text-xs text-gray-700" style={{ border: `1px solid ${accentColor}` }}>{skill}</span>
              ))}
            </div>
          </section>
        )}

        {experience.length > 0 && experience.some((e) => e.title || e.company) && (
          <section className="mb-5">
            <h2 className="font-mono text-sm font-bold text-gray-700 mb-2">Experience</h2>
            {experience.map((entry) => (
              (entry.title || entry.company) && (
                <div key={entry.id} className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-gray-900">{entry.title}</span>
                    <span className="text-xs text-gray-500 font-mono">
                      {entry.startDate}{entry.startDate && (entry.endDate || entry.current) && ' \u2192 '}{entry.current ? 'Present' : entry.endDate}
                    </span>
                  </div>
                  <div className="text-gray-600">{entry.company}</div>
                  {entry.bullets.filter(Boolean).length > 0 && (
                    <ul className="mt-1 text-gray-700 space-y-0.5">
                      {entry.bullets.filter(Boolean).map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gray-400 shrink-0">-</span>
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
            <h2 className="font-mono text-sm font-bold text-gray-700 mb-2">Education</h2>
            {education.map((entry) => (
              (entry.degree || entry.institution) && (
                <div key={entry.id} className="mb-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-gray-900">{entry.degree}</span>
                    <span className="text-xs text-gray-500 font-mono">
                      {entry.startDate}{entry.startDate && entry.endDate && ' \u2192 '}{entry.endDate}
                    </span>
                  </div>
                  <div className="text-gray-600">{entry.institution}{entry.gpa && ` — GPA: ${entry.gpa}`}</div>
                </div>
              )
            ))}
          </section>
        )}

        {projects.length > 0 && projects.some((p) => p.name) && (
          <section className="mb-5">
            <h2 className="font-mono text-sm font-bold text-gray-700 mb-2">Projects</h2>
            {projects.map((entry) => (
              entry.name && (
                <div key={entry.id} className="mb-2">
                  <div className="font-semibold text-gray-900">
                    {entry.name}
                    {entry.link && <span className="text-xs ml-2 font-mono" style={{ color: accentColor }}>{entry.link}</span>}
                  </div>
                  {entry.description && <p className="text-gray-700">{entry.description}</p>}
                </div>
              )
            ))}
          </section>
        )}
      </div>
    </div>
  )
})

export default TechTemplate
