import { Link } from "react-router-dom"
import Icon from "../components/Icon"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Page not found</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-xl transition"
        >
          <Icon name="chart" className="w-4 h-4" />
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}
