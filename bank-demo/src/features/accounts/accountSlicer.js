const initialAccountState = {
  balance: 0,
  loanAmount: 0,
  loanPurpose: "",
  isLoading:false,
};

function accountReducer(state = initialAccountState, action) {
  const { type, payload } = action;

  switch (type) {
    case "account/deposit":
      return { ...state, balance: state.balance + payload, isLoading: false };
    case "account/withdraw":
      if (state.balance < payload) return state;
      return { ...state, balance: state.balance - payload };
    case "account/requestLoan":
      if (state.loanAmount > 0) return state;
      return {
        ...state,
        loanAmount: payload.loanAmount,
        loanPurpose: payload.loanPurpose,
      };
    case "account/payLoan":
      return {
        ...state,
        loanAmount: 0,
        balance: state.balance - state.loanAmount,
        loanPurpose: "",
      };
    case "account/convertingCurrency":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

function deposit(amount,currency) {
  const actionType = "account/deposit";
  if(currency ==="USD"){
  return { type: actionType, payload: amount };
  }
  return async function(dispatch,getState){
    dispatch({type:"account/convertingCurrency"})
    //  API call
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    console.log(response);
    const data = await response.json();
    const converted = data.rates.USD;
    console.log(data);
    // return action
    dispatch({type:actionType,payload:converted})
  }
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(loanAmount) {
  return { type: "account/requestLoan", payload: loanAmount };
}

function payloan() {
  return { type: "account/payLoan" };
}

export default accountReducer;
export { deposit, withdraw, requestLoan, payloan };
