const recommendations = [
  { id: 1, title: "Increase Water Intake", description: "You should drink at least 2.5L of water daily." },
  { id: 2, title: "Improve Sleep", description: "Try to sleep at least 8 hours for better recovery." },
  { id: 3, title: "Cardio Training", description: "Add 2 cardio sessions this week." },
]

function AIRecommendations() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        AI Recommendations
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {recommendations.map((item) => (
          <div key={item.id} className="bg-blue-50 dark:bg-gray-700 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AIRecommendations
