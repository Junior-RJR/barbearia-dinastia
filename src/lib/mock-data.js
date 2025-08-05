export const MOCK_USERS = [
  { username: "nicolas", password: "123", name: "Nicolas", role: "Administrador" },
  { username: "wendel", password: "123", name: "Wendel", role: "Barbeiro" },
  { username: "rique", password: "123", name: "Rique", role: "Barbeiro" },
]

export const MOCK_SERVICES = [
  { id: "corte", name: "Corte de Cabelo", duration: 20 },
  { id: "barba", name: "Barba", duration: 20 },
  { id: "corte_barba", name: "Corte e Barba", duration: 40 },
  { id: "quimica", name: "Química", duration: 60 },
  { id: "lavagem", name: "Lavagem", duration: 10 },
]

export const MOCK_CLIENTS = [
  { id: "1", name: "João Silva", subscription: true, value: 120, lastCut: "2025-07-10", subscriptionStatus: "paid" },
  { id: "2", name: "Maria Oliveira", subscription: false, value: 0, lastCut: "2025-07-15", subscriptionStatus: "none" },
  {
    id: "3",
    name: "Pedro Souza",
    subscription: true,
    value: 120,
    lastCut: "2025-07-01",
    subscriptionStatus: "overdue",
  },
  { id: "4", name: "Ana Costa", subscription: true, value: 120, lastCut: "2025-07-20", subscriptionStatus: "paid" },
  { id: "5", name: "Carlos Pereira", subscription: false, value: 0, lastCut: "2025-07-05", subscriptionStatus: "none" },
  {
    id: "6",
    name: "Fernanda Lima",
    subscription: true,
    value: 120,
    lastCut: "2025-06-25",
    subscriptionStatus: "overdue",
  },
  {
    id: "7",
    name: "Gustavo Santos",
    subscription: true,
    value: 120,
    lastCut: "2025-07-18",
    subscriptionStatus: "paid",
  },
]

export const MOCK_APPOINTMENTS = [
  {
    id: "a1",
    barber: "Nicolas",
    client: "Ramon Araujo",
    phone: "(11) 97991-7675",
    serviceId: "corte_barba", // Using service ID
    time: "14:00",
    date: "2025-07-17",
  },
  {
    id: "a2",
    barber: "Nicolas",
    client: "Wellington",
    phone: "(11) 93930-6870",
    serviceId: "corte",
    time: "14:40", // Starts after Ramon's appointment
    date: "2025-07-17",
  },
  {
    id: "a3",
    barber: "Nicolas",
    client: "EDSON SOUZA",
    phone: "(11) 96985-8251",
    serviceId: "barba",
    time: "15:00",
    date: "2025-07-17",
  },
  {
    id: "a4",
    barber: "Nicolas",
    client: "Ricardo Bruno",
    phone: "(11) 96910-0556",
    serviceId: "corte",
    time: "15:40",
    date: "2025-07-17",
  },
  {
    id: "a5",
    barber: "Rique",
    client: "GIOVANE SILVA",
    phone: "(11) 98971-8693",
    serviceId: "corte_barba",
    time: "15:00",
    date: "2025-07-17",
  },
  {
    id: "a6",
    barber: "Rique",
    client: "GUILHERME VIEIRA",
    phone: "(11) 94646-3756",
    serviceId: "corte",
    time: "15:40",
    date: "2025-07-17",
  },
  {
    id: "a7",
    barber: "Wendel",
    client: "Lucas Mendes",
    phone: "(11) 98765-4321",
    serviceId: "corte",
    time: "10:00",
    date: "2025-07-17",
  },
  {
    id: "a8",
    barber: "Wendel",
    client: "Mariana Costa",
    phone: "(11) 91234-5678",
    serviceId: "barba",
    time: "10:20",
    date: "2025-07-17",
  },
]

export const MOCK_COMMISSIONS = [
  {
    barber: "Nicolas",
    totalSales: 3014.0,
    serviceCommission: 1553.0,
    productCommission: 0.0,
    subscriptionCommission: 302.04,
    extraPoints: 32,
    productPurchases: 0.0,
    totalVouchers: 0.0,
    paidCommissions: 385.0,
    pendingCommissions: 1168.0,
    balanceToReceive: 1470.04,
  },
  {
    barber: "Rique",
    totalSales: 925.0,
    serviceCommission: 462.5,
    productCommission: 0.0,
    subscriptionCommission: 160.46,
    extraPoints: 17,
    productPurchases: 0.0,
    totalVouchers: 0.0,
    paidCommissions: 462.5,
    pendingCommissions: 0.0,
    balanceToReceive: 160.46,
  },
  {
    barber: "Wendel",
    totalSales: 0.0,
    serviceCommission: 0.0,
    productCommission: 0.0,
    subscriptionCommission: 0.0,
    extraPoints: 0,
    productPurchases: 0.0,
    totalVouchers: 0.0,
    paidCommissions: 0.0,
    pendingCommissions: 0.0,
    balanceToReceive: 0.0,
  },
]

export const loginUser = (username, password) => {
  const user = MOCK_USERS.find((u) => u.username === username && u.password === password)
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user))
    return true
  }
  return false
}

export const getCurrentUser = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("currentUser")
    return user ? JSON.parse(user) : null
  }
  return null
}

export const logoutUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("currentUser")
  }
}

// Helper to get service details by ID
export const getServiceById = (serviceId) => {
  return MOCK_SERVICES.find((service) => service.id === serviceId)
}
