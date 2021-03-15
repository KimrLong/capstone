import React from "react";
import PostItem from './PostItem'

const Posts = ({posts, onDelete}) => {
  const postsArray = Object.values(posts);

  return <ul>


    {postsArray.map(post =>{

      return <PostItem key={post.id} post={post} onDelete={onDelete} />

    })}

  </ul>;
};

export default Posts;
