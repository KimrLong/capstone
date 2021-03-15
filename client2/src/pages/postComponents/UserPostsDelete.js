import React from 'react'


const UserPostsDelete = props => {
    
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
            {props.props.post.email} - {props.props.post.post} 
        </li>

            </>
        )
    }

}

export default UserPostsDelete
