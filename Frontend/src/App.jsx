import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componenets/navbar'
import Homepage from './Pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
  <Navbar/>
  <Homepage/>
</div>
    </>
  )
}

export default App
