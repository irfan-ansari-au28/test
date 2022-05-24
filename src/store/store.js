import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

import { applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export default store;
