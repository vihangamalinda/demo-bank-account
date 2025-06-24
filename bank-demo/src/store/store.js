// import Store
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
