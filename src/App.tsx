import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Showinfo from './components/Showinfo'
import type { ProductType } from './types/product'
import type { UserType } from './types/user'
import { Route ,NavLink, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductAdd from './pages/ProductAdd'
import { add, list, remove, update } from './api/product'
import ProductManager from './pages/ProductManager'
import ProductEdit from './pages/ProductEdit'
import PrivateRouter from './components/PrivateRouter'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  
  const [products, setProducts] = useState<ProductType[]>([])
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

    const onHandleRemove = async (id: number) => {
      remove(id)
      setProducts(products.filter(item => item.id !== id))
    }

    const onHandleUpdate = async (product: ProductType) => {
      try {
        const {data} = await update(product);
        setProducts(products.map(item => item.id ===data.id ? product : item))
      } catch (error) {
        
      }
    }

    const [users, setUsers] = useState<UserType[]>([])
    useEffect(() =>{
      const getUsers = async () => {
        const { data } = await list();
        setUsers(data)
      }
      getUsers()
    },[])



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
          </Route>
          <Route path='admin' element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
            <Route index element={<Navigate to ='/admin/dashboard'/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='product'>
              <Route index element={<ProductManager products={products} onRemove={onHandleRemove}/>}/>
              <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate}/> } />
              <Route path='add' element={<ProductAdd onAdd={onHandleAdd}/>} />
            </Route>
          </Route>
          <Route path='/signup' element= {<SignUp/>} />
          <Route path='/signin' element= {<SignIn/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
