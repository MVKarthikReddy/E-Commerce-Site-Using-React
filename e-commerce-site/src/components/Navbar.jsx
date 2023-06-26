import React, { useState } from 'react'
import './Navbar.css'
import {TiShoppingCart} from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import propTypes from 'prop-types'


export default function Navbar(props) {
   
    const navigate = useNavigate()

  return (
    <div className='nav-element'>
        <div className='nav-bar'>
            <div className='logo'>E-Cart</div>
            <div>
                <input className='inputField searchBar' type="text" autoComplete='off' name="searchBar" placeholder='Search' value={props.search} onChange={(e) => props.setSearch(e.target.value)}/><br></br>
            </div>
            <div className='menu-items'>
                <div className='cart' onClick={() => {navigate('/')}}><label className='cur'>Home</label></div>
                <div className='cart' onClick={() => {navigate('/cart')}}><label className='cur'>cart</label><label className='cur'><TiShoppingCart/><sup>{props.count}</sup></label></div>
            </div>
        </div>
    </div>
  )
}

Navbar.propTypes = {
    count : propTypes.number,
    search : propTypes.string,
    setSearch : propTypes.func
}

