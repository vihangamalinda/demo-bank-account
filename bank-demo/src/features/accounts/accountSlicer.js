const initialAccountState = {
  balance: 0,
  loanAmount: 0,
  loanPurpose: "",
};

function accountReducer(state = initialAccountState, action) {
  const { type, payload } = action;

  switch (type) {
    case "account/deposit":
      return { ...state, balance: state.balance + payload };
    case "account/withdraw":
      if (state.balance <payload) return state;
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
    default:
      return state;
  }
}

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
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
