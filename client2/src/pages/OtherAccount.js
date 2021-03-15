import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col, Container} from 'react-bootstrap';
import  '../assets/Home.css'
import UserSpecificPosts from './postComponents/UserSpecificPosts';
import {deletePost} from '../actions/index';

const OtherUserProfile = () => {

    const [pictureUrl, setPictureUrl] = useState("");
    const [about, setAbout] = useState("");
    const email = useSelector(state => state.auth.otherEmail);
    const pic = useSelector(state => state.auth.otherProfilePic);
    const aboutStuff = useSelector(state => state.auth.otherAbout);
    const posts = useSelector(state => state.auth.allPosts);
    const username = useSelector(state => state.auth.otherUsername);
    const dispatch = useDispatch();

    useEffect(() => {
        const updatePosts = async() => {
            const url = `http://localhost:3001/chat/otheruser`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data);
            // dispatch(groupPosts(data));
        }
        updatePosts();
    }, [])  

    const handleRemovePost = (id) => {

        console.log(id);
        dispatch(deletePost({id: id}));

    }

    return (
        <>

<Container fluid>
        <Row className="firstRow userprofile">
            <Col >
    
                <img src={pic} alt="" width="300px" height="300px" /> 
                {/* <img id="currentPhoto" src={pic} onerror="this.onerror=null; this.src='nopic.jpg'" alt="" width="100" height="120"></img> */}

            </Col>

            <Col>

                <div>
                    {aboutStuff}
                </div>
    
            </Col>
        </Row>

        </Container>
        <div className="userprofile">
            <div className="row">
                <div className="col">

                </div>
                <div className="col">
                    <div className="col">


                    </div>
                </div>
            </div>

            <br/> 

            <div>

            </div>
            <div>
                {username}
            </div>

            <div>
                <div className="col-6 offset-3 text-center">
                    <h3>Your Posts</h3>
                </div>

                <UserSpecificPosts onDelete={(id)=>handleRemovePost(id)} posts={posts} />
                {/* <Posts onDelete={(id)=>handleRemovePost(id)} posts={posts} /> */}
            </div>
        </div>
        </>
    )
}



export default OtherUserProfile
