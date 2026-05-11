import { createContext, useContext, useState, useCallback } from "react"

const ToastContext = createContext(null)

export function useToast() {
  return useContext(ToastContext)
}

let id = 0

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const show = useCallback((message, type = "success") => {
    const tid = ++id
    setToasts((prev) => [...prev, { id: tid, message, type }])
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== tid)), 3500)
  }, [])

  const remove = useCallback((tid) => {
    setToasts((prev) => prev.filter((t) => t.id !== tid))
  }, [])

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            onClick={() => remove(t.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg text-sm font-medium cursor-pointer
              animate-fade-up transition-all
              ${t.type === "success" ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900" : ""}
              ${t.type === "error" ? "bg-red-600 text-white" : ""}
              ${t.type === "info" ? "bg-blue-600 text-white" : ""}
            `}
          >
            <span>
              {t.type === "success" && "✓"}
              {t.type === "error" && "✕"}
              {t.type === "info" && "i"}
            </span>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
