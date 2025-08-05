"use client"

import { useState } from "react"
import "./Header.css"
import { getCurrentUser, logoutUser } from "../../lib/mock-data"
import logoDinastia from "../../images/logo-dinastia.png" // Import the image
import userPlaceholder from "../../images/placeholder-user.png" // Import the image

// Lucide React icons (simplified for pure React, usually imported directly)
const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
  </svg>
)
const CalendarDaysIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <path d="M8 2V5"></path>
    <path d="M16 2V5"></path>
    <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
    <path d="M3 10h18"></path>
    <path d="M19 19V17h2"></path>
    <path d="M19 17a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-2Z"></path>
  </svg>
)
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>
)
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
)
const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
)
const Package2Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.79 1.1L21 9"></path>
    <path d="M12 3v6"></path>
  </svg>
)

function Header({ onNavigate, onLogout }) {
  const currentUser = getCurrentUser()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLogoutClick = () => {
    logoutUser()
    onLogout()
  }

  return (
    <header className="header">
      <nav className="header-nav-desktop">
        <a href="#" onClick={() => onNavigate("dashboard")} className="header-logo-link">
          <img src={logoDinastia || "/placeholder.svg"} alt="Barbearia Dinastia Logo" className="header-logo" />
          <span className="sr-only">Barbearia Dinastia</span>
        </a>
        <a href="#" onClick={() => onNavigate("schedule")} className="header-nav-item">
          Agenda
        </a>
        <a href="#" onClick={() => onNavigate("subscriptions")} className="header-nav-item">
          Assinaturas
        </a>
        <a href="#" onClick={() => onNavigate("commissions")} className="header-nav-item">
          Comissões
        </a>
        <a href="#" onClick={() => onNavigate("financial")} className="header-nav-item">
          Financeiro
        </a>
      </nav>

      <div className="header-mobile-menu">
        <button className="header-mobile-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuIcon className="header-icon" />
          <span className="sr-only">Toggle navigation menu</span>
        </button>
        {isMobileMenuOpen && (
          <div className="header-mobile-content">
            <nav className="header-mobile-nav">
              <a href="#" onClick={() => onNavigate("dashboard")} className="header-logo-link">
                <img src={logoDinastia || "/placeholder.svg"} alt="Barbearia Dinastia Logo" className="header-logo" />
                <span className="sr-only">Barbearia Dinastia</span>
              </a>
              <a
                href="#"
                onClick={() => {
                  onNavigate("schedule")
                  setIsMobileMenuOpen(false)
                }}
                className="header-mobile-nav-item"
              >
                <CalendarDaysIcon className="header-icon" />
                Agenda
              </a>
              <a
                href="#"
                onClick={() => {
                  onNavigate("subscriptions")
                  setIsMobileMenuOpen(false)
                }}
                className="header-mobile-nav-item"
              >
                <UsersIcon className="header-icon" />
                Assinaturas
              </a>
              <a
                href="#"
                onClick={() => {
                  onNavigate("commissions")
                  setIsMobileMenuOpen(false)
                }}
                className="header-mobile-nav-item"
              >
                <Package2Icon className="header-icon" />
                Comissões
              </a>
              <a
                href="#"
                onClick={() => {
                  onNavigate("financial")
                  setIsMobileMenuOpen(false)
                }}
                className="header-mobile-nav-item"
              >
                <Package2Icon className="header-icon" />
                Financeiro
              </a>
            </nav>
          </div>
        )}
      </div>

      <div className="header-actions">
        <form className="header-search-form">
          <div className="header-search-wrapper">
            <SearchIcon className="header-search-icon" />
            <input type="search" placeholder="Buscar..." className="header-search-input" />
          </div>
        </form>
        <button className="header-icon-button">
          <BellIcon className="header-icon" />
          <span className="sr-only">Toggle notifications</span>
        </button>
        <div className="header-dropdown">
          <button className="header-dropdown-trigger" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <img
              src={userPlaceholder || "/placeholder.svg"}
              width={36}
              height={36}
              alt="Avatar"
              className="header-avatar"
            />
            <span className="sr-only">Toggle user menu</span>
          </button>
          {isDropdownOpen && (
            <div className="header-dropdown-content">
              <div className="header-dropdown-label">{currentUser?.name || "Meu Perfil"}</div>
              <div className="header-dropdown-separator"></div>
              <a href="#" className="header-dropdown-item">
                Configurações
              </a>
              <a href="#" className="header-dropdown-item">
                Suporte
              </a>
              <div className="header-dropdown-separator"></div>
              <button onClick={handleLogoutClick} className="header-dropdown-item header-dropdown-item-logout">
                Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
