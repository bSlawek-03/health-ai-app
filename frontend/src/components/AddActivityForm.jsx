import { useState } from "react"
import { useToast } from "../context/ToastContext"

const activityTypes = [
  { label: "Running", value: "running" },
  { label: "Cycling", value: "cycling" },
  { label: "Swimming", value: "swimming" },
  { label: "Gym", value: "gym" },
  { label: "Yoga", value: "yoga" },
  { label: "Walking", value: "walking" },
]

function AddActivityForm() {
  const toast = useToast()
  const [form, setForm] = useState({ type: "", duration: "", calories: "", distance: "" })

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.type) { toast("Please select an activity type", "error"); return }
    toast("Activity saved successfully")
    setForm({ type: "", duration: "", calories: "", distance: "" })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mt-6">
      <div className="mb-5">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">Log Activity</h2>
        <p className="text-xs text-gray-400 mt-0.5">Add your workout details</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {activityTypes.map((a) => (
          <button
            key={a.value}
            type="button"
            onClick={() => setForm({ ...form, type: a.value })}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition border ${
              form.type === a.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-400"
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { key: "duration", label: "Duration", placeholder: "e.g. 45 min", type: "text" },
          { key: "calories", label: "Calories", placeholder: "e.g. 350 kcal", type: "number" },
          { key: "distance", label: "Distance (km)", placeholder: "e.g. 5.2", type: "number" },
        ].map((field) => (
          <div key={field.key} className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              {field.label}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.key]}
              onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
              className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2.5 text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 transition"
            />
          </div>
        ))}
        <button type="submit" className="sm:col-span-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl text-sm transition">
          Save Activity
        </button>
      </form>
    </div>
  )
}

export default AddActivityForm
