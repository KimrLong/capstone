import { combineReducers } from "redux";
import reducerTemplate from "./reducer";
//import { formReducer } from "redux-form";
import paymentReducer from './PaymentReducer';

export default combineReducers({
    auth: reducerTemplate,
  //form: formReducer,
  payment: paymentReducer
});


