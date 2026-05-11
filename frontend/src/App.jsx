import { BrowserRouter, Routes, Route } from "react-router-dom"
import Recommendations from "./pages/Recommendations"

import Dashboard from "./pages/Dashboard"
import Activity from "./pages/Activity"
import Profile from "./pages/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App