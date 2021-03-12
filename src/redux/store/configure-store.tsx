import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { createLogger } from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";

const logger = createLogger();
const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

export const configureStore = (initialState: any) => {
  const middleware = [logger, thunk, routeMiddleware];

  const store = createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
};
