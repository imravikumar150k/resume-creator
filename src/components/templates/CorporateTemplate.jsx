import { forwardRef } from 'react'

const CorporateTemplate = forwardRef(function CorporateTemplate({ data }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white p-8 print:p-0 max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed">
      <header className="mb-5 pb-3 border-b-4 border-gray-800">
        <h1 className="text-2xl font-black text-gray-900 uppercase tracking-wide">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-600 text-xs mt-2 flex flex-wrap gap-x-4">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      {summary && (
        <section className="mb-4">
          <h2 className="text-xs font-black uppercase text-gray-800 mb-1 tracking-wide">Professional Summary</h2>
          <p className="text-gray-700">{summary}</p>
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-4">
          <h2 className="text-xs font-black uppercase text-gray-800 mb-2 tracking-wide">Work Experience</h2>
          {experience.map((entry) => (
            (entry.title || entry.company) && (
              <div key={entry.id} className="mb-3 pl-3 border-l-2 border-gray-300">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-gray-900">{entry.title}</span>
                  <span className="text-xs text-gray-500">{entry.startDate}{entry.startDate && (entry.endDate || entry.current) && ' – '}{entry.current ? 'Present' : entry.endDate}</span>
                </div>
                <div className="text-gray-600 text-xs font-medium">{entry.company}</div>
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
          <h2 className="text-xs font-black uppercase text-gray-800 mb-2 tracking-wide">Education</h2>
          {education.map((entry) => (
            (entry.degree || entry.institution) && (
              <div key={entry.id} className="mb-2 pl-3 border-l-2 border-gray-300">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-gray-900">{entry.degree}</span>
                  <span className="text-xs text-gray-500">{entry.startDate}{entry.startDate && entry.endDate && ' – '}{entry.endDate}</span>
                </div>
                <div className="text-gray-600 text-xs">{entry.institution}{entry.gpa && ` | ${entry.gpa}`}</div>
              </div>
            )
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xs font-black uppercase text-gray-800 mb-1 tracking-wide">Core Competencies</h2>
          <p className="text-gray-700 text-xs">{skills.join(' | ')}</p>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-4">
          <h2 className="text-xs font-black uppercase text-gray-800 mb-2 tracking-wide">Projects</h2>
          {projects.map((entry) => (
            entry.name && (
              <div key={entry.id} className="mb-2 pl-3 border-l-2 border-gray-300">
                <span className="font-bold text-gray-900">{entry.name}</span>
                {entry.link && <span className="text-xs text-blue-700 ml-2">{entry.link}</span>}
                {entry.description && <p className="text-gray-700 text-xs">{entry.description}</p>}
              </div>
            )
          ))}
        </section>
      )}
    </div>
  )
})

export default CorporateTemplate
