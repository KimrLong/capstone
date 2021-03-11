import { MAKE_PAYMENT } from '../actions/PaymentType';


const initialState = {
	cardNo: '',
	name: '',
	date: '',
	code: '',
	amount: 0,
	total: 0
}

const PaymentReducer = (state = initialState, action) => {
	switch(action.type){
		case MAKE_PAYMENT: return {
			...state,
			cardNo: action.payload.cardNo,
			name: action.payload.name,
			date: action.payload.date,
			code: action.payload.code,
			amount: action.payload.amount,

			
		}
		case "UPDATE_TOTAL": return{
            ...state,
            total: state.total + action.data
        }
		
		default: return state
	}
}

export default PaymentReducer;