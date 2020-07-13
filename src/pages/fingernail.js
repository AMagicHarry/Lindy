import React from "react"
import SEO from "../components/seo"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"

import SmallHeader from "../components/small-header/small-header"
import VideoFull from "../components/video-full/video-full"
import ContentFingernail from "../components/content-fingernail/content-fingernail"

import Back from "../components/back-nav/back-nav"

function Fingernail(props) {
  return (
    <div>
      <SEO title="How wide is the average fingernail" />

      <SmallHeader
        colorMode={"small-header__on-dark"}
        headerTitle={"How wide is the average fingernail"}
        infoTitle={"How wide is the average fingernail"}
        infoContent={
          "Video and sonic interpretations of a series of 6 consecutive statements from google voice assistant data log."
        }
      />

      <VideoFull
        videoSrc="https://player.vimeo.com/video/431887966?title=0&byline=0&portrait=0"
        title="How wide is the average fingernail"
      />

      <ContentFingernail />

      <Back homeSection="#fingernail" />
    </div>
  )
}

export default Fingernail
