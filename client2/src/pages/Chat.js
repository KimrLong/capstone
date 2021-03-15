import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {createPost} from '../actions/index';
import {groupPosts} from '../actions/index';

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


    return (
        <>
        <div className="row">
            <div className="col" styles="ml">
                <form onSubmit={handleSubmit} 
                // className="form"
                >
                    <input type="post" onChange={(e)=>setPost(e.target.value)} value={post} placeholder="Submit your post here..."/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="col" styles="ml">
                {postArray.map((thePosts) => {
                    return (
                        <ul>      
                            <li>
                                {thePosts.email}: {thePosts.post}
                            </li>          
                        </ul>
                    )
                })}
            </div>
        </div>

        </>
    )
}

export default Forum
