import { forwardRef } from 'react'

const ExecutiveTemplate = forwardRef(function ExecutiveTemplate({ data }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white p-8 max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed">
      <header className="flex justify-between items-start mb-4 pb-3 border-b-2 border-[#1e3a5f]">
        <h1 className="text-2xl font-bold text-[#1e3a5f]">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-right text-xs text-gray-600 space-y-0.5">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
          {personalInfo.linkedin && <div>{personalInfo.linkedin}</div>}
          {personalInfo.website && <div>{personalInfo.website}</div>}
        </div>
      </header>

      {summary && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#1e3a5f] border-b border-[#1e3a5f] pb-1 mb-2">Summary</h2>
          <p className="text-gray-700">{summary}</p>
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#1e3a5f] border-b border-[#1e3a5f] pb-1 mb-2">Experience</h2>
          {experience.map((entry) => (
            (entry.title || entry.company) && (
              <div key={entry.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-gray-900">{entry.title}</span>
                  <span className="text-xs text-gray-500">
                    {entry.startDate}{entry.startDate && (entry.endDate || entry.current) && ' — '}{entry.current ? 'Present' : entry.endDate}
                  </span>
                </div>
                <div className="text-gray-600 italic">{entry.company}</div>
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
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#1e3a5f] border-b border-[#1e3a5f] pb-1 mb-2">Education</h2>
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
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#1e3a5f] border-b border-[#1e3a5f] pb-1 mb-2">Skills</h2>
          <p className="text-gray-700">{skills.join(' | ')}</p>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#1e3a5f] border-b border-[#1e3a5f] pb-1 mb-2">Projects</h2>
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

export default ExecutiveTemplate
