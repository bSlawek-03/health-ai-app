import { useState } from "react"
import {
  AreaChart, Area, LineChart, Line,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts"

const datasets = {
  steps: [
    { day: "Mon", value: 4000 },
    { day: "Tue", value: 6500 },
    { day: "Wed", value: 8000 },
    { day: "Thu", value: 7200 },
    { day: "Fri", value: 9100 },
    { day: "Sat", value: 11000 },
    { day: "Sun", value: 7500 },
  ],
  calories: [
    { day: "Mon", value: 320 },
    { day: "Tue", value: 480 },
    { day: "Wed", value: 540 },
    { day: "Thu", value: 410 },
    { day: "Fri", value: 620 },
    { day: "Sat", value: 710 },
    { day: "Sun", value: 500 },
  ],
  sleep: [
    { day: "Mon", value: 6.5 },
    { day: "Tue", value: 7.2 },
    { day: "Wed", value: 8.0 },
    { day: "Thu", value: 6.8 },
    { day: "Fri", value: 7.5 },
    { day: "Sat", value: 9.0 },
    { day: "Sun", value: 7.8 },
  ],
}

const tabs = [
  { key: "steps", label: "Steps", color: "#2563eb", unit: "" },
  { key: "calories", label: "Calories", color: "#f59e0b", unit: " kcal" },
  { key: "sleep", label: "Sleep", color: "#8b5cf6", unit: "h" },
]

function CustomTooltip({ active, payload, label, unit }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl px-4 py-2.5 shadow-lg">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="text-sm font-bold text-gray-900 dark:text-white">
        {payload[0].value.toLocaleString()}{unit}
      </p>
    </div>
  )
}

function ActivityChart() {
  const [active, setActive] = useState("steps")
  const tab = tabs.find((t) => t.key === active)
  const data = datasets[active]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Weekly Overview</h2>
          <p className="text-xs text-gray-400 mt-0.5">Last 7 days</p>
        </div>
        <div className="flex gap-1 bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                active === t.key
                  ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={tab.color} stopOpacity={0.15} />
                <stop offset="95%" stopColor={tab.color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip unit={tab.unit} />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={tab.color}
              strokeWidth={2.5}
              fill="url(#colorGradient)"
              dot={false}
              activeDot={{ r: 5, fill: tab.color, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ActivityChart
