import { useState } from 'react'
import './App.css'
import Header from './assets/Components/Header'
import Hero from './assets/Components/Hero'



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
