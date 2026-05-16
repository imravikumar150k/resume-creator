import { forwardRef } from 'react'

const TimelineTemplate = forwardRef(function TimelineTemplate({ data }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white p-8 print:p-0 max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed">
      <header className="mb-5">
        <h1 className="text-2xl font-bold text-gray-900">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-500 text-xs mt-1 flex flex-wrap gap-x-3">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      {summary && (
        <section className="mb-4">
          <p className="text-gray-700 border-l-4 border-teal-500 pl-3">{summary}</p>
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase text-teal-600 mb-2">Experience</h2>
          <div className="border-l-2 border-teal-300 pl-4 space-y-3">
            {experience.map((entry) => (
              (entry.title || entry.company) && (
                <div key={entry.id} className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-teal-500 rounded-full"></div>
                  <div className="text-xs text-gray-400 mb-0.5">
                    {entry.startDate}{entry.startDate && (entry.endDate || entry.current) && ' — '}{entry.current ? 'Present' : entry.endDate}
                  </div>
                  <div className="font-semibold text-gray-900">{entry.title}</div>
                  <div className="text-gray-600 text-xs">{entry.company}</div>
                  {entry.bullets.filter(Boolean).length > 0 && (
                    <ul className="list-disc list-inside mt-1 text-gray-700 text-xs">
                      {entry.bullets.filter(Boolean).map((bullet, i) => <li key={i}>{bullet}</li>)}
                    </ul>
                  )}
                </div>
              )
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && education.some((e) => e.degree || e.institution) && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase text-teal-600 mb-2">Education</h2>
          <div className="border-l-2 border-teal-300 pl-4 space-y-2">
            {education.map((entry) => (
              (entry.degree || entry.institution) && (
                <div key={entry.id} className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-teal-500 rounded-full"></div>
                  <div className="text-xs text-gray-400">{entry.startDate}{entry.startDate && entry.endDate && ' — '}{entry.endDate}</div>
                  <div className="font-semibold text-gray-900">{entry.degree}</div>
                  <div className="text-gray-600 text-xs">{entry.institution}{entry.gpa && ` — ${entry.gpa}`}</div>
                </div>
              )
            ))}
          </div>
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase text-teal-600 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, i) => (
              <span key={i} className="bg-teal-50 text-teal-700 text-xs px-2 py-0.5 rounded">{skill}</span>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase text-teal-600 mb-2">Projects</h2>
          {projects.map((entry) => (
            entry.name && (
              <div key={entry.id} className="mb-2">
                <div className="font-semibold text-gray-900">{entry.name}
                  {entry.link && <span className="text-xs text-teal-600 ml-2">{entry.link}</span>}
                </div>
                {entry.description && <p className="text-gray-700 text-xs">{entry.description}</p>}
              </div>
            )
          ))}
        </section>
      )}
    </div>
  )
})

export default TimelineTemplate
