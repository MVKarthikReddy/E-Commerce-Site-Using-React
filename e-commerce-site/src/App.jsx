import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import ProductDes from './components/ProductDes'
import Ecart from './components/Ecart'
import ProductList from './components/ProductList'
import axios from 'axios'



function App() {

  const [product , setProduct] = useState([])
  const [cartItems , setCartItems] = useState([])
  const [search , setSearch] = useState("")


  // Adding items to the cart

  const addItemsToCart = (item) => {

    
    // console.log(cartItems.toString()==[].toString())
    if(cartItems.toString()==[].toString())
    {
        setCartItems([...cartItems,{...item,itemCount : 1}])
    }
    else{
      
      for(let i=0;i<cartItems.length;i++)
      {
        
        if(cartItems[i].id===item.id)
        {
          alert("Item already in the cart")
          
          return
        }
        
      }
    
      setCartItems([...cartItems,{...item,itemCount : 1}])
      
    }


  }

  const deleteItemsFromCart = (index,setItems) => {
    if(window.confirm("Press OK to remove the item from cart")===true)
    {
        let array = [...cartItems]
        array.splice(index,1)
        setCartItems(array)
        setItems(array)
       
    }
  }
  

  useEffect(() => {

      function getProducts(){
  
        // Fetching product details from local api

        axios.get('http://localhost:3000/products').then(
          (data) => {
            setProduct(data.data)
            // console.log(product)
          }
        ).catch( error => console.log(error))
    }

    getProducts()


  },[])


  return (
    <>
      
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<div><Navbar count={cartItems.length} search={search} setSearch={setSearch}/><ProductList product={product}  addItemsToCart={addItemsToCart} search={search}/></div>} />
          <Route path='/cart' element={<Ecart cartItems={cartItems} count={cartItems.length} deleteItemsFromCart={deleteItemsFromCart}/>} />
          <Route path='/submit_form' element={<ProductDes/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
