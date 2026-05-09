import { render, screen } from '@testing-library/react'
import ResumePreview from '../../src/components/preview/ResumePreview'

const sampleData = {
  personalInfo: { name: 'John Doe', email: 'john@example.com', phone: '555-1234', location: 'New York', linkedin: '', website: '' },
  summary: 'Experienced developer.',
  experience: [{ id: '1', title: 'Engineer', company: 'Acme', startDate: 'Jan 2020', endDate: 'Dec 2022', current: false, bullets: ['Built APIs'] }],
  education: [{ id: '1', degree: 'BS Computer Science', institution: 'MIT', startDate: '2016', endDate: '2020', gpa: '3.8' }],
  skills: ['React', 'Node.js'],
  projects: [],
}

describe('ResumePreview', () => {
  it('renders personal info', () => {
    render(<ResumePreview data={sampleData} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText(/john@example.com/)).toBeInTheDocument()
    expect(screen.getByText(/555-1234/)).toBeInTheDocument()
  })

  it('renders experience', () => {
    render(<ResumePreview data={sampleData} />)
    expect(screen.getByText('Engineer')).toBeInTheDocument()
    expect(screen.getByText(/Acme/)).toBeInTheDocument()
    expect(screen.getByText('Built APIs')).toBeInTheDocument()
  })

  it('renders skills as comma-separated list', () => {
    render(<ResumePreview data={sampleData} />)
    expect(screen.getByText(/React, Node.js/)).toBeInTheDocument()
  })

  it('hides empty sections', () => {
    render(<ResumePreview data={sampleData} />)
    expect(screen.queryByText('Projects')).not.toBeInTheDocument()
  })
})
