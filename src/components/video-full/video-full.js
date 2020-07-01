import React, { Component } from "react"
import ScrollTrigger from "react-scroll-trigger"
import Fade from "react-reveal/Fade"

import "./video-full.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class VideoFull extends Component {
  render() {
    return (
      <div>
        <div className="video-full">
          <iframe
            src={this.props.videoSrc}
            title={this.props.title}
            frameBorder="0"
            className="video-full__vimeo"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  }
}
export default VideoFull
