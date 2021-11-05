import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import store from "./store/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />,
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
