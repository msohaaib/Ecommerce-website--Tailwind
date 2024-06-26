import { useState } from 'react'
import './App.css'
import { Analytics } from "@vercel/analytics/react"
import Header from './Components/Header'
import Hero from './Components/Hero'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
    </>
  )
}

export default App
