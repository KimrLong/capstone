import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';    
import {setProfilePic, setProfileInfo} from '../../actions/index';

const UserProfile = () => {

    const [pictureUrl, setPictureUrl] = useState("");
    const [about, setAbout] = useState("");
    const email = useSelector(state => state.auth.email);
    const pic = useSelector(state => state.auth.profilePic);
    const aboutStuff = useSelector(state => state.auth.about);
    const dispatch = useDispatch();

    const handleSubmit1 = (e) => {
        e.preventDefault();

        dispatch(setProfilePic({email, pictureUrl}));
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();

        dispatch(setProfileInfo({email, about}));
    }

    return (
        <>
        
        <img src={pic} alt="" width="300px" height="300px" /> <br/>
        <br/>
        <br/>

        <form onSubmit={handleSubmit1} className="form">
            <input type="profilePic" onChange={(e)=>setPictureUrl(e.target.value)} value={pictureUrl} placeholder="Enter your picture here..."/>
            <button type="submit">Submit</button>

            <div>
                {pic}
            </div>
        </form>

        <form onSubmit={handleSubmit2} className="form">
            <input type="aboutInfo" onChange={(e)=>setAbout(e.target.value)} value={about} placeholder="Tell us about you..."/>
            <button type="submit">Submit</button>

            <div>
                {aboutStuff}
            </div>
        </form>

        </>
    )
}



export default UserProfile
