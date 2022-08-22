import React from "react";
import Comments from "./Comments";

function CommentsContainer(props) {
    function renderComments() {
        return props.comments.map((comment) => {
            return (
                <Comments key={props.comments.id} comment={comment}/>
            )
        })
    }

    return (
        <div id="video-comments-container">
            <hr></hr>
            <h2>{props.comments.length} Comments</h2>
            {renderComments()}
        </div>
    )
}

export default CommentsContainer;