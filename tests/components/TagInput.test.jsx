import { render, screen, fireEvent } from '@testing-library/react'
import TagInput from '../../src/components/ui/TagInput'

describe('TagInput', () => {
  it('renders existing tags', () => {
    render(<TagInput tags={['React', 'Node']} onChange={() => {}} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node')).toBeInTheDocument()
  })

  it('adds a tag on Enter', () => {
    const onChange = vi.fn()
    render(<TagInput tags={['React']} onChange={onChange} />)
    const input = screen.getByPlaceholderText('Type a skill and press Enter')
    fireEvent.change(input, { target: { value: 'CSS' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onChange).toHaveBeenCalledWith(['React', 'CSS'])
  })

  it('removes a tag when X is clicked', () => {
    const onChange = vi.fn()
    render(<TagInput tags={['React', 'Node']} onChange={onChange} />)
    const removeButtons = screen.getAllByRole('button')
    fireEvent.click(removeButtons[0])
    expect(onChange).toHaveBeenCalledWith(['Node'])
  })

  it('does not add empty tags', () => {
    const onChange = vi.fn()
    render(<TagInput tags={[]} onChange={onChange} />)
    const input = screen.getByPlaceholderText('Type a skill and press Enter')
    fireEvent.change(input, { target: { value: '   ' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onChange).not.toHaveBeenCalled()
  })

  it('does not add duplicate tags', () => {
    const onChange = vi.fn()
    render(<TagInput tags={['React']} onChange={onChange} />)
    const input = screen.getByPlaceholderText('Type a skill and press Enter')
    fireEvent.change(input, { target: { value: 'React' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onChange).not.toHaveBeenCalled()
  })
})
