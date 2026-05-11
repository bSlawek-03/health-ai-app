import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Mon", steps: 4000 },
  { day: "Tue", steps: 6500 },
  { day: "Wed", steps: 8000 },
  { day: "Thu", steps: 7200 },
  { day: "Fri", steps: 9100 },
  { day: "Sat", steps: 11000 },
  { day: "Sun", steps: 7500 },
]

function ActivityChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Weekly Activity
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="steps"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ActivityChart