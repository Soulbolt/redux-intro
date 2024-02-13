const initialState = {
  balance: 0,
  loan: 0,
  loadPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/desposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) {
        return state;
      } // COME BACK LATER
      return { ...state, load: action.payload };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loadPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}
