import { useState, useCallback } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback((value) => {
    setStoredValue(value)
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // localStorage full or unavailable — value still in state
    }
  }, [key])

  const clearValue = useCallback(() => {
    setStoredValue(initialValue)
    localStorage.removeItem(key)
  }, [key, initialValue])

  return [storedValue, setValue, clearValue]
}
