import actionTypes from '../actions/actionTypes';

const initialState = {
    profilePic: "",
    about: "",
    email: "",
}
console.log(initialState);

const reducerTemplate = (state = initialState, action) => {

    switch(action.type){
        case "ADD_PIC":
            return {
                ...state,
                profilePic: action.data
            }
        case "ADD_ABOUT":
            return {
                ...state,
                about: action.data
            }
        default:
            return state;
    } 
}


export default reducerTemplate