import React from "react"
import SEO from "../components/seo"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"

import SmallHeader from "../components/small-header/small-header"
import VideoFull from "../components/video-full/video-full"

import Back from "../components/back-nav/back-nav"

function Playback(props) {
  return (
    <div className="black-background">
      <SEO title="Voice data playback" />

      <SmallHeader
        colorMode={"small-header__on-dark"}
        headerTitle={"Voice data playback"}
        infoTitle={"Voice data playback"}
        infoContent={
          "Kate Sicchio dances in response to remixed voice data. Her movement is tracked on her phone (on her body) with Touch OSC. Touch OSC triggers the voices. Afroditi Psarra navigates the archive of voice utterances through a bespoke GUI and selects keywords to choose utterances."
        }
      />

      <VideoFull
        videoSrc="https://player.vimeo.com/video/418241505?title=0&byline=0&portrait=0"
        title="Kate's dance video "
      />

      <Back colorMode={"on-dark"} />
    </div>
  )
}

export default Playback
