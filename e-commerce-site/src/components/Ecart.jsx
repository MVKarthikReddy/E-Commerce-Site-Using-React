import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import Navbar from './Navbar'


export default function Ecart({cartItems,count}) {

    const [items , setItems] = useState(cartItems)
    const [total, setTotal] = useState(0)
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
  return (
    <div>
        <Navbar count={count}/>
        {
            items?.map((item,itemIndex) => {

                return(

                    <div key={item.id}>
                            <img src={item.url} width={65} />
                            <span> {item.name} </span>
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
                            
                    </div>
                )
            
            })
        }
    </div>
  )
}

Ecart.propTypes = {
    
     cartItems : propTypes.array,
     count : propTypes.number
    }
