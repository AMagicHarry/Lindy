import React from "react"
import SEO from "../components/seo"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"

import SmallHeader from "../components/small-header/small-header"
import VideoFull from "../components/video-full/video-full"

import Back from "../components/back-nav/back-nav"

function Improv(props) {
  return (
    <div className="black-background">
      <SEO title="Improv - Wearable" />

      <SmallHeader
        colorMode={"small-header__on-dark"}
        headerTitle={"Improv"}
        infoTitle={"IMPROVISATION"}
        infoContent={
          "Improvisation combining percussion, voice, voice assistant speaking, voice data playback (controlled via a bespoke GUI), and wearable using Google AIY."
        }
      />

      <VideoFull
        videoSrc="https://player.vimeo.com/video/424518472?title=0&byline=0&portrait=0"
        title="Improv - wearable"
      />

      <Back colorMode={"on-dark"} />
    </div>
  )
}

export default Improv
