import { useState } from 'react'
import {Routes, Route} from 'react-router'
import './App.css'
import Home from "./components/Home"
import Create from "./components/create"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>

      </Routes>
   
    </>
  )
}

export default App
