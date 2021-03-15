import React from 'react'
// import {getOtherProfile} from '../../actions/index';
import {useDispatch} from 'react-redux';

const UserPostsDelete = props => {
    // const dispatch = useDispatch();
    if (props.email === props.props.post.email) {
        return (
            <>
        <li>
            {props.props.post.email} - {props.props.post.post} 
            <button onClick={() => props.props.onDelete(props.props.post.id)}> [REMOVE] </button>
        </li>

            </>
        )
    }
    else {
        return (
            <>
        <li>
            <a href="/otheruser"> {props.props.post.email} </a>

            - {props.props.post.post} 
        </li>

            </>
        )
    }

}

export default UserPostsDelete
