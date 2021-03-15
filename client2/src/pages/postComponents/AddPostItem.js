import React, {useState, useEffect} from "react";
import { v4 as uuidv1 } from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import {groupPosts, createPost} from '../../actions/index';
import '../../assets/Chat.css'

const AddProject = (props) => {

  const email = useSelector(state => state.auth.email);

  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([]);  //[{id, category, title}, {}, {}]
  const dispatch = useDispatch();

  useEffect(() => {
    const updatePosts = async() => {
        const url = `http://localhost:3001/chat/group`
        const response = await fetch(url)
        const data = await response.json()
        // setPosts(data);
        // console.log(data);
      }
      updatePosts();
    }, [])
    

  const handleSubmit = (e) => {
    e.preventDefault();


    //addProject passed from parent.  Expects an object as an argument

    let post = {
      // id: uuidv1(),
      email: email, 
      post: newPost
    }

    props.addPost(post);

    dispatch(createPost({
      // id: post.id,
      email: post.email,
      post: post.post,
    }));

  }

  return <>
  
  <form onSubmit={handleSubmit}>

    <input type="post"
      placeholder="Enter post"
      value={newPost}
      onChange={(e)=>setNewPost(e.target.value)}
    />
    <button type="submit" className="btnType">Submit</button>
  </form>
  </>;
};

export default AddProject;
