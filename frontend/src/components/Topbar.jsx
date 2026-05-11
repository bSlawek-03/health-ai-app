function Topbar() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow flex justify-between items-center mb-8">
      <div>
        <h2 className="text-2xl font-bold">
          Welcome back 👋
        </h2>

        <p className="text-gray-500">
          Here is your health overview
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          SB
        </div>
      </div>
    </div>
  )
}

export default Topbar