import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import AddActivityForm from "../components/AddActivityForm"

function Activity() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
        <Topbar />

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Activity Tracking
          </h1>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl">
              <h2 className="text-gray-500 dark:text-gray-400">Running</h2>
              <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">5.2 km</p>
            </div>

            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl">
              <h2 className="text-gray-500 dark:text-gray-400">Calories Burned</h2>
              <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">540</p>
            </div>

            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl">
              <h2 className="text-gray-500 dark:text-gray-400">Workout Time</h2>
              <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">1h 20m</p>
            </div>
          </div>
        </div>

        <AddActivityForm />
      </div>
    </div>
  )
}

export default Activity
