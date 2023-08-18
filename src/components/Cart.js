import React from 'react'
import './Cart.css';

export default function Cart(props) {
    
  return (
    <div className='article'>
    {
         props.array.map((item)=>(
       <div>
        {item.Name},
        {item.Description},
        {item.Price}
       </div>

        
     ))
    }
    </div>
  

  )
}
