import React from "react"
import SEO from "../components/seo"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"

import SmallHeader from "../components/small-header/small-header"
import VideoFull from "../components/video-full/video-full"

import Back from "../components/back-nav/back-nav"

function Alarm(props) {
  return (
    <div className="black-background">
      <SEO title="Set an alarm trio" />

      <SmallHeader
        colorMode={"small-header__on-dark"}
        headerTitle={"Set an alarm"}
        infoTitle={"Set an alarm"}
        infoContent={
          "Following a movement score to respond to the voice assistant instructions.Choreography by Kate Sicchio"
        }
      />

      <VideoFull
        videoSrc="https://player.vimeo.com/video/418230349?title=0&byline=0&portrait=0"
        title="Set an alarm Trio"
      />

      <Back colorMode={"on-dark"} homeSection="#alarm" />
    </div>
  )
}

export default Alarm
