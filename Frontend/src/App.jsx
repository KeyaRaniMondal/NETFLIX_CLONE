import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componenets/navbar'
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router'
import MoviePage from './Pages/MoviePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/movie/:id' element={<MoviePage/>}/>
  </Routes>
</div>
    </>
  )
}

export default App
