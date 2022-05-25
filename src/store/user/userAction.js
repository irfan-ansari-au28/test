import { FETCH_USERS_REQUEST } from "./userActionTypes";
import { FETCH_USERS_SUCCESS } from "./userActionTypes";
import { FETCH_USERS_FAIL } from "./userActionTypes";
import axios from "axios";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAIL,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest); // it will basically set loading = true
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        const users = response.data;
        console.log(users);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.errormessage;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
