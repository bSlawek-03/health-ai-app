import { useDarkMode } from "../hooks/useDarkMode"
import NotificationsDropdown from "./NotificationsDropdown"
import Icon from "./Icon"

function Topbar() {
  const [dark, setDark] = useDarkMode()

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex justify-between items-center mb-8">
      <div className="pl-12 lg:pl-0">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">Welcome back</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Here is your health overview</p>
      </div>

      <div className="flex items-center gap-2 lg:gap-3">
        <button
          onClick={() => setDark(!dark)}
          className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          title="Toggle dark mode"
        >
          <Icon name={dark ? "sun" : "moon"} className="w-4 h-4" />
        </button>

        <NotificationsDropdown />

        <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
          SB
        </div>
      </div>
    </div>
  )
}

export default Topbar
