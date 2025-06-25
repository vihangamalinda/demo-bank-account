const initialCustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

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

function createCustomer(payload) {
  return { type: "customer/create", payload };
}

function updateCustomer(payload) {
  return { type: "customer/update", payload };
}

export default customerReducer;
export { createCustomer, updateCustomer };
