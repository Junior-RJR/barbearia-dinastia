"use client"

import { useState } from "react"
import "./CommissionsView.css"
import { MOCK_COMMISSIONS } from "../../lib/mock-data"
import userPlaceholder from "../../images/placeholder-user.png" // Import the image

// Lucide React icons (simplified for pure React)
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

function CommissionsView() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCommissions = MOCK_COMMISSIONS.filter((commission) =>
    commission.barber.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="commissions-container">
      <div className="commissions-header">
        <h1 className="commissions-title">Detalhamento de Comissões</h1>
        <div className="commissions-search-wrapper">
          <SearchIcon className="commissions-search-icon" />
          <input
            type="text"
            placeholder="Buscar barbeiro..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="commissions-search-input"
          />
        </div>
      </div>

      <div className="commissions-card">
        <div className="commissions-card-header">
          <h2 className="commissions-card-title">Comissões dos Barbeiros</h2>
          <p className="commissions-card-description">Visão detalhada das comissões por barbeiro.</p>
        </div>
        <div className="commissions-card-content">
          <div className="commissions-table-wrapper">
            <table>
              <thead>
                <tr>
                  <th className="commissions-table-head min-w-120">Colaborador</th>
                  <th className="commissions-table-head min-w-120">Total em Vendas</th>
                  <th className="commissions-table-head min-w-120">Comissão Serviços</th>
                  <th className="commissions-table-head min-w-120">Comissão Produtos</th>
                  <th className="commissions-table-head min-w-120">Comissão Assinaturas</th>
                  <th className="commissions-table-head min-w-100">Pontos Extras</th>
                  <th className="commissions-table-head min-w-120">Compras de Produtos</th>
                  <th className="commissions-table-head min-w-120">Total em Vales</th>
                  <th className="commissions-table-head min-w-120">Comissões Pagas</th>
                  <th className="commissions-table-head min-w-120">Comissões Pendentes</th>
                  <th className="commissions-table-head min-w-120">Saldo a Receber</th>
                </tr>
              </thead>
              <tbody>
                {filteredCommissions.length > 0 ? (
                  filteredCommissions.map((commission) => (
                    <tr key={commission.barber}>
                      <td className="commissions-table-cell-barber">
                        <img
                          src={userPlaceholder || "/placeholder.svg"}
                          alt={commission.barber}
                          className="commissions-barber-avatar"
                        />
                        {commission.barber}
                      </td>
                      <td>R$ {commission.totalSales.toFixed(2)}</td>
                      <td>R$ {commission.serviceCommission.toFixed(2)}</td>
                      <td>R$ {commission.productCommission.toFixed(2)}</td>
                      <td>R$ {commission.subscriptionCommission.toFixed(2)}</td>
                      <td>{commission.extraPoints}</td>
                      <td>R$ {commission.productPurchases.toFixed(2)}</td>
                      <td>R$ {commission.totalVouchers.toFixed(2)}</td>
                      <td>R$ {commission.paidCommissions.toFixed(2)}</td>
                      <td>R$ {commission.pendingCommissions.toFixed(2)}</td>
                      <td className="commissions-balance">R$ {commission.balanceToReceive.toFixed(2)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="11" className="commissions-no-data">
                      Nenhum dado de comissão encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommissionsView
