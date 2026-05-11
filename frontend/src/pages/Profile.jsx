import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

function Profile() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100 p-8">
        <Topbar />

        <div className="bg-white p-8 rounded-2xl shadow">
          <h1 className="text-3xl font-bold mb-8">
            User Profile
          </h1>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-500 mb-2">
                Full Name
              </label>

              <input
                type="text"
                value="Sławek Bryła"
                className="w-full p-4 rounded-xl border"
                readOnly
              />
            </div>

            <div>
              <label className="block text-gray-500 mb-2">
                Email
              </label>

              <input
                type="email"
                value="slawek@gmail.com"
                className="w-full p-4 rounded-xl border"
                readOnly
              />
            </div>

            <div>
              <label className="block text-gray-500 mb-2">
                Weight
              </label>

              <input
                type="text"
                value="72 kg"
                className="w-full p-4 rounded-xl border"
                readOnly
              />
            </div>

            <div>
              <label className="block text-gray-500 mb-2">
                Height
              </label>

              <input
                type="text"
                value="178 cm"
                className="w-full p-4 rounded-xl border"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile