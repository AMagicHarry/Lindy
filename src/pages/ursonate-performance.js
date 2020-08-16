import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"

import Layout from "../components/layout/layout"
import SmallHeader from "../components/small-header/small-header"
import VideoFull from "../components/video-full/video-full"

import Back from "../components/back-nav/back-nav"

function UrsonatePerformance(props) {
  return (
    <div>
      <SEO title="UrSonate Performance" />
      <Layout>
        <div className="black-background">
          <SmallHeader
            colorMode={"small-header__on-dark"}
            headerTitle={"UrSonate Performance"}
            infoTitle={"Ursonate Performance"}
            infoContent={[
              "A realization of an excerpt from Kurt Schwitters' sound poem 'UrSonate' (1922/32.) This version involves a human recitation of the original poem, as well as a combination of text to voice and voice to text applications that allow the smart speaker to both transcribe and recite versions of the nonsense words.",
              <br />,
              <br />,
              "Collaborator:",
              <br />,
              "Alexa",
            ]}
          />

          <VideoFull
            videoSrc="https://player.vimeo.com/video/431883467?title=0&byline=0&portrait=0"
            title="Ursonate performance"
          />

          <Back colorMode={"on-dark"} homeSection="#ursonate" />
        </div>
      </Layout>
    </div>
  )
}

export default UrsonatePerformance
