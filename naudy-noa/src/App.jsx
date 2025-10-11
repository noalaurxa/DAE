import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Platillo from './components/Platillo'

function App() {
  return (
    <div>
      <h1>Menú del Día</h1>
      <Platillo />
    </div>
  )
}

export default App


