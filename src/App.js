import './App.css';
import HomePage from './pages/Homepage/HomePage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header';
import SignInOut from './pages/sign-in-out/SignInOut';
import React, { Component } from 'react'
import { auth, createUserProfileDocument } from './firebase/firebase';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }
  unSubcribeFromAuth = null;
  componentDidMount() {
    this.unSubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
          console.log(this.state)
        })
      }
      this.setState({currentUser: userAuth})
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
