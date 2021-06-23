// eslint-disable-next-line
import React, { useState } from "react";
import Deletebutton from "./Deletebutton";
function VideoData(props) {
    const oneVideoData = props.oneVideo;
    return (

        <div className="col-4 mt-5 video-div">
            <h5 className="custom-height">{oneVideoData.title}</h5>
            <div className="row d-flex justify-content-center">
                <i className="fa fa-thumbs-up fa-custom"></i>
                <h5 className="pr-3 pl-3 mb-5"> 0 votes </h5>
                <i className="fa fa-thumbs-down fa-custom"></i>
            </div>
            <iframe width="360" height="215" src={oneVideoData.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Deletebutton />
        </div>
    );
}
export default VideoData;