import { forwardRef } from 'react'

const TimelineTemplate = forwardRef(function TimelineTemplate({ data, accentColor = '#0d9488' }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white p-8 print:p-0 max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed">
      <header className="mb-5">
        <h1 className="text-2xl font-bold text-gray-900">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-gray-500 text-xs mt-1 flex flex-wrap gap-x-3">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a>}
          {personalInfo.website && <a href={personalInfo.website.startsWith('http') ? personalInfo.website : `https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer">{personalInfo.website}</a>}
        </div>
      </header>

      {summary && (
        <section className="mb-4">
          <p className="text-gray-700 pl-3" style={{ borderLeft: `4px solid ${accentColor}` }}>{summary}</p>
        </section>
      )}

      {experience.length > 0 && experience.some((e) => e.title || e.company) && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-2" style={{ color: accentColor }}>Experience</h2>
          <div className="pl-4 space-y-3" style={{ borderLeft: `2px solid ${accentColor}4d` }}>
            {experience.map((entry) => (
              (entry.title || entry.company) && (
                <div key={entry.id} className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }}></div>
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
          <h2 className="text-sm font-bold uppercase mb-2" style={{ color: accentColor }}>Education</h2>
          <div className="pl-4 space-y-2" style={{ borderLeft: `2px solid ${accentColor}4d` }}>
            {education.map((entry) => (
              (entry.degree || entry.institution) && (
                <div key={entry.id} className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }}></div>
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
          <h2 className="text-sm font-bold uppercase mb-2" style={{ color: accentColor }}>Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: `${accentColor}1a`, color: accentColor }}>{skill}</span>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && projects.some((p) => p.name) && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-2" style={{ color: accentColor }}>Projects</h2>
          {projects.map((entry) => (
            entry.name && (
              <div key={entry.id} className="mb-2">
                <div className="font-semibold text-gray-900">{entry.name}
                  {entry.link && <a href={entry.link.startsWith('http') ? entry.link : `https://${entry.link}`} target="_blank" rel="noopener noreferrer" className="text-xs ml-2" style={{ color: accentColor }}>{entry.link}</a>}
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
