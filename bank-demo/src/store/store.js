import { type } from "@testing-library/user-event/dist/type";
import {combineReducers, createStore} from "redux"
const initialAccountState = {
    balance:0,
    loanAmount:0,
    loanPurpose:""
}

const initialCustomerState = {
  fullName:"",
  nationalId:"",
  createdAt:""
}

function accountReducer(state = initialAccountState, action) {
  const { type, payload } = action;

  switch (type) {
    case "account/deposit":
      return { ...state, balance: state.balance + payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - payload };
    case "account/requestLoan":
      if (state.loanAmount > 0) return state;
      return { ...state, loanAmount: payload };
    case "account/payLoan":
      return {
        ...state,
        loanAmount: 0,
        balance: state.balance - state.loanAmount,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

function customerReducer(state = initialCustomerState, action) {
  const { type, payload } = action;

  switch (type) {
    case "customer/create":
      return {
        ...state,
        fullName: payload.fullName,
        nationalId: payload.nationalId,
        createdAt: payload.createdAt,
      };

    case "customer/update":
      return {
        ...state,
        fullName: payload.fullName,
        nationalId: payload.nationalId,
      };
    default:
      return state;
  }
}

const reducerMap = {
  account:accountReducer,
  customer:customerReducer,
}
const rootReducer = combineReducers(reducerMap)

const store = createStore(rootReducer)
store.dispatch({type:"account/deposit",payload:100})
console.log(store.getState())
store.dispatch({type:"account/withdraw",payload:100})
store.dispatch({type:"account/deposit",payload:100})
store.dispatch({type:"account/deposit",payload:100})
console.log(store.getState())
store.dispatch(deposit(300))
store.dispatch(withdraw(300))
store.dispatch(requestLoan(300))
store.dispatch(requestLoan(300))
console.log(store.getState())
store.dispatch(payloan(300))
console.log(store.getState())
store.dispatch(createCustomer({fullName:"Vihanga Malinda",nationalId:"12542",createdAt:new Date().toISOString()
 }))

console.log(store.getState())

function deposit(amount){
  return {type:"account/deposit",payload:amount};
}

function withdraw(amount){
  return {type:"account/withdraw",payload:amount}
}

function requestLoan(loanAmount){
  return {type:"account/requestLoan",payload:loanAmount}
}

function payloan(){
  return {type:"account/payLoan"}
}



function createCustomer(payload){
  return {type:"customer/create",payload}
}

function updateCustomer (payload){
  return {type:"customer/update",payload}
}
