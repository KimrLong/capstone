import { combineReducers } from "redux";
import reducerTemplate from "./authReducer";
//import { formReducer } from "redux-form";

export default combineReducers({
    auth: reducerTemplate,
  //form: formReducer,
});