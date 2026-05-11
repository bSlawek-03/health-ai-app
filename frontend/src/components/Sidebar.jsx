import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-600 text-white p-6">
      <h1 className="text-3xl font-bold mb-10">
        Health AI
      </h1>

      <nav className="flex flex-col gap-4">
        <Link
          to="/"
          className="hover:bg-blue-500 p-3 rounded-xl"
        >
          Dashboard
        </Link>

        <Link
          to="/activity"
          className="hover:bg-blue-500 p-3 rounded-xl"
        >
          Activity
        </Link>

        <Link
          to="/profile"
          className="hover:bg-blue-500 p-3 rounded-xl"
        >
          Profile
        </Link>

        <Link
            to="/recommendations"
            className="hover:bg-blue-500 p-3 rounded-xl"
        >
        AI Recommendations
    </Link>
      </nav>
    </div>
  )
}

export default Sidebar