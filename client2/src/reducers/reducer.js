import actionTypes from '../actions/actionTypes';

const initialState = {
    authenticated: "",
    forumPost: "",

}

const reducerTemplate = (state = initialState, action) => {

    switch(action.type){

        case "AUTH_USER":
            return {
                ...state,
                authenticated: action.data //the jwt
            }
        case "ADD_POST":
            return {
                ...state,
                forumPost: action.data
            }
        default:
            return state;
    } 
}


export default reducerTemplate