import { useEffect, useRef } from 'react'
import './App.css'
import apiInstance from './api/api'

function App() {

  const form = useRef(null)


  const fetchCurrentUser = async () => {
    try {
      const { data: user } = await apiInstance.get("/api/user")

      console.log(user)
    } catch (error) {
      console.error(error)
    }

  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(form.current)
    await apiInstance.get("/sanctum/csrf-cookie", {
      withCredentials: true
    })

    try {
      const data = await apiInstance.post("/api/login", formData)

      console.log(data)
    } catch (error) {
      console.error(error)

    }

  }

  return (
    <form ref={form}>
      <input name="email"></input>
      <input name="password"></input>
      <button type='submit' onClick={handleFormSubmit}>Login</button>
      <button type='button' onClick={async () => await fetchCurrentUser()}>Fetch User</button>
    </form>
  )
}

export default App
