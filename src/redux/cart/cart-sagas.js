import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import userActionTypes from "../user/user-constants";
import { clearCart } from "./cart-action";


export function* clearCartOnSignOut() {
    yield put(clearCart());
  }
  
  export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
  }
  
  export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
  }