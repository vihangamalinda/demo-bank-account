import {createStore} from "redux"
const initialState = {
    balance:0,
    loanAmount:0,
    loanPurpose:""
}

function reducer(state = initialState, action) {
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

const store = createStore(reducer)
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

