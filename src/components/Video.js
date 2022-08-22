import React from "react";
import VideoDetails from "./VideoDetails";
import CommentsContainer from "./CommentsContainer";

function Video(props) {
    return (
      <div>
        <iframe
        width="919"
        height="525"
        src={props.videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
        <VideoDetails 
            title={props.videoData.title}
            views={props.videoData.views}
            createdAt={props.videoData.createdAt}
            upvotes={props.videoData.upvotes}
            downvotes={props.videoData.downvotes}
        />
        <CommentsContainer />
      </div>
    )
}

export default Video;