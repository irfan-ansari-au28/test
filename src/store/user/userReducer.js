import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from "./userActionTypes";

const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        users: [],
        error: "",
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        users: [],
        error: action.paylooad,
      };
    default:
      return state;
  }
};

export default userReducer;
