function AddActivityForm() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Add Activity
      </h2>

      <form className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-500 dark:text-gray-400 mb-2">Activity Type</label>
          <input
            type="text"
            placeholder="Running"
            className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-gray-500 dark:text-gray-400 mb-2">Duration</label>
          <input
            type="text"
            placeholder="1h 20m"
            className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-gray-500 dark:text-gray-400 mb-2">Calories</label>
          <input
            type="number"
            placeholder="540"
            className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-gray-500 dark:text-gray-400 mb-2">Steps</label>
          <input
            type="number"
            placeholder="8000"
            className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-500 transition"
          />
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition">
          Save Activity
        </button>
      </form>
    </div>
  )
}

export default AddActivityForm
