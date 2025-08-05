"use client"

import { useState, useEffect } from "react"
import LoginForm from "./components/LoginForm/LoginForm"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import DashboardView from "./components/DashboardView/DashboardView"
import ScheduleView from "./components/ScheduleView/ScheduleView"
import SubscriptionsView from "./components/SubscriptionsView/SubscriptionsView"
import CommissionsView from "./components/CommissionsView/CommissionsView"
import ClientsView from "./components/ClientsView/ClientsView"
import PackagesView from "./components/PackagesView/PackagesView"
import ProductsView from "./components/ProductsView/ProductsView"
import FinancialView from "./components/FinancialView/FinancialView"
import MarketingView from "./components/MarketingView/MarketingView"
import SettingsView from "./components/SettingsView/SettingsView"
import SimpleCommissionsView from "./components/SimpleCommissionsView/SimpleCommissionsView"
import CompleteCommissionsView from "./components/CompleteCommissionsView/CompleteCommissionsView"
import AllSalesView from "./components/AllSalesView/AllSalesView"
import AccountsPayableView from "./components/AccountsPayableView/AccountsPayableView"
import GraphicReportsView from "./components/GraphicReportsView/GraphicReportsView"
import StatisticalReportsView from "./components/StatisticalReportsView/StatisticalReportsView"
import CashRegistersView from "./components/CashRegistersView/CashRegistersView"

import { getCurrentUser, logoutUser } from "./lib/mock-data"
import "./App.css" // Global layout styles

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentView, setCurrentView] = useState("dashboard") // Default view is now dashboard

  useEffect(() => {
    if (getCurrentUser()) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    setCurrentView("dashboard") // Redirect to dashboard after login
  }

  const handleLogout = () => {
    logoutUser()
    setIsLoggedIn(false)
    setCurrentView("dashboard") // Reset view on logout
  }

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardView />
      case "schedule":
        return <ScheduleView />
      case "subscriptions":
        return <SubscriptionsView />
      case "commissions":
        return <CommissionsView />
      case "clients":
        return <ClientsView />
      case "packages":
        return <PackagesView />
      case "products":
        return <ProductsView />
      case "financial":
        return <FinancialView />
      case "marketing":
        return <MarketingView />
      case "settings":
        return <SettingsView />
      case "simple-commissions":
        return <SimpleCommissionsView />
      case "complete-commissions":
        return <CompleteCommissionsView />
      case "all-sales":
        return <AllSalesView />
      case "accounts-payable":
        return <AccountsPayableView />
      case "graphic-reports":
        return <GraphicReportsView />
      case "statistical-reports":
        return <StatisticalReportsView />
      case "cash-registers":
        return <CashRegistersView />
      default:
        return <DashboardView />
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
