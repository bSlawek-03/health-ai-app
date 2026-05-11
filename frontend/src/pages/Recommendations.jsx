import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import AIRecommendations from "../components/AIRecommendations"

function Recommendations() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100 p-8">
        <Topbar />

        <AIRecommendations />
      </div>
    </div>
  )
}

export default Recommendations