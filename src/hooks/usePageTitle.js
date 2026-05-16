import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    const base = 'ResumeMaker'
    document.title = title ? `${title} | ${base}` : `${base} - Free Resume Builder | 20+ Templates`
  }, [title])
}
