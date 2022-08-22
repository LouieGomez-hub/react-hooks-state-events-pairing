import React from "react";

function Comments(props) {
    return (
        <div>
            <h3>{props.comment.user}</h3>
            <p>{props.comment.comment}</p>
        </div>
    )
}

export default Comments;