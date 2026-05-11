import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import Icon from "../components/Icon"
import { useToast } from "../context/ToastContext"

const healthStats = [
  { label: "Avg. Steps", value: "8,245 km", icon: "run", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { label: "Avg. Sleep", value: "7.5h", icon: "sleep", color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-900/20" },
  { label: "Avg. Calories", value: "540 kcal", icon: "fire", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/20" },
  { label: "BMI", value: "22.4", icon: "weight", color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20" },
]

const recentActivity = [
  { type: "Running", distance: "5.2 km", duration: "45 min", date: "Today" },
  { type: "Gym", distance: "—", duration: "1h 10m", date: "Yesterday" },
  { type: "Cycling", distance: "12.4 km", duration: "30 min", date: "Monday" },
]

function InputField({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{label}</label>
      <input
        {...props}
        className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2.5 text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 transition"
      />
    </div>
  )
}

export default function Profile() {
  const toast = useToast()
  const [form, setForm] = useState({ name: "Sławek Bryła", email: "slawek@gmail.com", weight: "72", height: "178", age: "28" })
  const [editing, setEditing] = useState(false)

  function handleSave(e) {
    e.preventDefault()
    setEditing(false)
    toast("Profile updated successfully")
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 p-4 lg:p-8">
        <Topbar />

        <div className="animate-fade-up mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Your personal health information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl">

          {/* Avatar + info card */}
          <div className="animate-fade-up stagger-1 lg:col-span-1 flex flex-col gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 flex flex-col items-center text-center gap-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  SB
                </div>
                <span className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full" title="Active" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{form.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{form.email}</p>
              </div>
              <div className="w-full grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-700 pt-4">
                {[
                  { label: "Weight", value: `${form.weight} kg` },
                  { label: "Height", value: `${form.height} cm` },
                  { label: "Age", value: `${form.age} y` },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-base font-bold text-gray-900 dark:text-white">{s.value}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <span className="text-xs bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                Free Plan
              </span>
            </div>

            {/* Recent activity */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Recent Activity</h3>
              <div className="flex flex-col gap-3">
                {recentActivity.map((a) => (
                  <div key={a.type + a.date} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-gray-700 text-blue-500 dark:text-blue-400 flex items-center justify-center">
                        <Icon name="run" className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <p className="text-xs font-medium text-gray-900 dark:text-white">{a.type}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{a.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium text-gray-900 dark:text-white">{a.distance}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{a.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Health stats */}
            <div className="animate-fade-up stagger-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {healthStats.map((s) => (
                <div key={s.label} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-4 flex flex-col gap-2 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                  <span className={`w-8 h-8 rounded-lg ${s.bg} ${s.color} flex items-center justify-center`}>
                    <Icon name={s.icon} className="w-4 h-4" />
                  </span>
                  <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Edit form */}
            <div className="animate-fade-up stagger-3 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white">Personal Information</h2>
                  <p className="text-xs text-gray-400 mt-0.5">Update your profile details</p>
                </div>
                {!editing && (
                  <button
                    onClick={() => setEditing(true)}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Edit
                  </button>
                )}
              </div>

              <form onSubmit={handleSave} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Full Name" type="text" value={form.name} readOnly={!editing} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <InputField label="Email" type="email" value={form.email} readOnly={!editing} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <InputField label="Weight (kg)" type="number" value={form.weight} readOnly={!editing} onChange={(e) => setForm({ ...form, weight: e.target.value })} />
                <InputField label="Height (cm)" type="number" value={form.height} readOnly={!editing} onChange={(e) => setForm({ ...form, height: e.target.value })} />
                <InputField label="Age" type="number" value={form.age} readOnly={!editing} onChange={(e) => setForm({ ...form, age: e.target.value })} />

                {editing && (
                  <div className="sm:col-span-2 flex gap-3 pt-2">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition">
                      Save changes
                    </button>
                    <button type="button" onClick={() => setEditing(false)} className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-medium px-3">
                      Cancel
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
