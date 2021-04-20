import './App.css';
import HomePage from './pages/Homepage/HomePage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header';
import SignInOut from './pages/sign-in-out/SignInOut';
import React, { Component } from 'react'
import { auth } from './firebase/firebase';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }
  unSubcribeFromAuth = null;
  componentDidMount() {
    this.unSubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user},console.log(this.state.currentUser))
    })
  }
  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }
  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInOut} />
        </Switch>    
      </div>
    )
  }
}

export default App;
