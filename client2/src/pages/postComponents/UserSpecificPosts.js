import React from 'react'
import PostItem from './PostItem'
import {useSelector} from 'react-redux';

const UserSpecificPosts = ({posts, onDelete}) => {

    const email = useSelector(state => state.auth.email)
    const specificPost = posts.filter(post => {
        return post.email === email;
    })
    
    return <ul>

            {specificPost.map(post =>{

                return <PostItem key={post.id} post={post} onDelete={onDelete} />

            })}

        </ul>;
};


export default UserSpecificPosts
