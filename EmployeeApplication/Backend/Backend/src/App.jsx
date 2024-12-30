import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Addemp from './Components/Addemp'
import View from './Components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/Addemp' element={<Addemp/>} />
        <Route path='/View' element={<View/>} />
      </Routes>
    
     
      
    </>
  )
}

export default App
