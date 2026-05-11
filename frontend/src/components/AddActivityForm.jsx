function AddActivityForm() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Add Activity
      </h2>

      <form className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-500 mb-2">
            Activity Type
          </label>

          <input
            type="text"
            placeholder="Running"
            className="w-full p-4 border rounded-xl"
          />
        </div>

        <div>
          <label className="block text-gray-500 mb-2">
            Duration
          </label>

          <input
            type="text"
            placeholder="1h 20m"
            className="w-full p-4 border rounded-xl"
          />
        </div>

        <div>
          <label className="block text-gray-500 mb-2">
            Calories
          </label>

          <input
            type="number"
            placeholder="540"
            className="w-full p-4 border rounded-xl"
          />
        </div>

        <div>
          <label className="block text-gray-500 mb-2">
            Steps
          </label>

          <input
            type="number"
            placeholder="8000"
            className="w-full p-4 border rounded-xl"
          />
        </div>

        <button className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700">
          Save Activity
        </button>
      </form>
    </div>
  )
}

export default AddActivityForm