import React from 'react'
import propTypes from 'prop-types'
import './productList.css'


export default function ProductList({product,addItemsToCart,search}) {
  return (
    <>
    <div  className='product-list'>
       {
            product.filter(pro => (pro.category).toLowerCase().includes(search.toLowerCase())).map((pItem,pIndex) => {

               return(
                <div key={pIndex}  style={{width : '17%' }} >
                
                            <div className='product-item'>
                                <img src={pItem.url} width="100%" />
                                <label id='brand' style={{fontWeight : '700',fontFamily : 'sans-serif',fontSize : '20px'}}>{pItem.brand}</label>
                                <div >
                                    <p className='product-details' id='product-name'>{pItem.name} | {pItem.category} </p>
                                    <p className='product-details' id='product-price'> Rs. {pItem.price} /-</p>
                                    <button onClick={() => {

                                            addItemsToCart(pItem)

                                        }}>Add To Cart</button>
                                </div>
                            </div>
                    
                </div>
               )

            })
       }
    </div>
    </>
  )
}

ProductList.propTypes = {
    product : propTypes.array,
    addItemsToCart : propTypes.func,
    search : propTypes.string
    }
  
  
