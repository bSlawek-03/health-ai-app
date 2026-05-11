import Sidebar from "../components/Sidebar"
import ActivityChart from "../components/ActivityChart"
import AIRecommendations from "../components/AIRecommendations"
import Topbar from "../components/Topbar"

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
        <Topbar />

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h2 className="text-gray-500 dark:text-gray-400">Steps</h2>
            <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">8,245</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h2 className="text-gray-500 dark:text-gray-400">Calories</h2>
            <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">540</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h2 className="text-gray-500 dark:text-gray-400">Sleep</h2>
            <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">7.5h</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h2 className="text-gray-500 dark:text-gray-400">BMI</h2>
            <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">22.4</p>
          </div>
        </div>

        <ActivityChart />
        <AIRecommendations />
      </div>
    </div>
  )
}

export default Dashboard
