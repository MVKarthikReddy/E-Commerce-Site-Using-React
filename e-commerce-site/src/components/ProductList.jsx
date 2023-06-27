import React, { useState } from 'react'
import propTypes from 'prop-types'
import './productList.css'


export default function ProductList({product,addItemsToCart,search}) {

  const [popup,setPopup] = useState({
    "name" : "",
    "price" : "",
    "details" : ""
  })
  const [popupToggle,setPopupToggle] = useState(false)
  const popupContent = (pItem) => {

    // console.log(pItem)
    setPopup(pItem)
    setPopupToggle(true)
    // console.log(popup)

  }

  return (
    <div className='app-container'>
      <div  className='product-list'>
        {
              product.filter(pro => (pro.category).toLowerCase().includes(search.toLowerCase())).map((pItem,pIndex) => {

                return(

                              <div key={pIndex}  style={{width : '15%' }} className='product-item'>
                                    <div className='product-content'>
                                      <img src={pItem.url} width="100%" />
                                      <label id='brand' style={{fontWeight : '700',fontFamily : 'sans-serif',fontSize : '20px'}}>{pItem.brand}</label>
                                    </div>
                                    <div >
                                        <p className='product-details' id='product-name' onClick={() => {popupContent(pItem)}}>{pItem.name} | {pItem.category} </p>
                                        <p className='product-details' id='product-price'> Rs. {pItem.price} /-</p>
                                        <button onClick={() => {

                                                addItemsToCart(pItem)

                                            }}  className='add-button'>Add To Cart</button>
                                    </div>
                                  
                              </div>

            
                )

              })
        }
        </div>
          {popupToggle&&<div className='popup-container'>
            <div className='popup-body'>
              <div className='popup-header'>
                  <button className='add-button' style={{marginRight:'1%',marginTop:'1%'}} onClick={() => {
                    setPopupToggle(false)
                  }}>X</button>
              </div>
              <div className='popup-content'>

                  <div className='popup-card'>
                    <p className='alignment'><label className='popup-details'>Product Name :</label> {popup.name}</p>
                    <p className='alignment'><label className='popup-details'>Product Price : </label>Rs.{popup.price}/-</p>
                    <p className='alignment'><label className='popup-details'>Product Details :</label><br></br> {popup.details}</p>
                  </div>
                  
            </div>

          </div>
        </div>}
        
    </div>
  )
}

ProductList.propTypes = {
    product : propTypes.array,
    addItemsToCart : propTypes.func,
    search : propTypes.string
    }
  
  
