import { forwardRef } from 'react'

const TwoColumnTemplate = forwardRef(function TwoColumnTemplate({ data }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white p-8 print:p-0 max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed">
      <header className="mb-4 pb-3 border-b-2 border-indigo-500">
        <h1 className="text-2xl font-bold text-indigo-900">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-600 text-xs mt-1 flex flex-wrap gap-x-3">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a>}
          {personalInfo.website && <a href={personalInfo.website.startsWith('http') ? personalInfo.website : `https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer">{personalInfo.website}</a>}
        </div>
      </header>

      {summary && (
        <section className="mb-3">
          <p className="text-gray-700 text-xs">{summary}</p>
        </section>
      )}

      <div className="flex gap-5">
        <div className="flex-1">
          {experience.length > 0 && experience.some((e) => e.title || e.company) && (
            <section className="mb-3">
              <h2 className="text-xs font-bold uppercase text-indigo-700 mb-2 border-b border-indigo-100 pb-0.5">Experience</h2>
              {experience.map((entry) => (
                (entry.title || entry.company) && (
                  <div key={entry.id} className="mb-2">
                    <div className="font-semibold text-gray-900 text-xs">{entry.title}</div>
                    <div className="text-[10px] text-indigo-600">{entry.company} | {entry.startDate}{entry.startDate && (entry.endDate || entry.current) && '–'}{entry.current ? 'Present' : entry.endDate}</div>
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
              <h2 className="text-xs font-bold uppercase text-indigo-700 mb-2 border-b border-indigo-100 pb-0.5">Projects</h2>
              {projects.map((entry) => (
                entry.name && (
                  <div key={entry.id} className="mb-1.5">
                    <div className="font-semibold text-gray-900 text-xs">{entry.name}
                      {entry.link && <a href={entry.link.startsWith('http') ? entry.link : `https://${entry.link}`} target="_blank" rel="noopener noreferrer" className="text-[10px] text-indigo-500 ml-1">{entry.link}</a>}
                    </div>
                    {entry.description && <p className="text-gray-700 text-[11px]">{entry.description}</p>}
                  </div>
                )
              ))}
            </section>
          )}
        </div>

        <div className="w-[30%]">
          {education.length > 0 && education.some((e) => e.degree || e.institution) && (
            <section className="mb-3">
              <h2 className="text-xs font-bold uppercase text-indigo-700 mb-2 border-b border-indigo-100 pb-0.5">Education</h2>
              {education.map((entry) => (
                (entry.degree || entry.institution) && (
                  <div key={entry.id} className="mb-1.5">
                    <div className="font-semibold text-gray-900 text-xs">{entry.degree}</div>
                    <div className="text-[10px] text-gray-600">{entry.institution}</div>
                    <div className="text-[10px] text-gray-500">{entry.startDate}{entry.startDate && entry.endDate && '–'}{entry.endDate}{entry.gpa && ` | ${entry.gpa}`}</div>
                  </div>
                )
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section className="mb-3">
              <h2 className="text-xs font-bold uppercase text-indigo-700 mb-2 border-b border-indigo-100 pb-0.5">Skills</h2>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill, i) => (
                  <span key={i} className="bg-indigo-50 text-indigo-700 text-[10px] px-1.5 py-0.5 rounded">{skill}</span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
})

export default TwoColumnTemplate
