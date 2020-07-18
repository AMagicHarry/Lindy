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
      <SEO title="Play feeling good music" />

      <SmallHeader
        colorMode={"small-header__on-dark"}
        headerTitle={"Play feeling good music"}
        infoTitle={"Play feeling good music"}
        infoContent={[
          "Improvisation combining percussion, spoken word, voice assistant speaking, curated Google assistant data sourced from Amazon Mechanical Turk workers, bespoke GUI, and wearable voice assistant with handmade actuators.",
          <br />,
          <br />,
          "Collaborator:",
          <br />,
          "James Wenlock",
          <br />,
          "Esteban Yosef Agosin",
          <br />,
          "Alexa",
        ]}
      />

      <VideoFull
        videoSrc="https://player.vimeo.com/video/424518472?title=0&byline=0&portrait=0"
        title="Improv - wearable"
      />

      <Back colorMode={"on-dark"} homeSection="#play-feeling-good-music" />
    </div>
  )
}

export default Improv
