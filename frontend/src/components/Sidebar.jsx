import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-600 dark:bg-gray-900 text-white p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-10">Health AI</h1>

      <nav className="flex flex-col gap-2">
        <Link to="/" className="hover:bg-blue-500 dark:hover:bg-gray-700 p-3 rounded-xl transition">
          Dashboard
        </Link>
        <Link to="/activity" className="hover:bg-blue-500 dark:hover:bg-gray-700 p-3 rounded-xl transition">
          Activity
        </Link>
        <Link to="/profile" className="hover:bg-blue-500 dark:hover:bg-gray-700 p-3 rounded-xl transition">
          Profile
        </Link>
        <Link to="/recommendations" className="hover:bg-blue-500 dark:hover:bg-gray-700 p-3 rounded-xl transition">
          AI Recommendations
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar
