import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastProvider } from "./context/ToastContext"
import AuthGuard from "./components/AuthGuard"
import PageTransition from "./components/PageTransition"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Activity from "./pages/Activity"
import Profile from "./pages/Profile"
import Recommendations from "./pages/Recommendations"
import Settings from "./pages/Settings"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <PageTransition>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App
