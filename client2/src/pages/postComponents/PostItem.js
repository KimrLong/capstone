import React from "react";
import UserPosts from './UserPosts';
import {useDispatch, useSelector} from 'react-redux';

const PostItem = (props) => {

    const email = useSelector(state => state.auth.email);

    return <>

        <UserPosts email={email} props={props}/>


    </>;
};

export default PostItem;
