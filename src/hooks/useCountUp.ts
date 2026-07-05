import { useEffect, useState } from 'react'

export function useCountUp(end: number, duration = 2000, start = 0, shouldRun = true) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!shouldRun) return

    let startTime: number | null = null
    let animationId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(start + (end - start) * eased))
      if (progress < 1) animationId = requestAnimationFrame(step)
    }

    animationId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationId)
  }, [end, duration, start, shouldRun])

  return count
}
