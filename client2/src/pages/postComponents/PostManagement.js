import React, {useState, useEffect} from "react";
import AddPostItem from './AddPostItem';
import Posts from './Posts';
import { v4 as uuidv1 } from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import {groupPosts, createPost} from '../../actions/index';

const PostManagement = () => {

    const [posts, setPosts] = useState([]);  //[{id, category, title}, {}, {}]
    const dispatch = useDispatch();

    useEffect(() => {
        const updatePosts = async() => {
            const url = `http://localhost:3001/chat/group`
            const response = await fetch(url)
            const data = await response.json()
            // const dataArray = Object.values(data);
        
            setPosts(data);
            dispatch(groupPosts(posts));
            // console.log(data);

        }
        updatePosts();
    }, [])

    // console.log(posts);

    const handleAddPost = async (newPost) => {
        // setPostObject(newPost);
        console.log(newPost);
        // dispatch(createPost(newPost));
        await setPosts([newPost, ...posts]);
        dispatch(groupPosts(posts));

    }

    const clearPosts = () => {
        setPosts([]);
    }

    const handleRemovePost = (id) => {

        let oldPosts = [...posts];

        let filteredPosts = oldPosts.filter(post =>{
            return id !== post.id
        })
        console.log(filteredPosts);
        setPosts(filteredPosts);
        dispatch(groupPosts(filteredPosts));

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

        <button onClick={clearPosts}>clear</button>
    </>
};

export default PostManagement;
