import { useDarkMode } from "../hooks/useDarkMode"
import NotificationsDropdown from "./NotificationsDropdown"

function Topbar() {
  const [dark, setDark] = useDarkMode()

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow flex justify-between items-center mb-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome back
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Here is your health overview
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setDark(!dark)}
          className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          title="Toggle dark mode"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <NotificationsDropdown />

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          SB
        </div>
      </div>
    </div>
  )
}

export default Topbar
