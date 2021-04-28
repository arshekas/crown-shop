import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import { GlobalStyle } from './global.styles'
import React, { lazy, useEffect } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-action';
import Contact from './components/contact/Contact'
import { Suspense } from 'react';
import Spinner from './components/spinner/Spinner';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'))
const Checkout = lazy(() => import('./pages/checkout/Checkout'))
const SignInOut = lazy(() => import('./pages/sign-in-out/SignInOut'))
const ShopPage = lazy(() => import('./pages/shop/ShopPage'))

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
    <GlobalStyle />
      <Header/>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/contact' component={Contact} />
            <Route path='/checkout' component={Checkout} />
            <Route exact path='/signin' render={()=> currentUser ? (<Redirect to='/' />) : (<SignInOut />)} />
          </Suspense>
        </ErrorBoundary>
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
