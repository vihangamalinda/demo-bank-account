/* *
Implementation: Modern Redux implementation with  Redux toolkit
**/
import accountReducer from "../features/accounts/accountSlicer";
import customerReducer from "../features/customers/customerSlicer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
export default store;
