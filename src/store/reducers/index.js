import { combineReducers } from "redux";

import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  productsReducer,
});

export default rootReducer;
