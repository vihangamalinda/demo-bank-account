/**
  Implementation: Classical Redux implemntation
**/
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "../features/accounts/accountSlicer";
import customerReducer from "../features/customers/customerSlicer";
import { composeWithDevTools } from "redux-devtools-extension";
const reducerMap = {
  account: accountReducer,
  customer: customerReducer,
};
const rootReducer = combineReducers(reducerMap);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
