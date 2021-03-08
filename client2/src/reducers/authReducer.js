import actionTypes from '../actions/actionTypes';

const initialState = {
    authenticated: "",
    forumPost: "",
    allPosts: [],
    email: "",
}
console.log(initialState);

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
                // email: action.data.email,
            }
        case 'DELETE_POST':
            let filteredPosts = state.auth.allPosts.filter(p => {
                return p.id != action.data.id
            })
            return {
                ...state,
                todos: filteredPosts,
            }
        case "GROUP_POSTS":
            return {
                ...state,
                allPosts: action.data
            }
        case "ADD_EMAIL":
            return {
                ...state,
                email: action.data
            }
        default:
            return state;
    } 
}


export default reducerTemplate