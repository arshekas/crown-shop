import './CartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import React from 'react'
import { toggleCartHidden } from '../../redux/cart/cart-action';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

function CartIcon({toggleCartHidden, itemCount}) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
