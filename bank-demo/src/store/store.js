import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "../features/accounts/accountSlicer";
import customerReducer from "../features/customers/customerSlicer";

const reducerMap = {
  account: accountReducer,
  customer: customerReducer,
};
const rootReducer = combineReducers(reducerMap);

const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;
