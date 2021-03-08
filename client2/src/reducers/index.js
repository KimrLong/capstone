import { combineReducers } from "redux";
import reducerTemplate from "./authReducer";
//import { formReducer } from "redux-form";
import paymentReducer from './PaymentReducer';

export default combineReducers({
    auth: reducerTemplate,
  //form: formReducer,
  payment: paymentReducer
});


