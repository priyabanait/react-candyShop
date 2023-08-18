
import './Header.css'
import React from 'react';

const Header = (props) => {
  
  return (
    <header>
        <div className="nav_box">
            <div className="my_shop" onClick={()=>props.handleCart(false)}>
               Candy Shop
            </div>
            <div className="cart"  onClick={()=>props.handleCart(true)}>
                
                <span>
                    Your Cart <i className="fas fa-cart-plus"></i>
                </span>
                <span>{props.count}</span>
            </div>
        </div>
        
    </header>
  )
}

export default Header
