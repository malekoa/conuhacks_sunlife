import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-full justify-center items-center'>
      <span className='text-5xl font-bold'>Sunlife Project</span>
    </div>
  )
}

export default App
