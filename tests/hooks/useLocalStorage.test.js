import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from '../../src/hooks/useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns initial value when nothing is stored', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', { name: '' }))
    expect(result.current[0]).toEqual({ name: '' })
  })

  it('returns stored value from localStorage', () => {
    localStorage.setItem('test-key', JSON.stringify({ name: 'John' }))
    const { result } = renderHook(() => useLocalStorage('test-key', { name: '' }))
    expect(result.current[0]).toEqual({ name: 'John' })
  })

  it('updates localStorage when setValue is called', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', { name: '' }))
    act(() => {
      result.current[1]({ name: 'Jane' })
    })
    expect(result.current[0]).toEqual({ name: 'Jane' })
    expect(JSON.parse(localStorage.getItem('test-key'))).toEqual({ name: 'Jane' })
  })

  it('clears value when clearValue is called', () => {
    localStorage.setItem('test-key', JSON.stringify({ name: 'John' }))
    const { result } = renderHook(() => useLocalStorage('test-key', { name: '' }))
    act(() => {
      result.current[2]()
    })
    expect(result.current[0]).toEqual({ name: '' })
    expect(localStorage.getItem('test-key')).toBeNull()
  })
})
