import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';    

const UserProfile = () => {


    return (
        <>
        <form className="form">
            <input type="profilePic" placeholder="Enter your picture here..."/>
            <button type="submit">Submit</button>
            <br/>
            <br/>
            <input type="profilePic" placeholder="Describe yourself..."/>
            <button type="submit">Submit</button>
            <br/>
            <br/>
            <input type="profilePic" placeholder="Describe yourself..."/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}



export default UserProfile
