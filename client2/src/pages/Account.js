import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setProfilePic, setProfileInfo} from '../actions/index';
import {Row, Col, Container} from 'react-bootstrap';
import  '../assets/Home.css'
import Posts from './postComponents/Posts';
import UserSpecificPosts from './postComponents/UserSpecificPosts';
import {groupPosts, createPost, deletePost} from '../actions/index';

const UserProfile = () => {

    const [pictureUrl, setPictureUrl] = useState("");
    const [about, setAbout] = useState("");
    const email = useSelector(state => state.auth.email);
    const pic = useSelector(state => state.auth.profilePic);
    const aboutStuff = useSelector(state => state.auth.about);
    const posts = useSelector(state => state.auth.allPosts);
    const username = useSelector(state => state.auth.username);
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

    const handleSubmit1 = (e) => {
        e.preventDefault();

        dispatch(setProfilePic({email, pictureUrl}));
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();

        dispatch(setProfileInfo({email, about}));
    }

    const handleRemovePost = (id) => {

        console.log(id);
        dispatch(deletePost({id: id}));

    }

    return (
        <>

<Container fluid>
        <Row className="firstRow userprofile">
            <Col >
            <form onSubmit={handleSubmit1} className="form">
                        <input type="profilePic" onChange={(e)=>setPictureUrl(e.target.value)} value={pictureUrl} placeholder="Enter your picture here..."/>
                        <button type="submit">Submit</button>
                    </form>
                    <br/>
                    <br/>
                    <br/>
                    <img src={pic} alt="" width="300px" height="300px" /> 
                    {/* <img id="currentPhoto" src={pic} onerror="this.onerror=null; this.src='nopic.jpg'" alt="" width="100" height="120"></img> */}

                </Col>
                <Col>
                <form onSubmit={handleSubmit2} className="form">
                            <input type="aboutInfo" onChange={(e)=>setAbout(e.target.value)} value={about} placeholder="Tell us about you..."/>
                            <button type="submit">Submit</button>
                            <br/>
                            <br/>
                            <br/>
                            <div>
                                {aboutStuff}
                            </div>
                        </form>
                
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
            {/* {postArray.findAll(( { where: {email : email}}) => {
                return (
                    <ul>      
                        <li>
                            {email}: {viewPosts}
                        </li>          
                    </ul>
                )
            })} */}
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



export default UserProfile
