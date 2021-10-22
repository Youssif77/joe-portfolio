import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products/Products";
import Counter from "./components/Counter/Counter";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import Todos from "./components/Todos/Todos";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div> Home </div>
        </Route>
        <Route path="/counter" component={Counter} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/todos" component={Todos} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
