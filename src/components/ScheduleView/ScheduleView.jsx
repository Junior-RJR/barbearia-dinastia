import "./ScheduleView.css"
import { MOCK_APPOINTMENTS, MOCK_USERS, getServiceById } from "../../lib/mock-data"
import userPlaceholder from "../../images/placeholder-user.png" // Import the image

// Lucide React icons (simplified for pure React)
const CalendarIcon = () => (
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
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>
)
const ChevronLeftIcon = () => (
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
    <path d="m15 18-6-6 6-6"></path>
  </svg>
)
const ChevronRightIcon = () => (
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
    <path d="m9 18 6-6-6-6"></path>
  </svg>
)
const SettingsIcon = () => (
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
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.28a2 2 0 0 0 .73 2.73l.04.02a2 2 0 0 1 .97 1.94v.34a2 2 0 0 1-.97 1.94l-.04.02a2 2 0 0 0-.73 2.73l.78 1.28a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.28a2 2 0 0 0-.73-2.73l-.04-.02a2 2 0 0 1-.97-1.94v-.34a2 2 0 0 1 .97-1.94l.04-.02a2 2 0 0 0 .73-2.73l-.78-1.28a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25A2 2 0 0 1 12.22 2Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
)
const LockIcon = () => (
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
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
)

function ScheduleView() {
  const barbers = MOCK_USERS.filter((user) => user.role === "Barbeiro" || user.role === "Administrador").map(
    (user) => user.name,
  )
  const timeSlots = Array.from({ length: (20 - 8) * 6 }, (_, i) => {
    // From 8:00 to 20:00, every 10 minutes
    const hour = Math.floor(i / 6) + 8
    const minute = (i % 6) * 10
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`
  })

  const today = new Date("2025-07-17") // Mock date for consistency with screenshot
  const formattedDate = today.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const getAppointmentForBarberAndTime = (barberName, time) => {
    const appointment = MOCK_APPOINTMENTS.find(
      (app) => app.barber === barberName && app.time === time && app.date === "2025-07-17",
    )
    if (appointment) {
      const service = getServiceById(appointment.serviceId)
      return { ...appointment, serviceName: service?.name, duration: service?.duration }
    }
    return null
  }

  // Keep track of occupied slots to prevent rendering multiple times for one appointment
  const occupiedSlots = new Set()

  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <h1 className="schedule-title">Agenda</h1>
        <div className="schedule-controls">
          <button className="schedule-button-outline">
            <ChevronLeftIcon className="schedule-icon" />
          </button>
          <button className="schedule-button-outline">Hoje</button>
          <button className="schedule-button-outline">
            <ChevronRightIcon className="schedule-icon" />
          </button>
          <button className="schedule-button-outline">
            <LockIcon className="schedule-icon-mr" />
            Bloqueio de horário
          </button>
          <span className="schedule-date">{formattedDate}</span>
          <button className="schedule-button-outline">Bloquear horário</button>
          <button className="schedule-button-outline">
            <CalendarIcon className="schedule-icon" />
          </button>
          <button className="schedule-button-outline">
            <SettingsIcon className="schedule-icon" />
          </button>
        </div>
      </div>

      <div className="schedule-grid-wrapper">
        {/* Time Slots Column */}
        <div className="schedule-time-column">
          <div className="schedule-time-header"></div> {/* Header empty space */}
          {timeSlots.map((time) => (
            <div key={time} className="schedule-time-slot">
              {time}
            </div>
          ))}
        </div>

        {/* Barbers Columns */}
        <div
          className="schedule-barbers-grid"
          style={{ gridTemplateColumns: `repeat(${barbers.length}, minmax(200px, 1fr))` }}
        >
          {barbers.map((barber) => (
            <div key={barber} className="schedule-barber-column">
              <div className="schedule-barber-header">
                <img src={userPlaceholder || "/placeholder.svg"} alt={barber} className="schedule-barber-avatar" />
                {barber}
              </div>
              {timeSlots.map((time) => {
                const slotKey = `${barber}-${time}`
                if (occupiedSlots.has(slotKey)) {
                  return null // Skip rendering if this slot is part of an already rendered appointment
                }

                const appointment = getAppointmentForBarberAndTime(barber, time)
                const isLunchBreak =
                  (barber === "Wendel" && time === "13:00") || (barber === "Rique" && time === "13:00") // Mock lunch break
                const isBlocked = (barber === "Wendel" && time === "13:10") || (barber === "Rique" && time === "13:10") // Mock blocked time

                let cellContent = null
                let cellClasses = "schedule-cell"

                if (appointment && appointment.duration) {
                  const durationInSlots = appointment.duration / 10 // 10 minutes per slot
                  const backgroundColorClass =
                    barber === "Nicolas" ? "bg-blue" : barber === "Rique" ? "bg-green" : "bg-gray"
                  cellContent = (
                    <div
                      className={`schedule-appointment ${backgroundColorClass}`}
                      style={{ height: `${durationInSlots * 40}px`, zIndex: 1 }}
                    >
                      <p className="schedule-appointment-text-bold">{appointment.client}</p>
                      <p className="schedule-appointment-text">{appointment.phone}</p>
                      <p className="schedule-appointment-text">{appointment.serviceName}</p>
                      {(appointment.client === "GIOVANE SILVA" || appointment.client === "Ricardo Bruno") && (
                        <span className="schedule-star">⭐</span>
                      )}
                    </div>
                  )
                  // Mark all slots covered by this appointment as occupied
                  const startIndex = timeSlots.indexOf(time)
                  for (let i = 0; i < durationInSlots; i++) {
                    if (startIndex + i < timeSlots.length) {
                      occupiedSlots.add(`${barber}-${timeSlots[startIndex + i]}`)
                    }
                  }
                } else if (isLunchBreak) {
                  cellContent = <span className="schedule-lunch-break">Obs: Intervalo de almoço</span>
                  cellClasses += " bg-light-gray"
                } else if (isBlocked) {
                  cellContent = <span className="schedule-blocked">Bloqueado</span>
                  cellClasses += " bg-light-red"
                } else {
                  cellContent = <span className="schedule-empty-slot">Sem Clientes</span>
                }

                return (
                  <div key={slotKey} className={cellClasses}>
                    {cellContent}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScheduleView
