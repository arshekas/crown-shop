import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header';
import SignInOut from './pages/sign-in-out/SignInOut';

import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import Checkout from './pages/checkout/Checkout';
import { checkUserSession } from './redux/user/user-action';

export const App = ({checkUserSession, currentUser}) => {
    // unSubcribeFromAuth = null;

    // componentDidMount() {
    //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   //   if (userAuth) {
    //   //     const userRef = await createUserProfileDocument(userAuth);
  
    //   //     userRef.onSnapshot(snapShot => {
    //   //       setCurrentUser({
    //   //         id: snapShot.id,
    //   //         ...snapShot.data()
    //   //       });
    //   //     });
    //   //   }
  
    //   //   setCurrentUser(userAuth);
    //   //   // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
    //   // });
    //   const { checkUserSession } = this.props;
    //   checkUserSession();
    // }
  // componentWillUnmount() {
  //   this.unSubcribeFromAuth();
  // }
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={Checkout} />
        <Route exact path='/signin' render={()=> currentUser ? (<Redirect to='/' />) : (<SignInOut />)} />
      </Switch>    
    </div>
  )
}
//helloo
const mapStateToProps =  createStructuredSelector(
  {
    currentUser: selectCurrentUser
    // collectionsArray: selectShopCollectionForPreview
  }
)
// const mapStateToProps = ({user}) => (
//   {
//     currentUser: user.currentUser
//   }
// )
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
