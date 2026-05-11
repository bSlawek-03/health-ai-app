import Icon from "./Icon"

const recommendations = [
  { id: 1, icon: "water", title: "Increase Water Intake", description: "You should drink at least 2.5L of water daily.", priority: "High", priorityColor: "text-red-500 bg-red-50 dark:bg-red-900/30" },
  { id: 2, icon: "sleep", title: "Improve Sleep", description: "Try to sleep at least 8 hours for better recovery.", priority: "Medium", priorityColor: "text-amber-500 bg-amber-50 dark:bg-amber-900/30" },
  { id: 3, icon: "run", title: "Cardio Training", description: "Add 2 cardio sessions this week to boost endurance.", priority: "Low", priorityColor: "text-green-500 bg-green-50 dark:bg-green-900/30" },
]

function AIRecommendations() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mt-6 lg:mt-0 h-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">AI Recommendations</h2>
          <p className="text-xs text-gray-400 mt-0.5">Based on your health data</p>
        </div>
        <span className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2.5 py-1 rounded-full font-medium">
          3 new
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {recommendations.map((item) => (
          <div key={item.id} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer">
            <span className="w-9 h-9 rounded-xl bg-white dark:bg-gray-600 shadow-sm flex items-center justify-center text-blue-500 dark:text-blue-400 shrink-0">
              <Icon name={item.icon} className="w-4 h-4" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium shrink-0 ${item.priorityColor}`}>
                  {item.priority}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AIRecommendations
