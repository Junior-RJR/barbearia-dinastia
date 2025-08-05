import "./DashboardView.css"
import { MOCK_APPOINTMENTS, MOCK_CLIENTS, MOCK_SERVICES } from "../../lib/mock-data"

function DashboardView() {
  const totalClients = MOCK_CLIENTS.length
  const activeSubscriptions = MOCK_CLIENTS.filter((c) => c.subscription && c.subscriptionStatus === "paid").length
  const overdueSubscriptions = MOCK_CLIENTS.filter((c) => c.subscription && c.subscriptionStatus === "overdue").length
  const totalAppointmentsToday = MOCK_APPOINTMENTS.filter((a) => a.date === "2025-07-17").length
  const totalSalesToday = MOCK_APPOINTMENTS.reduce((sum, app) => {
    const service = MOCK_SERVICES.find((s) => s.id === app.serviceId)
    return sum + (service ? 50 : 0) // Mock value for sales per service
  }, 0)

  const getServiceById = (serviceId) => {
    return MOCK_SERVICES.find((service) => service.id === serviceId)
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2 className="dashboard-card-title">Total de Clientes</h2>
          <p className="dashboard-card-value">{totalClients}</p>
        </div>
        <div className="dashboard-card">
          <h2 className="dashboard-card-title">Assinaturas Ativas</h2>
          <p className="dashboard-card-value">{activeSubscriptions}</p>
        </div>
        <div className="dashboard-card">
          <h2 className="dashboard-card-title">Assinaturas Atrasadas</h2>
          <p className="dashboard-card-value overdue">{overdueSubscriptions}</p>
        </div>
        <div className="dashboard-card">
          <h2 className="dashboard-card-title">Agendamentos Hoje</h2>
          <p className="dashboard-card-value">{totalAppointmentsToday}</p>
        </div>
        <div className="dashboard-card">
          <h2 className="dashboard-card-title">Vendas do Dia</h2>
          <p className="dashboard-card-value">R$ {totalSalesToday.toFixed(2)}</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h2 className="dashboard-section-title">Próximos Agendamentos</h2>
        <div className="dashboard-appointments-list">
          {MOCK_APPOINTMENTS.filter((a) => a.date === "2025-07-17")
            .slice(0, 5)
            .map((app) => (
              <div key={app.id} className="dashboard-appointment-item">
                <span>
                  {app.time} - {app.client} ({app.barber})
                </span>
                <span className="dashboard-appointment-service">{getServiceById(app.serviceId)?.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardView
