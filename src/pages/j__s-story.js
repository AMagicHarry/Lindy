import React from "react"
import SEO from "../components/seo"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"

import SmallHeader from "../components/small-header/small-header"
import VideoFull from "../components/video-full/video-full"

import Back from "../components/back-nav/back-nav"

function JStory(props) {
  return (
    <div className="black-background">
      <SEO title="J__'s Story" />

      <SmallHeader
        colorMode={"small-header__on-dark"}
        headerTitle={"J__'s story"}
        infoTitle={"J__'s story"}
        infoContent={[
          "This piece uses voice interaction data from one user’s Google Assistant, with short, unedited excerpts that span four years.",
          <br />,
          <br />,
          "Collaborators:",
          <br />,
          "Yiheng Yvonne Wu",
          <br />,
          "Danny Clay",
        ]}
      />

      <VideoFull
        videoSrc="https://player.vimeo.com/video/435822685?title=0&byline=0&portrait=0"
        title="J's Story"
      />

      <Back colorMode={"on-dark"} homeSection="#j__s-story" />
    </div>
  )
}

export default JStory
