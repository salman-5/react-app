import { useState } from 'react'
import reactLogo from './assets/emital-logo.png'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Navbar'
import Welcome from './components/Welcome'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-0 p-0 bg-slate-400'>
    
    <Welcome/>

    </div>
  );
}

