import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import Icon from "../components/Icon"

const categories = ["All", "Hydration", "Sleep", "Fitness", "Nutrition"]

const allRecommendations = [
  { id: 1, icon: "water", category: "Hydration", title: "Increase Water Intake", desc: "You should drink at least 2.5L of water daily. Based on your activity level, aim for 3L on workout days.", priority: "High", priorityColor: "text-red-500 bg-red-50 dark:bg-red-900/30", status: "active" },
  { id: 2, icon: "sleep", category: "Sleep", title: "Improve Sleep Schedule", desc: "Try to sleep at least 8 hours for better recovery. Going to bed at a consistent time helps regulate your circadian rhythm.", priority: "Medium", priorityColor: "text-amber-500 bg-amber-50 dark:bg-amber-900/30", status: "active" },
  { id: 3, icon: "run", category: "Fitness", title: "Cardio Training", desc: "Add 2 cardio sessions this week. A 30-minute run or 45-minute cycling session will boost your cardiovascular health.", priority: "Low", priorityColor: "text-green-500 bg-green-50 dark:bg-green-900/30", status: "active" },
  { id: 4, icon: "heart", category: "Fitness", title: "Monitor Heart Rate", desc: "Your resting heart rate is slightly elevated. Consider adding light stretching or yoga to your routine.", priority: "Medium", priorityColor: "text-amber-500 bg-amber-50 dark:bg-amber-900/30", status: "done" },
  { id: 5, icon: "fire", category: "Nutrition", title: "Calorie Balance", desc: "Your calorie intake is 15% below your target. Try adding a healthy snack in the afternoon to maintain energy levels.", priority: "Low", priorityColor: "text-green-500 bg-green-50 dark:bg-green-900/30", status: "active" },
  { id: 6, icon: "steps", category: "Fitness", title: "Daily Distance Goal", desc: "You're averaging 6.2 km/day. Increase to 8 km to hit your weekly fitness goal.", priority: "Low", priorityColor: "text-green-500 bg-green-50 dark:bg-green-900/30", status: "active" },
]

const summaryStats = [
  { label: "Active Tips", value: "5", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { label: "Completed", value: "1", color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20" },
  { label: "High Priority", value: "1", color: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-900/20" },
]

export default function Recommendations() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [showDone, setShowDone] = useState(false)

  const filtered = allRecommendations.filter((r) => {
    const matchCat = activeCategory === "All" || r.category === activeCategory
    const matchStatus = showDone ? true : r.status === "active"
    return matchCat && matchStatus
  })

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 p-4 lg:p-8">
        <Topbar />

        <div className="animate-fade-up mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Recommendations</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Personalised tips based on your health data</p>
        </div>

        {/* Summary */}
        <div className="animate-fade-up stagger-1 grid grid-cols-3 gap-4 mb-6 max-w-sm">
          {summaryStats.map((s) => (
            <div key={s.label} className={`${s.bg} rounded-2xl p-4 text-center`}>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="animate-fade-up stagger-2 flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex gap-1 bg-white dark:bg-gray-800 rounded-xl p-1 border border-gray-100 dark:border-gray-700 shadow-sm">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  activeCategory === c
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowDone(!showDone)}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition ${
              showDone
                ? "border-blue-300 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400"
            }`}
          >
            {showDone ? "Hide completed" : "Show completed"}
          </button>
        </div>

        {/* Cards */}
        <div className="animate-fade-up stagger-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((r) => (
            <div
              key={r.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl border shadow-sm p-5 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200
                ${r.status === "done"
                  ? "border-gray-100 dark:border-gray-700 opacity-60"
                  : "border-gray-100 dark:border-gray-700"
                }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-gray-700 text-blue-500 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Icon name={r.icon} className="w-5 h-5" />
                </span>
                <div className="flex gap-2 shrink-0">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${r.priorityColor}`}>
                    {r.priority}
                  </span>
                  {r.status === "done" && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium text-green-600 bg-green-50 dark:bg-green-900/30">
                      Done
                    </span>
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{r.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50 dark:border-gray-700">
                <span className="text-xs text-gray-400 dark:text-gray-500">{r.category}</span>
                <Icon name="ai" className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600" />
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center py-16 text-gray-400 dark:text-gray-500">
              <p className="text-sm">No recommendations in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
