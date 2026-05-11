import { useState, useRef, useEffect } from "react"

const initialNotifications = [
  { id: 1, icon: "🤖", title: "AI Analysis Ready", desc: "Your latest heart rate analysis is done.", time: "2 min ago", read: false },
  { id: 2, icon: "💧", title: "Drink Water", desc: "You haven't logged water intake today.", time: "1 hr ago", read: false },
  { id: 3, icon: "❤️", title: "Heart Rate OK", desc: "Your resting heart rate is within normal range.", time: "3 hr ago", read: true },
  { id: 4, icon: "🏃", title: "Daily Goal Reached", desc: "You hit 10,000 steps today. Great job!", time: "5 hr ago", read: true },
]

function NotificationsDropdown() {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState(initialNotifications)
  const ref = useRef(null)

  const unread = notifications.filter((n) => !n.read).length

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  function markRead(id) {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="relative w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
      >
        🔔
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {unread}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 z-50">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
            {unread > 0 && (
              <button
                onClick={markAllRead}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto divide-y divide-gray-50 dark:divide-gray-700">
            {notifications.map((n) => (
              <div
                key={n.id}
                onClick={() => markRead(n.id)}
                className={`flex gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition ${
                  !n.read ? "bg-blue-50 dark:bg-gray-750" : ""
                }`}
              >
                <span className="text-2xl">{n.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium text-gray-900 dark:text-white ${!n.read ? "font-semibold" : ""}`}>
                    {n.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">{n.desc}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{n.time}</p>
                </div>
                {!n.read && (
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {notifications.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 py-6 text-sm">No notifications</p>
          )}
        </div>
      )}
    </div>
  )
}

export default NotificationsDropdown
