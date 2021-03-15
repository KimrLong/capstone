import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {createPost} from '../actions/index';
import {groupPosts} from '../actions/index';
import {Row, Col, Container, Button} from 'react-bootstrap';

const Forum = () => {

    const [post, setPost] = useState("");
    const dispatch = useDispatch();
    const email = useSelector(state => state.auth.email);
    const viewPosts = useSelector(state => state.auth.allPosts);
    const [allPosts, setAllPosts] = useState([]);
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

    const handleRemove = (id) => {
        let oldPosts = [...allPosts];
        let filteredPosts = oldPosts.filter(post => {
            return id !== post.id
        })
        // viewPosts = filteredPosts
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

//     return (
//         <>
        
//         <Container fluid >
//         <Row className="firstRow">
//             <Col >
//             <form onSubmit={handleSubmit} 
//                 // className="form"
//                 // >
//                     <input type="post" onChange={(e)=>setPost(e.target.value)} value={post} placeholder="Submit your post here..."/>
//                     <button type="submit">Submit</button>
//                 </form>

//                 </Col>
//                 <Col>
//                 {postArray.map((thePosts) => {
//                     return (
//                         <ul>      
//                             <li>
//                                 {thePosts.email}: {thePosts.post}
//                                 <button onClick={handleRemove(thePosts.id)}>X</button>
//                             </li>          
//                         </ul>
//                     )
//                 })}
//                 </Col>
//             </Row>
//         </Container>
//         </>
//     )
// }

// export default Forum
