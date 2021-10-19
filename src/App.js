import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CounterContainer from "./components/CounterContainer/CounterContainer";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>HOME</div>
        </Route>
        <Route path="/counter" component={CounterContainer} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
