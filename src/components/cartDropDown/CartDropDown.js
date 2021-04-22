import './CartDropDown.scss'
import React from 'react'
import CustomButton from '../customButton/CustomButton'
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart-selectors'

function CartDropDown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// })
export default connect(mapStateToProps)(CartDropDown)
