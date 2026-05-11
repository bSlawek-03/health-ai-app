import { useLocation } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

export default function PageTransition({ children }) {
  const location = useLocation()
  const [visible, setVisible] = useState(false)
  const prevKey = useRef(null)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 20)
    prevKey.current = location.key
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  )
}
