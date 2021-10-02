import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound'
import PlaceOrder from './components/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div >

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/orders">
            <Order></Order>
          </Route>
          <Route exact path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path='/placeorder'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>

          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
