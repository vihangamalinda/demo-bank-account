import { combineReducers, createStore } from "redux";
import accountReducer from "../features/accounts/accountSlicer";
import customerReducer from "../features/customers/customerSlicer";

const reducerMap = {
  account: accountReducer,
  customer: customerReducer,
};
const rootReducer = combineReducers(reducerMap);

const store = createStore(rootReducer);
export default store;
