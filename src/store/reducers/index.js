import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import cartsReducer from "./cartsReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  productsReducer,
  cartsReducer,
});

export default rootReducer;
