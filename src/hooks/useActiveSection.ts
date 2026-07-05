import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el) continue
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id)
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    }

    return () => {
      for (const observer of observers) observer.disconnect()
    }
  }, [sectionIds])

  return activeId
}
