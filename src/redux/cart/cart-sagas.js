
import { all, call, takeLatest, put, select } from 'redux-saga/effects';import { getUserCartRef } from "../../firebase/firebase";
import userActionTypes from "../user/user-constants";
import { selectCurrentUser } from '../user/user-selectors';
import { clearCart, setCartFromFirebase } from "./cart-action";
import cartActionTypes from './cart-constants';
import { selectCartItems } from './cart-selectors';

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* clearCartOnSignOut() {
    yield put(clearCart());
  }
  
  export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
  }

  export function* onUserSignIn() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [
      cartActionTypes.ADD_ITEM,
      cartActionTypes.REMOVE_ITEM,
      cartActionTypes.CLEAR_ITEM_FROM_CART
    ],
    updateCartInFirebase
  );
}
  export function* cartSagas() {
    yield all([call(onSignOutSuccess),  call(onCartChange), call(onUserSignIn)]);
  }