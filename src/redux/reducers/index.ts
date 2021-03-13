import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

export interface StoreModel { }

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
  });

export default rootReducer;
