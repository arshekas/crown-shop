import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header';
import SignInOut from './pages/sign-in-out/SignInOut';

import React, { Component } from 'react'
import { auth, createUserProfileDocument } from './firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import Checkout from './pages/checkout/Checkout';

export class App extends Component {
    unSubcribeFromAuth = null;

    componentDidMount() {
      const { setCurrentUser } = this.props;
  
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
  
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }
  
        setCurrentUser(userAuth);
      });
    }
  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }
  render() {
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInOut />)} />
        </Switch>    
      </div>
    )
  }
}
//helloo
const mapStateToProps =  createStructuredSelector(
  {
    currentUser: selectCurrentUser
  }
)
// const mapStateToProps = ({user}) => (
//   {
//     currentUser: user.currentUser
//   }
// )

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
