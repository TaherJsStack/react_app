import "./App.css";

import { BrowserRouter, Redirect, Route } from "react-router-dom";
import React, { useContext } from "react";

import AuthContext from "./Store/AuthContext";
import Backend from "./Backend/Backend";
import { CartProvider } from "./Store/CartContext";
import Frontend from "./Frontend/Frontend";
import Login from "./Auth/Login";
import MainHeader from "./Components/MainHeader";

function App() {
  const ctx = useContext(AuthContext);

  console.log("ctx isLoggedIn =>", ctx.isLoggedin);

  if (ctx.isLoggedIn) {
    console.log("22222ctx isLoggedIn =>", ctx.isLoggedin);
  }

  return (
    <div className="App">
      <div>
        {ctx.isLoggedin && <Redirect to="/backend" />}

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <CartProvider>
          <Route path="/backend">
            <BrowserRouter>
              <Backend />
            </BrowserRouter>
          </Route>

          <Route path="/frontend">
            <BrowserRouter>
              <Frontend />
            </BrowserRouter>
          </Route>
        </CartProvider>

        <Route path="/login">
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </Route>
      </div>
    </div>
  );
}

export default App;
