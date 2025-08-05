"use client"

import { useState, useEffect } from "react"
import LoginForm from "./components/LoginForm/LoginForm"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import ScheduleView from "./components/ScheduleView/ScheduleView"
import SubscriptionsView from "./components/SubscriptionsView/SubscriptionsView"
import CommissionsView from "./components/CommissionsView/CommissionsView"
import { getCurrentUser, logoutUser } from "./lib/mock-data"
import "./App.css" // Global layout styles

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentView, setCurrentView] = useState("schedule") // 'schedule', 'subscriptions', 'commissions'

  useEffect(() => {
    if (getCurrentUser()) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    setCurrentView("schedule") // Redirect to schedule after login
  }

  const handleLogout = () => {
    logoutUser()
    setIsLoggedIn(false)
    setCurrentView("schedule") // Reset view on logout
  }

  const renderView = () => {
    switch (currentView) {
      case "schedule":
        return <ScheduleView />
      case "subscriptions":
        return <SubscriptionsView />
      case "commissions":
        return <CommissionsView />
      default:
        return <ScheduleView />
    }
  }

  if (!isLoggedIn) {
    return <LoginForm onLoginSuccess={handleLoginSuccess} />
  }

  return (
    <div className="app-layout">
      <Sidebar onNavigate={setCurrentView} />
      <div className="app-main-content">
        <Header onNavigate={setCurrentView} onLogout={handleLogout} />
        <main className="app-page-content">{renderView()}</main>
      </div>
    </div>
  )
}

export default App
