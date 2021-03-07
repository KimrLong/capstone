import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux';
import {createPost} from '../actions/index';
import {useSelector} from 'react-redux';    
import {groupPosts} from '../actions/index';

const Forum = () => {

    const [post, setPost] = useState("");
    const dispatch = useDispatch();
    const email = useSelector(state => state.auth.email);
    const viewPosts = useSelector(state => state.auth.allPosts);
    const postArray = Object.values(viewPosts);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        dispatch(createPost({
            email: email,
            post: post,
        }))
    }

    useEffect(() => {
        const fetchPosts = async() => {
            const url = `http://localhost:3001/forum`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data);
            dispatch(groupPosts(data));
        }
        fetchPosts();
    }, [])

    useEffect(() => {
        const updatePosts = async() => {
            const url = `http://localhost:3001/forum`
            const response = await fetch(url)
            const data = await response.json()
            dispatch(groupPosts(data));
        }
        updatePosts();
    }, [viewPosts])

    return (
        <>
        <form onSubmit={handleSubmit} className="form">
            <input type="post" onChange={(e)=>setPost(e.target.value)} value={post} placeholder="Submit your post here..."/>
            <button type="submit">Submit123</button>
        </form>
        {postArray.map((thePosts) => {
            return (
                <ul>      
                    <li>
                        {thePosts.email}: {thePosts.post}
                    </li>          
                </ul>
            )
        })}
        </>
    )
}

export default Forum
