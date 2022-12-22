import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  FilterProvider,
  AuthContextProvider,
  CartcontextProvider,
  WishlistProvider,
} from "./contexts/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <WishlistProvider>
          <CartcontextProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </CartcontextProvider>
        </WishlistProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
