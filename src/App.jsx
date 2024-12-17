import { useState } from 'react'
import LoduBoard from './LoduBoard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoduBoard/>
    </>
  )
}

export default App
