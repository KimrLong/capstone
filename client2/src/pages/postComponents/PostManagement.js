import React, {useState, useEffect} from "react";
import AddPostItem from './AddPostItem';
import Posts from './Posts';
import { v4 as uuidv1 } from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import {groupPosts, createPost, deletePost} from '../../actions/index';

const PostManagement = () => {

    const posts = useSelector(state => state.auth.allPosts);

    const dispatch = useDispatch();

    useEffect(() => {
        const updatePosts = async() => {
            const url = `http://localhost:3001/chat/group`
            const response = await fetch(url)
            const data = await response.json()
        
            // setPosts(data);
            dispatch(groupPosts(data));

        }
        updatePosts();
    }, [])

    const handleAddPost = async (newPost) => {
        console.log(newPost);

        dispatch(groupPosts(posts));

    }

    const handleRemovePost = (id) => {

        console.log(id);
        dispatch(deletePost({id: id}));

    }

    return <>
        <div className="row mt-5">
            <div className="col-6 offset-3 text-center">
                <h3>Post Management</h3>
            </div>
        </div>

        <h5>Add a Post</h5>
        <div className="card-body">
            <AddPostItem addPost={(post)=>handleAddPost(post)} />
        </div>
            
        <div className="row">
            <Posts onDelete={(id)=>handleRemovePost(id)} posts={posts} />
        </div>
    </>
};

export default PostManagement;
