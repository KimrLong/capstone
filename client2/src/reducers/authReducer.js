import actionTypes from '../actions/actionTypes';

const initialState = {
    authenticated: "",
    forumPost: "",
    allPosts: [],
    email: "",
    profilePic: "",
    about: "",
    username: "",
    uniqueId: "",
    total: 0

}

const reducerTemplate = (state = initialState, action) => {
    // console.log(action.data);
    switch(action.type){
        case "CLEAR_USER":
            return {
                authenticated: "",
                forumPost: "",
                allPosts: [],
                email: "",
                profilePic: "",
                about: "",
                username: "",
            }
        case "GET_PROFILE":
            return {
                ...state,
                about: action.data.about,
                profilePic: action.data.profile_pic,
            }
        case "AUTH_USER":
            return {
                ...state,
                authenticated: action.data //the jwt
            }
        case "ADD_USERNAME":
            return {
                ...state,
                username: action.data
            }
        case "ADD_POST":
            return {
                ...state,
                uniqueId: action.data.id,
                forumPost: action.data.post,
                email: action.data.email,
            }
        case "REMOVE_POST":
            return {
                ...state,
                uniqueId: action.data.id,
            }
        case "GROUP_POSTS":
            return {
                ...state,
                allPosts: action.data,
            }
        case "ADD_EMAIL":
            return {
                ...state,
                email: action.data
            }
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

        case "UPDATE_TOTAL": return{
            ...state,
            total: state.total + action.data
        }


		case "CLEAR_PRICE": return {
			...state,
			total: 0
		}
        
        default:
            return state;
    } 
}


export default reducerTemplate  ;