import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import AddActivityForm from "../components/AddActivityForm"
import Icon from "../components/Icon"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

const weeklyData = [
  { day: "Mon", calories: 320 },
  { day: "Tue", calories: 480 },
  { day: "Wed", calories: 540 },
  { day: "Thu", calories: 290 },
  { day: "Fri", calories: 620 },
  { day: "Sat", calories: 710 },
  { day: "Sun", calories: 200 },
]

const recentActivities = [
  { id: 1, type: "Running", icon: "run", duration: "45 min", calories: 480, distance: "5.2 km", date: "Today, 7:30 AM" },
  { id: 2, type: "Gym", icon: "gym", duration: "1h 10m", calories: 620, distance: "—", date: "Yesterday, 6:00 PM" },
  { id: 3, type: "Cycling", icon: "cycle", duration: "30 min", calories: 310, distance: "12.4 km", date: "Mon, 8:00 AM" },
  { id: 4, type: "Yoga", icon: "yoga", duration: "50 min", calories: 180, distance: "—", date: "Sun, 7:00 AM" },
]

const todayStats = [
  { label: "Distance", value: "5.2 km", icon: "pin", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { label: "Calories", value: "540 kcal", icon: "fire", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/20" },
  { label: "Duration", value: "1h 20m", icon: "clock", color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-900/20" },
]

function Activity() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 p-4 lg:p-8">
        <Topbar />

        <div className="animate-fade-up mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Activity</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Track your workouts and progress</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {todayStats.map((s, i) => (
            <div key={s.label} className={`animate-fade-up stagger-${i + 1} bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200`}>
              <span className={`w-11 h-11 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center shrink-0`}>
                <Icon name={s.icon} className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-500">{s.label}</p>
                <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-fade-up stagger-4 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
            <div className="mb-5">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Weekly Calories</h2>
              <p className="text-xs text-gray-400 mt-0.5">Burned per day</p>
            </div>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} margin={{ top: 0, right: 0, bottom: 0, left: -20 }} barSize={28}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                  <XAxis dataKey="day" tick={{ fill: "#9ca3af", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #f0f0f0", borderRadius: "12px" }} cursor={{ fill: "#f9fafb" }} />
                  <Bar dataKey="calories" fill="#2563eb" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-4">This Week</h2>
            <div className="flex flex-col gap-4">
              {[
                { label: "Total Workouts", value: "6", icon: "medal" },
                { label: "Total Calories", value: "3,160 kcal", icon: "fire" },
                { label: "Total Distance", value: "34.8 km", icon: "run" },
                { label: "Active Minutes", value: "330 min", icon: "clock" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                    <Icon name={item.icon} className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="animate-fade-up stagger-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 mb-6">
          <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Recent Activities</h2>
          <div className="flex flex-col divide-y divide-gray-50 dark:divide-gray-700">
            {recentActivities.map((a) => (
              <div key={a.id} className="flex items-center gap-4 py-3">
                <span className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-gray-700 text-blue-500 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Icon name={a.icon} className="w-4 h-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{a.type}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{a.date}</p>
                </div>
                <div className="hidden sm:flex items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                  <span>{a.duration}</span>
                  <span>{a.calories} kcal</span>
                  <span>{a.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AddActivityForm />
      </div>
    </div>
  )
}

export default Activity
