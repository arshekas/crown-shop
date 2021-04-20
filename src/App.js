import './App.css';
import HomePage from './pages/Homepage/HomePage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header';


function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>    
  </div>
  );
}

export default App;
