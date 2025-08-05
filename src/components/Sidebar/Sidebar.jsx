"use client"
import "./Sidebar.css"

// Lucide React icons (simplified for pure React)
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
const DollarSignIcon = () => (
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
    <line x1="12" x2="12" y1="2" y2="22"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
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
const BarChartIcon = () => (
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
    <line x1="12" x2="12" y1="20" y2="10"></line>
    <line x1="18" x2="18" y1="20" y2="4"></line>
    <line x1="6" x2="6" y1="20" y2="16"></line>
  </svg>
)
const ShoppingCartIcon = () => (
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
    <circle cx="8" cy="21" r="1"></circle>
    <circle cx="19" cy="21" r="1"></circle>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
  </svg>
)
const CreditCardIcon = () => (
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
    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
    <line x1="2" x2="22" y1="10" y2="10"></line>
  </svg>
)
const ClipboardListIcon = () => (
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
    <rect width="8" height="4" x="8" y="2"></rect>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <path d="M12 11h4"></path>
    <path d="M12 16h4"></path>
    <path d="M8 11h.01"></path>
    <path d="M8 16h.01"></path>
  </svg>
)
const TrendingUpIcon = () => (
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
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
)
const BoxIcon = () => (
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
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
    <path d="m3.3 7 8.7 5 8.7-5"></path>
    <path d="M12 22V12"></path>
  </svg>
)
const LayoutDashboardIcon = () => (
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
    <rect width="7" height="9" x="3" y="3" rx="1"></rect>
    <rect width="7" height="5" x="14" y="3" rx="1"></rect>
    <rect width="7" height="9" x="14" y="12" rx="1"></rect>
    <rect width="7" height="5" x="3" y="16" rx="1"></rect>
  </svg>
)

function Sidebar({ onNavigate }) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <div className="sidebar-section-title">PÁGINAS:</div>
          <a href="#" onClick={() => onNavigate("dashboard")} className="sidebar-nav-item">
            <LayoutDashboardIcon className="sidebar-icon" />
            Dashboard
          </a>
          <a href="#" onClick={() => onNavigate("schedule")} className="sidebar-nav-item">
            <CalendarDaysIcon className="sidebar-icon" />
            Agenda
          </a>
          <a href="#" onClick={() => onNavigate("clients")} className="sidebar-nav-item">
            <UsersIcon className="sidebar-icon" />
            Cadastros
          </a>
          <a href="#" onClick={() => onNavigate("packages")} className="sidebar-nav-item">
            <Package2Icon className="sidebar-icon" />
            Pacotes
          </a>
          <a href="#" onClick={() => onNavigate("subscriptions")} className="sidebar-nav-item">
            <UsersIcon className="sidebar-icon" />
            Assinaturas
          </a>
          <a href="#" onClick={() => onNavigate("products")} className="sidebar-nav-item">
            <ShoppingCartIcon className="sidebar-icon" />
            Produtos
          </a>
          <a href="#" onClick={() => onNavigate("financial")} className="sidebar-nav-item">
            <DollarSignIcon className="sidebar-icon" />
            Financeiro
          </a>
          <a href="#" onClick={() => onNavigate("marketing")} className="sidebar-nav-item">
            <TrendingUpIcon className="sidebar-icon" />
            Marketing
          </a>
          <a href="#" onClick={() => onNavigate("settings")} className="sidebar-nav-item">
            <BoxIcon className="sidebar-icon" />
            Configurações
          </a>
          <a href="#" onClick={() => onNavigate("commissions")} className="sidebar-nav-item">
            <ClipboardListIcon className="sidebar-icon" />
            Minhas Comissões
          </a>
          <a href="#" onClick={() => onNavigate("graphic-reports")} className="sidebar-nav-item">
            <BarChartIcon className="sidebar-icon" />
            Relatórios Gráficos
          </a>
          <a href="#" onClick={() => onNavigate("statistical-reports")} className="sidebar-nav-item">
            <BarChartIcon className="sidebar-icon" />
            Relatórios Estatístico
          </a>
          <a href="#" onClick={() => onNavigate("purchases")} className="sidebar-nav-item">
            <ShoppingCartIcon className="sidebar-icon" />
            Compras
          </a>
          <a href="#" onClick={() => onNavigate("accounts-payable")} className="sidebar-nav-item">
            <CreditCardIcon className="sidebar-icon" />
            Contas à Pagar
          </a>
          <a href="#" onClick={() => onNavigate("all-sales")} className="sidebar-nav-item">
            <ClipboardListIcon className="sidebar-icon" />
            Todas as Vendas
          </a>
          <a href="#" onClick={() => onNavigate("simple-commissions")} className="sidebar-nav-item">
            <DollarSignIcon className="sidebar-icon" />
            Comissões Simples
          </a>
          <a href="#" onClick={() => onNavigate("complete-commissions")} className="sidebar-nav-item">
            <DollarSignIcon className="sidebar-icon" />
            Comissões Completa
          </a>
          <a href="#" onClick={() => onNavigate("cash-registers")} className="sidebar-nav-item">
            <BoxIcon className="sidebar-icon" />
            Caixas
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
