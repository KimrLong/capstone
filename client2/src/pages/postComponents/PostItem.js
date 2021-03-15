import React from "react";

const PostItem = (props) => {
    return <>

        <li>
            {props.post.email} - {props.post.post} 
            <a href="#" onClick={() => props.onDelete(props.post.id)}> [REMOVE] </a>
        </li>

    </>;
};

export default PostItem;
