import './CartDropDown.scss'
import React from 'react'
import CustomButton from '../customButton/CustomButton'

function CartDropDown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropDown
