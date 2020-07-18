import React from "react"
import SEO from "../components/seo"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"

import SmallHeader from "../components/small-header/small-header"
import VideoFull from "../components/video-full/video-full"

import Back from "../components/back-nav/back-nav"

function Homebodies(props) {
  return (
    <div className="black-background">
      <SEO title="Voice data playback" />

      <SmallHeader
        colorMode={"small-header__on-dark"}
        headerTitle={"Homebodies"}
        infoTitle={"Homebodies"}
        infoContent={[
          "Interactive movement and sound improvisation duet based on ghost workers' Google Voice Assistant data logs. A bespoke GUI is used to control the voice utterances, and their playback is triggered by accelerometer data via TouchOSC on the dancer's body. Recorded at home over zoom during the Covid-19 pandemic.",
          <br />,
          <br />,
          "Collaborator:",
          <br />,
          "Kate Sicchio",
          <br />,
          "James Wenlock",
        ]}
      />

      <VideoFull
        videoSrc="https://player.vimeo.com/video/418241505?title=0&byline=0&portrait=0"
        title="Kate's dance video "
      />

      <Back colorMode={"on-dark"} homeSection="#homebodies" />
    </div>
  )
}

export default Homebodies
