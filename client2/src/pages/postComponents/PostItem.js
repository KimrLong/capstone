import React from "react";

const PostItem = (props) => {
    return <>

        <li>
            {props.post.email} - {props.post.post} 
            <button onClick={() => props.onDelete(props.post.id)}> [REMOVE] </button>
        </li>

    </>;
};

export default PostItem;
