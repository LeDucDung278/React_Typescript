import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Showinfo from './components/Showinfo'
import type { Product } from './types/product'

function App() {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState<Product>({
    name: "Dũng",
    age : 20
  })


  return (
    <div className="App">
      {count} <button onClick={() => setCount(count+1)}>Click</button>
      <Showinfo person={info} />
    </div>
  )
}

export default App
