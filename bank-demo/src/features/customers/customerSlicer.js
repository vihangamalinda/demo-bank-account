import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};


const customerSlicer = createSlice({
  name:'customer',
  initialState,
  reducers:{
    create(state,action){
      const {fullName,nationalId,createdAt} =action.payload;
      state.fullName =fullName;
      state.createdAt =createdAt;
      state.nationalId=nationalId;
    },
    update(state,action){
      state.fullName =action.payload.fullName;
      state.nationalId =action.payload.nationalId;
    }
  }
});

export const {create,update} = customerSlicer.actions; 
export default customerSlicer.reducer;
/* 
Classical way of defining reducers and action creators

function customerReducer(state = initialState, action) {
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

*/