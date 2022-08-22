import React from "react";

function Video(props) {
    return (
        <iframe
        width="919"
        height="525"
        src={props.videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    )
}

export default Video;