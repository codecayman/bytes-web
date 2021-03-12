import React from "react";

// helpers
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// components
import App from "./App";

// styles
import "./resources/styles/styles.scss";

// Redux
import { Provider } from "react-redux";
import StoreHelper from "./redux/store/store-helper";

import { configureStore } from "./redux/store/configure-store";

const store = configureStore({});
StoreHelper.setStore(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
