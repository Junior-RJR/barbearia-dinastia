"use client"

import { useState } from "react"
import "./LoginForm.css"
import { loginUser } from "../../lib/mock-data"
import logoDinastia from "../../images/logo-dinastia.png";

function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    if (loginUser(username, password)) {
      onLoginSuccess()
    } else {
      setError("Usuário ou senha inválidos.")
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src={logoDinastia || "/placeholder.svg"} alt="Barbearia Dinastia Logo" className="login-logo" />
          <h1 className="login-title">Barbearia Dinastia</h1>
          <p className="login-description">Acesse o painel dos barbeiros</p>
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit} className="login-form">
            <div>
              <label htmlFor="username" className="sr-only">
                Usuário
              </label>
              <input
                id="username"
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="login-input"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
            </div>
            {error && <p className="login-error">{error}</p>}
            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
