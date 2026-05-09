import { forwardRef } from 'react'

const BoldTemplate = forwardRef(function BoldTemplate({ data }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed">
      <header className="bg-gray-900 text-white px-8 py-6">
        <h1 className="text-4xl font-bold">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-300 text-xs mt-2 flex flex-wrap gap-x-3">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      <div className="px-8 pb-8 pt-6">
        {summary && (
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase text-gray-900 mb-1">Summary</h2>
            <p className="text-gray-700">{summary}</p>
          </section>
        )}

        {experience.length > 0 && experience.some((e) => e.title || e.company) && (
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase text-gray-900 mb-1">Experience</h2>
            {experience.map((entry) => (
              (entry.title || entry.company) && (
                <div key={entry.id} className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-gray-900">{entry.title}</span>
                    <span className="text-xs text-gray-500">
                      {entry.startDate}{entry.startDate && (entry.endDate || entry.current) && ' — '}{entry.current ? 'Present' : entry.endDate}
                    </span>
                  </div>
                  <div className="text-gray-700 font-semibold">{entry.company}</div>
                  {entry.bullets.filter(Boolean).length > 0 && (
                    <ul className="list-disc list-inside mt-1 text-gray-700">
                      {entry.bullets.filter(Boolean).map((bullet, i) => (
                        <li key={i}>{bullet}</li>
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
            <h2 className="text-sm font-bold uppercase text-gray-900 mb-1">Education</h2>
            {education.map((entry) => (
              (entry.degree || entry.institution) && (
                <div key={entry.id} className="mb-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-gray-900">{entry.degree}</span>
                    <span className="text-xs text-gray-500">
                      {entry.startDate}{entry.startDate && entry.endDate && ' — '}{entry.endDate}
                    </span>
                  </div>
                  <div className="text-gray-700">{entry.institution}{entry.gpa && ` — GPA: ${entry.gpa}`}</div>
                </div>
              )
            ))}
          </section>
        )}

        {skills.length > 0 && (
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase text-gray-900 mb-1">Skills</h2>
            <p className="text-gray-700 font-medium">{skills.join(', ')}</p>
          </section>
        )}

        {projects.length > 0 && projects.some((p) => p.name) && (
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase text-gray-900 mb-1">Projects</h2>
            {projects.map((entry) => (
              entry.name && (
                <div key={entry.id} className="mb-2">
                  <div className="font-bold text-gray-900">
                    {entry.name}
                    {entry.link && <span className="text-xs text-blue-600 ml-2 font-normal">{entry.link}</span>}
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

export default BoldTemplate
