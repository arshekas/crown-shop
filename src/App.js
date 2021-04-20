import './App.css';
import HomePage from './pages/Homepage/HomePage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage'


function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>    
  </div>
  );
}

export default App;
