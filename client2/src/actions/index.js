import actionTypes from './actionTypes';
import axios from 'axios';

export const setProfilePic = (formData) => {
    return async dispatch=>{
        try{
            let response = await axios.post('http://localhost:3001/userprofile/updatepic', formData) //formdata will put on header
            dispatch({type: "ADD_PIC", data: formData.pictureUrl})
        }
        catch(e){
            console.log('error');
            console.log(e);
        }
    }
}

export const getProfile = (email) => {
    return async dispatch => {
        try {
            let response = await axios.post('http://localhost:3001/userprofile', email)
            // console.log(response.data);
            dispatch({type: "GET_PROFILE", data: response.data[0]})
        }
        catch(e){
            console.log('error');
            console.log(e);
        }
    }
}

export const setProfileInfo = (formData) => {
    return async dispatch=>{
        try{
            let response = await axios.post('http://localhost:3001/userprofile', formData) //formdata will put on header
            dispatch({type: "ADD_ABOUT", data: formData.about})
        }
        catch(e){
            console.log('error');
            console.log(e);
        }
    }
}

export const setUsernameState = (username) => {
    return {
        type: "ADD_USERNAME",
        data: username
    }
}

export const setEmailState = (email) => {
    return {
        type: "ADD_EMAIL",
        data: email
    }
}

export const groupPosts = (posts) => {
    return {
        type: "GROUP_POSTS",
        data: posts,
    }
}

export const createPost = (formData) => {
    // console.log(formData);
    return async dispatch=>{
        try{
            let response = await axios.post('http://localhost:3001/forum', formData) //formdata will put on header
            //dispatch action to reducer 
            dispatch({type: "ADD_POST", data: formData});
        }
        catch(e){
            console.log('error');
            console.log(e);
        }
    }
}

export const deletePost = (post) => {
    return {
        type: "DELETE_POST",
        data: post
    }
}

export const signUp = (formData, cb) => {
    console.log(formData);
    //take username and passpword
    //call our server api 
    //wait for an authenticated token 
    //call reducer to store token

    //formData => {email, password}  
    return async dispatch=>{
        try{
            let response = await axios.post('http://localhost:3001/form', formData) //formdata will put on header
            console.log(response.data.token);//token
            //dispatch action to reducer 
            dispatch({type: "AUTH_USER", data: response.data.token});
            localStorage.setItem('token', response.data.token);
            console.log(cb);
            cb();
        }
        catch(e){
            console.log('error');
            console.log(e);
        }
    }
}

//logging into application
export const signin = (formData, cb) => {
    return async dispatch =>{
        try{
            let response = await axios.post('http://localhost:3001/signin', formData);
            dispatch({type: "AUTH_USER", data: response.data.token});
            console.log('signin', response.data.token);
            localStorage.setItem('token', response.data.token);
            cb();
        }
        catch(e){
            console.log('error');
            console.log(e);
        }
    }
}

//logout
export const signout = (cb) => {
    return dispatch=> {
        localStorage.removeItem('token');
        dispatch({
            type: "CLEAR_USER",
        })
        console.log('signing out');
        cb();
    }
}

//clears payment form

