import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Icon from "./Icon"

const links = [
  { to: "/", label: "Dashboard", icon: "chart" },
  { to: "/activity", label: "Activity", icon: "run" },
  { to: "/profile", label: "Profile", icon: "user" },
  { to: "/recommendations", label: "AI Recommendations", icon: "ai" },
  { to: "/settings", label: "Settings", icon: "lock" },
]

function Sidebar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-md"
      >
        <Icon name="menu" className="w-5 h-5" />
      </button>

      {open && (
        <div className="lg:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />
      )}

      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 h-screen bg-blue-600 dark:bg-gray-900 text-white p-6 flex flex-col
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="flex items-center justify-between mb-10">
          <Link to="/" onClick={() => setOpen(false)} className="text-2xl font-bold hover:opacity-80 transition tracking-tight">
            Health AI
          </Link>
          <button onClick={() => setOpen(false)} className="lg:hidden text-white/60 hover:text-white">
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {links.map((link) => {
            const active = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition text-sm font-medium
                  ${active
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <Icon name={link.icon} className="w-4 h-4 shrink-0" />
                {link.label}
                {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}

export default Sidebar
