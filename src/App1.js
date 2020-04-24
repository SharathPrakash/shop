import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
                <Switch>
                    <Route exact path="/api/shop/category/proxelo1/shop" component={Home}/>
                    <Route path="/api/shop/category/proxelo2/shop/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
