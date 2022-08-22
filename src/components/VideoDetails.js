import React from "react";

function VideoDetails(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.views} Views | Uploaded {props.createdAt}</p>
            <button>{props.upvotes}👍</button>
            <button>{props.downvotes}👎</button>
            <br></br>
            <br></br>
            <button>Hide Comments</button>
        </div>
    )
}

export default VideoDetails;