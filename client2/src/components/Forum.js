import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {createPost} from '../actions/index';

const Forum = () => {

    const [post, setPost] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        dispatch(createPost({
            email: "",
            post: post,
        }))
        // , ()=>{
        //     console.log('pushing to another page');
        //     history.push('/feature');
        // }))
        
    }
    return (
        <>
        <form onSubmit={handleSubmit} className="form">
            <input type="text" onChange={(e)=>setPost(e.target.value)} value={post} placeholder="enter your post here..."/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Forum
