"use client"

import { useState } from "react"
import "./SubscriptionsView.css"
import { MOCK_CLIENTS } from "../../lib/mock-data"

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

function SubscriptionsView() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredClients = MOCK_CLIENTS.filter(
    (client) => client.name.toLowerCase().includes(searchTerm.toLowerCase()) && client.subscription,
  )

  return (
    <div className="subscriptions-container">
      <div className="subscriptions-header">
        <h1 className="subscriptions-title">Clientes por Assinatura</h1>
        <div className="subscriptions-search-wrapper">
          <SearchIcon className="subscriptions-search-icon" />
          <input
            type="text"
            placeholder="Buscar cliente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="subscriptions-search-input"
          />
        </div>
      </div>

      <div className="subscriptions-card">
        <div className="subscriptions-card-header">
          <h2 className="subscriptions-card-title">Assinaturas Ativas</h2>
          <p className="subscriptions-card-description">Lista de clientes com assinatura mensal de R$120,00.</p>
        </div>
        <div className="subscriptions-card-content">
          <div className="subscriptions-table-wrapper">
            <table>
              <thead>
                <tr>
                  <th className="subscriptions-table-head">Cliente</th>
                  <th className="subscriptions-table-head">Assinatura</th>
                  <th className="subscriptions-table-head">Valor Mensal</th>
                  <th className="subscriptions-table-head">Último Corte</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.length > 0 ? (
                  filteredClients.map((client) => (
                    <tr key={client.id}>
                      <td className="subscriptions-table-cell-name">{client.name}</td>
                      <td>
                        {client.subscription ? (
                          <span className="badge badge-active">Ativa</span>
                        ) : (
                          <span className="badge badge-inactive">Inativa</span>
                        )}
                      </td>
                      <td>R$ {client.value.toFixed(2)}</td>
                      <td>{client.lastCut}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="subscriptions-no-data">
                      Nenhum cliente com assinatura encontrado.
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

export default SubscriptionsView
