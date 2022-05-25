import { combineReducers } from "redux";
import reducer from "./reducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  count: reducer,
  user: userReducer,
});

export default rootReducer;
