import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';

import {createPost, groupPosts} from '../actions/index';
import ReactDom from 'react-dom';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import './chat.css';
import { Divider } from "@material-ui/core";

import {Row, Col, Container, Button} from 'react-bootstrap';


const Forum = () => {

    const [post, setPost] = useState("");
    const dispatch = useDispatch();
    const email = useSelector(state => state.auth.email);
    const viewPosts = useSelector(state => state.auth.allPosts);
    const postArray = Object.values(viewPosts);
    const [submit, setSubmit] = useState(false);

    // const updatePosts = async() => {
    //     const url = `http://localhost:3001/forum`
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     dispatch(groupPosts(data));
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost({
            email: email,
            post: post,
        }))
        setSubmit(!submit);
        // updatePosts();
    }

    useEffect(() => {
        const updatePosts = async() => {
            const url = `http://localhost:3001/forum`
            const response = await fetch(url)
            const data = await response.json()
            dispatch(groupPosts(data));
        }
        updatePosts();
    }, [])

    useEffect(() => {
        const fetchPosts = async() => {
            const url = `http://localhost:3001/forum`
            const response = await fetch(url)
            const data = await response.json()
            // console.log(data);
            dispatch(groupPosts(data));
        }
        fetchPosts();
    }, [submit])
}


    return (
        <>
        
            <div id="chat-container">
                <div id="search-container">
                    <TextField 
                        id="standard-bare" 
                        defaultValue="Bare"
                        margin="normal"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon/>
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
                <div id="conversation-list">
                    <div className="conversation active">
                        <img src="../assets/profilepic.jpg" alt="MattC"/>
                        <div className="title-text">
                            Matt C
                        </div>
                        <div className="created-date">
                            Date:Time
                        </div>
                        <div className="conversation-message">
                            This is the conversation message
                        </div>
                    </div>
                </div>
                <div id="new-message-container">
                    <a href="#">+</a>
                </div>
                <div id="chat-title">
                    <span>chat placeholder!</span>
                    <DeleteForeverSharpIcon/>
                </div>
                <div id="chat-message-list">
                        <div className="message-row you-message">
                            <div className="message-content">
                                <div className= "message-text">message text</div>
                                <div className="message-time">date:time</div>
                        </div>
                    </div>
                    <div className="message-row other-message">
                        <div className="message-content"></div>
                            <img src="../assets/profilepic.jpg" alt="MattC"/>
                            <div className= "message-text"> 
                            This is a response to your message.
                            I hope you are having a great day
                            </div>
                            <div className="message-time">date:time</div>
                        </div>
                    </div>
                
                <div id="chat-form">
                    <AttachFileIcon/>
                    <input type="text" placeholder="type a message"/>
                </div>
            
            </div>
        
        

        </>
    )
}


export default Forum;


// <form onSubmit={handleSubmit} 
// // className="form"
// >
//     <input type="post" onChange={(e)=>setPost(e.target.value)} value={post} placeholder="Submit your post here..."/>
//     <button type="submit">Submit</button>
// </form>

// {postArray.map((thePosts) => {
//     return (
//         <ul>      
//             <li>
//                 {thePosts.email}: {thePosts.post}
//             </li>          
//         </ul>
//     )
// })}


// export default Forum

