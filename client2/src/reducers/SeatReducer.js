import { ADD_SEAT } from '../actions/SeatAction';

const initialState = {
	seatIds: [],

}

const SeatReducer = (state = initialState, action) => {
	switch(action.type){
		case 'ADD_SEAT': return {
			...state,
			seatIds: action.data

			
		};
		
		default: return state
	};
}

export default SeatReducer;


