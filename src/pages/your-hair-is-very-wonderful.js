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

function YourHair(props) {
  return (
    <div>
      <SEO title="Your hair is very wonderful" />
      <Layout>
        <div className="black-background"></div>
        <SmallHeader
          colorMode={"small-header__on-dark"}
          headerTitle={"Your hair is very wonderful"}
          infoTitle={"Your hair is very wonderful"}
          infoContent={[
            "Sonic interpretations of a series of 6 consecutive statements from a Google Voice Assistant data log sourced from an Amazon Mechanical Turk worker, with accompanying text.",
            <br />,
            <br />,
            "Collaborator:",
            <br />,
            "Danny Clay",
          ]}
        />

        <VideoFull
          videoSrc="https://player.vimeo.com/video/431882372?title=0&byline=0&portrait=0"
          title="Your hair is very wonderful"
        />

        <Back
          colorMode={"on-dark"}
          homeSection="#your-hair-is-very-wonderful"
        />
      </Layout>
    </div>
  )
}

export default YourHair
