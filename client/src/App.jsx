import { useState } from 'react'
import './App.css'
import './index.css'
import './style.css'
import Entry from './components/Entry'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-image'>
      <Home/>
    </div>
  )
}

export default App
