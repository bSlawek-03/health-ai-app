import Sidebar from "../components/Sidebar"
import ActivityChart from "../components/ActivityChart"
import AIRecommendations from "../components/AIRecommendations"
import Topbar from "../components/Topbar"

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100 p-8">
        <Topbar />

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">Steps</h2>
            <p className="text-3xl font-bold mt-2">8,245</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">Calories</h2>
            <p className="text-3xl font-bold mt-2">540</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">Sleep</h2>
            <p className="text-3xl font-bold mt-2">7.5h</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">BMI</h2>
            <p className="text-3xl font-bold mt-2">22.4</p>
          </div>
        </div>

        <ActivityChart />
        <AIRecommendations />
      </div>
    </div>
  )
}

export default Dashboard