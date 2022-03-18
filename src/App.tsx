import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Showinfo from './components/Showinfo'
import type { Product } from './types/product'
import { Route ,NavLink, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductAdd from './pages/ProductAdd'
import { add, list } from './api/product'

function App() {
  
  const [products, setProducts] = useState<{_id:Number, name: String}[]>([])
    useEffect(() =>{
      const getProducts = async () => {
        const { data } = await list();
        setProducts(data)
      }
      getProducts()
    },[])

    const onHandleAdd = async (product:any) => {
      console.log('app.s', product)

      const {data} = await add(product)

      setProducts([...products, data])
    }



  return (
    <div className="App">
      {/* {count} <button onClick={() => setCount(count+1)}>Click</button>
      <Showinfo person={info} /> */}
      <header>
        <ul>
          <li><NavLink to="/">Home Page</NavLink></li>
          <li><NavLink to="/product">Product Page</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element ={<HomePage/>}></Route>
          <Route path="product" element ={<ProductPage/>}></Route>
          <Route path="about" element ={<AboutPage/>}></Route> */}
          <Route path='/' element={<WebsiteLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='product' element={<ProductPage/>} />
            <Route path='product/add' element={<ProductAdd name="Dũng" onAdd={onHandleAdd}/>} />
          </Route>
          <Route path='admin' element={<AdminLayout/>}>
            <Route index element={<Navigate to ='/admin/dashboard'/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
