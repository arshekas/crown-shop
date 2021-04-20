import './App.css';
import HomePage from './pages/Homepage/HomePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header';
import SignInOut from './pages/sign-in-out/SignInOut';
import React, { Component } from 'react'
import { auth, createUserProfileDocument } from './firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action'

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
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInOut />)} />
        </Switch>    
      </div>
    )
  }
}
//helloo
const mapStateToProps = ({user}) => (
  {
    currentUser: user.currentUser
  }
)

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
