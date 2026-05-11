import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import Icon from "../components/Icon"
import { useDarkMode } from "../hooks/useDarkMode"
import { useToast } from "../context/ToastContext"

function Toggle({ enabled, onChange }) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
        enabled ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-600"
      }`}
    >
      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${enabled ? "translate-x-6" : "translate-x-0"}`} />
    </button>
  )
}

function Accordion({ iconName, title, badge, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`rounded-2xl border transition-all duration-200 ${open ? "bg-white dark:bg-gray-800 border-blue-100 dark:border-gray-700 shadow-md" : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-sm"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-4 px-6 py-4 text-left">
        <span className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-gray-700 text-blue-500 dark:text-blue-400 flex items-center justify-center shrink-0">
          <Icon name={iconName} className="w-4 h-4" />
        </span>
        <span className="flex-1 text-sm font-semibold text-gray-900 dark:text-white">{title}</span>
        {badge && <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-full">{badge}</span>}
        <span className={`text-gray-400 text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-[600px]" : "max-h-0"}`}>
        <div className="px-6 pb-6 pt-1 flex flex-col gap-5 border-t border-gray-100 dark:border-gray-700">
          {children}
        </div>
      </div>
    </div>
  )
}

function Row({ label, desc, children }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1">
      <div>
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{label}</p>
        {desc && <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{desc}</p>}
      </div>
      {children}
    </div>
  )
}

function InputField({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{label}</label>
      <input {...props} className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2.5 text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 transition" />
    </div>
  )
}

export default function Settings() {
  const toast = useToast()
  const [dark, setDark] = useDarkMode()
  const [profile, setProfile] = useState({ name: "Sławek Bryła", email: "slawek@gmail.com" })
  const [saved, setSaved] = useState(false)
  const [notifs, setNotifs] = useState({ aiAnalysis: true, waterReminder: true, heartRate: false, weeklyReport: true })
  const [passwords, setPasswords] = useState({ current: "", next: "", confirm: "" })
  const [pwError, setPwError] = useState("")
  const [pwSuccess, setPwSuccess] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false)

  function handleProfileSave(e) {
    e.preventDefault()
    setSaved(true)
    toast("Profile saved successfully")
    setTimeout(() => setSaved(false), 2000)
  }

  function handlePasswordChange(e) {
    e.preventDefault()
    setPwError("")
    setPwSuccess(false)
    if (passwords.next !== passwords.confirm) return setPwError("Passwords do not match")
    if (passwords.next.length < 8) return setPwError("Password must be at least 8 characters")
    setPwSuccess(true)
    toast("Password changed successfully")
    setPasswords({ current: "", next: "", confirm: "" })
    setTimeout(() => setPwSuccess(false), 2000)
  }

  const activeNotifCount = Object.values(notifs).filter(Boolean).length

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 p-4 lg:p-8">
        <Topbar />

        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl">

          {/* Avatar card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                SB
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{profile.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{profile.email}</p>
              </div>
              <span className="text-xs bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                Free Plan
              </span>
              <div className="w-full border-t border-gray-100 dark:border-gray-700 pt-4 flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Member since</span>
                  <span className="text-gray-900 dark:text-white font-medium">Jan 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Notifications</span>
                  <span className="text-gray-900 dark:text-white font-medium">{activeNotifCount} active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Accordions */}
          <div className="lg:col-span-2 flex flex-col gap-3">

            <Accordion iconName="user" title="Profile" defaultOpen>
              <form onSubmit={handleProfileSave} className="flex flex-col gap-4">
                <InputField label="Full Name" type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
                <InputField label="Email" type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                <div className="flex items-center gap-3 pt-1">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition">
                    Save changes
                  </button>
                  {saved && <span className="text-sm text-green-600 dark:text-green-400">Saved</span>}
                </div>
              </form>
            </Accordion>

            <Accordion iconName="palette" title="Appearance">
              <Row label="Dark mode" desc="Switch between light and dark theme">
                <Toggle enabled={dark} onChange={setDark} />
              </Row>
            </Accordion>

            <Accordion iconName="bell" title="Notifications" badge={`${activeNotifCount} on`}>
              <Row label="AI Analysis" desc="Notify when AI analysis is ready">
                <Toggle enabled={notifs.aiAnalysis} onChange={(v) => setNotifs({ ...notifs, aiAnalysis: v })} />
              </Row>
              <div className="h-px bg-gray-100 dark:bg-gray-700" />
              <Row label="Water Reminder" desc="Daily reminders to drink water">
                <Toggle enabled={notifs.waterReminder} onChange={(v) => setNotifs({ ...notifs, waterReminder: v })} />
              </Row>
              <div className="h-px bg-gray-100 dark:bg-gray-700" />
              <Row label="Heart Rate Alerts" desc="Alert on abnormal heart rate">
                <Toggle enabled={notifs.heartRate} onChange={(v) => setNotifs({ ...notifs, heartRate: v })} />
              </Row>
              <div className="h-px bg-gray-100 dark:bg-gray-700" />
              <Row label="Weekly Report" desc="Receive weekly health summary">
                <Toggle enabled={notifs.weeklyReport} onChange={(v) => setNotifs({ ...notifs, weeklyReport: v })} />
              </Row>
            </Accordion>

            <Accordion iconName="lock" title="Privacy & Security">
              <form onSubmit={handlePasswordChange} className="flex flex-col gap-4">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Change Password</p>
                {pwError && <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm px-4 py-2.5 rounded-xl">{pwError}</div>}
                {pwSuccess && <div className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm px-4 py-2.5 rounded-xl">Password changed successfully</div>}
                <InputField label="Current password" type="password" placeholder="••••••••" value={passwords.current} onChange={(e) => setPasswords({ ...passwords, current: e.target.value })} />
                <div className="grid grid-cols-2 gap-3">
                  <InputField label="New password" type="password" placeholder="••••••••" value={passwords.next} onChange={(e) => setPasswords({ ...passwords, next: e.target.value })} />
                  <InputField label="Confirm password" type="password" placeholder="••••••••" value={passwords.confirm} onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })} />
                </div>
                <button type="submit" className="self-start bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition">
                  Update password
                </button>
              </form>

              <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Danger Zone</p>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl p-4">
                  <p className="text-sm font-medium text-red-700 dark:text-red-400 mb-1">Delete Account</p>
                  <p className="text-xs text-red-500 mb-3">This action is permanent and cannot be undone.</p>
                  {!deleteConfirm ? (
                    <button onClick={() => setDeleteConfirm(true)} className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">
                      Delete my account
                    </button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-red-600 dark:text-red-400">Are you sure?</span>
                      <button className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-lg transition">Yes, delete</button>
                      <button onClick={() => setDeleteConfirm(false)} className="text-sm text-gray-500 hover:underline">Cancel</button>
                    </div>
                  )}
                </div>
              </div>
            </Accordion>

          </div>
        </div>
      </div>
    </div>
  )
}
