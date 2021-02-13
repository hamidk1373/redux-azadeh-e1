import { CHANGE_MORE_INFO, CHANGE_NAME } from "../constants/ActionTypes";

const INIT_STATE = {
  name: "hamid",
  age: 100,
  moreInfo: {
    email: "",
    phoneNumber: "",
  },
};

function rootReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case CHANGE_MORE_INFO:
      return {
        ...state,
        moreInfo: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;

// (state, action) => switch case => newState
