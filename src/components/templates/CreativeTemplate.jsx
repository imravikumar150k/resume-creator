import { forwardRef } from 'react'

const CreativeTemplate = forwardRef(function CreativeTemplate({ data, accentColor = '#1e3a5f' }, ref) {
  const { personalInfo, summary, experience, education, skills, projects } = data

  return (
    <div ref={ref} className="resume-preview bg-white max-w-[8.5in] mx-auto font-sans text-sm leading-relaxed flex">
      {/* Left Sidebar */}
      <aside className="w-[30%] text-white p-6 min-h-[11in] print:min-h-0" style={{ backgroundColor: accentColor }}>
        <div className="mb-6">
          <h1 className="text-xl font-bold leading-tight">{personalInfo.name || 'Your Name'}</h1>
        </div>

        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wide border-b border-white/30 pb-1 mb-2">Contact</h2>
          <div className="text-xs space-y-1 text-gray-200">
            {personalInfo.email && <div>{personalInfo.email}</div>}
            {personalInfo.phone && <div>{personalInfo.phone}</div>}
            {personalInfo.location && <div>{personalInfo.location}</div>}
            {personalInfo.linkedin && <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a>}
            {personalInfo.website && <a href={personalInfo.website.startsWith('http') ? personalInfo.website : `https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer">{personalInfo.website}</a>}
          </div>
        </div>

        {skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wide border-b border-white/30 pb-1 mb-2">Skills</h2>
            <ul className="text-xs text-gray-200 space-y-1">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {education.length > 0 && education.some((e) => e.degree || e.institution) && (
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wide border-b border-white/30 pb-1 mb-2">Education</h2>
            {education.map((entry) => (
              (entry.degree || entry.institution) && (
                <div key={entry.id} className="mb-3 text-xs">
                  <div className="font-semibold text-white">{entry.degree}</div>
                  <div className="text-gray-200">{entry.institution}</div>
                  <div className="text-gray-300 text-[10px]">
                    {entry.startDate}{entry.startDate && entry.endDate && ' — '}{entry.endDate}
                  </div>
                  {entry.gpa && <div className="text-gray-300 text-[10px]">GPA: {entry.gpa}</div>}
                </div>
              )
            ))}
          </div>
        )}
      </aside>

      {/* Right Content */}
      <main className="w-[70%] p-6">
        {summary && (
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase border-b border-gray-200 pb-1 mb-2" style={{ color: accentColor }}>Summary</h2>
            <p className="text-gray-700">{summary}</p>
          </section>
        )}

        {experience.length > 0 && experience.some((e) => e.title || e.company) && (
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase border-b border-gray-200 pb-1 mb-2" style={{ color: accentColor }}>Experience</h2>
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

        {projects.length > 0 && projects.some((p) => p.name) && (
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase border-b border-gray-200 pb-1 mb-2" style={{ color: accentColor }}>Projects</h2>
            {projects.map((entry) => (
              entry.name && (
                <div key={entry.id} className="mb-2">
                  <div className="font-semibold text-gray-900">
                    {entry.name}
                    {entry.link && <a href={entry.link.startsWith('http') ? entry.link : `https://${entry.link}`} target="_blank" rel="noopener noreferrer" className="text-xs ml-2" style={{ color: accentColor }}>{entry.link}</a>}
                  </div>
                  {entry.description && <p className="text-gray-700">{entry.description}</p>}
                </div>
              )
            ))}
          </section>
        )}
      </main>
    </div>
  )
})

export default CreativeTemplate
