import React, { useState } from 'react'
import './Navbar.css'
import {TiShoppingCart} from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

    const [search,setSearch] = useState("")
    const navigate = useNavigate()

  return (
    <div className='nav-element'>
        <div className='nav-bar'>
            <div className='logo'>E-Cart</div>
            <div>
                <input className='inputField searchBar' type="text" autoComplete='off' name="searchBar" placeholder='Search ' value={search} onChange={(e) => setSearch(e.target.value)}/><br></br>
            </div>
            <div className='cart' onClick={() => {navigate('/cart')}}><label className='cur'>cart</label><label className='cur'><TiShoppingCart/></label></div>
        </div>
    </div>
  )
}
