import cartActionTypes from "./cart-constants"

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = (item) => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItem = (item) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})

export const updateCartInFirebase = () => ({
    type: cartActionTypes.UPDATE_CART_IN_FIREBASE
  });
  
  export const setCartFromFirebase = cartItems => ({
    type: cartActionTypes.SET_CART_FROM_FIREBASE,
    payload: cartItems
  });