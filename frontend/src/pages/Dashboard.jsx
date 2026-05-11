import Sidebar from "../components/Sidebar"
import ActivityChart from "../components/ActivityChart"
import AIRecommendations from "../components/AIRecommendations"
import Topbar from "../components/Topbar"
import Icon from "../components/Icon"
import { useCountUp } from "../hooks/useCountUp"

const stats = [
  { label: "Distance", value: "8.2", display: "8.2 km", goal: "10 km goal", progress: 82, icon: "run", trend: "+12%", trendUp: true, color: "bg-blue-500", light: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-600 dark:text-blue-400", suffix: " km" },
  { label: "Calories", value: "540", display: "540", goal: "700 kcal goal", progress: 77, icon: "fire", trend: "+5%", trendUp: true, color: "bg-amber-500", light: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-600 dark:text-amber-400", suffix: " kcal" },
  { label: "Sleep", value: "7.5", display: "7.5h", goal: "8h target", progress: 94, icon: "sleep", trend: "-0.5h", trendUp: false, color: "bg-violet-500", light: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-600 dark:text-violet-400", suffix: "h" },
  { label: "BMI", value: "22.4", display: "22.4", goal: "Normal range", progress: 100, icon: "weight", trend: "Stable", trendUp: true, color: "bg-green-500", light: "bg-green-50 dark:bg-green-900/20", text: "text-green-600 dark:text-green-400", suffix: "" },
]

function StatCard({ stat, index }) {
  const count = useCountUp(stat.value)
  return (
    <div className={`animate-fade-up stagger-${index + 1} bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default`}>
      <div className="flex items-center justify-between">
        <span className={`w-10 h-10 rounded-xl ${stat.light} ${stat.text} flex items-center justify-center`}>
          <Icon name={stat.icon} className="w-5 h-5" />
        </span>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.trendUp ? "text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400" : "text-red-500 bg-red-50 dark:bg-red-900/30 dark:text-red-400"}`}>
          {stat.trendUp ? "↑" : "↓"} {stat.trend}
        </span>
      </div>
      <div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">{stat.label}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white tabular-nums">
          {count}{stat.suffix}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{stat.goal}</p>
      </div>
      <div>
        <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mb-1.5">
          <span>Progress</span><span>{stat.progress}%</span>
        </div>
        <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className={`h-full ${stat.color} rounded-full transition-all duration-1000`} style={{ width: `${stat.progress}%` }} />
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
  const today = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 p-4 lg:p-8">
        <Topbar />
        <div className="animate-fade-up mb-6">
          <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{today}</p>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Good morning, Sławek</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">You're on track — keep it up!</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-up stagger-5">
          <div className="lg:col-span-2"><ActivityChart /></div>
          <div className="lg:col-span-1"><AIRecommendations /></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
