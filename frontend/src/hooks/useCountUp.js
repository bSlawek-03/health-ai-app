import { useState, useEffect, useRef } from "react"

export function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0)
  const raf = useRef(null)

  useEffect(() => {
    const numeric = parseFloat(String(target).replace(/[^0-9.]/g, ""))
    if (isNaN(numeric)) return
    const start = performance.now()

    function step(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * numeric * 10) / 10)
      if (progress < 1) raf.current = requestAnimationFrame(step)
    }

    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [target, duration])

  return value
}
