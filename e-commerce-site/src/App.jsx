import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import ProductDes from './components/ProductDes'
import Ecart from './components/Ecart'
import ProductList from './components/ProductList'



function App() {

  const [product , setProduct] = useState({})

  
 
 

  return (
    <>
      
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<div><Navbar/><ProductList product = {product}/></div>} />
          <Route path='/cart' element={<Ecart/>} />
          <Route path='/submit_form' element={<ProductDes/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
