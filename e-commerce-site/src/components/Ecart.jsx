import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import Navbar from './Navbar'
import {RiDeleteBinLine} from 'react-icons/ri'
import './Ecart.css'



export default function Ecart({cartItems,count,deleteItemsFromCart}) {

    const [items , setItems] = useState(cartItems)
    const [total, setTotal] = useState()
    const [toggle,setToggle] = useState(false)
    // const [totalCount,setTotalCount] = useState(count)

    useEffect(() => {
        let totalPrice = 0
        // let c = 0;

        for (const item of items) {
            totalPrice += Number(item.price)*(item.itemCount);
            // c += item
          }
        //   setTotalCount(c)
          setTotal(totalPrice)
          
          console.log(totalPrice)

    },[items,total])

    useEffect(() => {
        setToggle(true)
    },[total])



  return (
    <div>
        <Navbar count={count}/>
        {
            items?.map((item,itemIndex) => {

                return(

                       
                        <div key={itemIndex} className='cart-item'>
                            
                            <div className='item-details'>
                                    <div className='image-name'>
                                        <img src={item.url} width={65} />
                                        <div> <span>{item.name}</span> </div>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => {
                                                let dummy = items.map((cartItem , cartIndex) => {
                                                    return cartIndex === itemIndex ? {...cartItem, itemCount : item.itemCount > 1 ? item.itemCount-1 : 0} : cartItem
                                                })
                                                setItems(dummy)
                                            }}
                                        >-</button>
                                        <span> {item.itemCount} </span>
                                        <button
                                            onClick={() => {

                                                let dummy = items.map((cartItem , cartIndex) => {
                                                    return cartIndex === itemIndex ? {...cartItem, itemCount : item.itemCount + 1} : cartItem
                                                })
                                                setItems(dummy)
                                            
                                            }}
                                        >+</button>
                                        <button onClick={ () => {
                                                
                                                deleteItemsFromCart(itemIndex,setItems)
                                              
                                        }}><label><RiDeleteBinLine/></label></button>
                                    </div>
                            </div>  
                                    
                        </div>
                            
                       
                    
                )
            
            })
        }
        {toggle&&<div className='item-price' >
            <span id='total-price'>Total Price : Rs.{total}/-</span>
            <button style={{border:'none',padding:'2%',backgroundColor:'gray',borderRadius:'5px',color:'white',cursor:'pointer'}} onClick={() => {alert("order successfully placed")}} >check out</button>
        </div>}
    </div>
    
  )
}

Ecart.propTypes = {
    
     cartItems : propTypes.array,
     count : propTypes.number,
     deleteItemsFromCart : propTypes.func
    }
