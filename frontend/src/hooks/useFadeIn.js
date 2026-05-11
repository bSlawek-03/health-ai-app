import { useState, useEffect, useRef } from "react"

export function useFadeIn(delay = 0) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return { ref, visible }
}
