import React from "react"
import SEO from "../components/seo"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"

import Layout from "../components/layout/layout"
import SmallHeader from "../components/small-header/small-header"
import VideoFull from "../components/video-full/video-full"

import Back from "../components/back-nav/back-nav"

function Alarm(props) {
  return (
    <div>
      <SEO title="Set an alarm trio" />
      <Layout>
        <div className="black-background">
          <SmallHeader
            colorMode={"small-header__on-dark"}
            headerTitle={"Set an alarm"}
            infoTitle={"Set an alarm"}
            infoContent={[
              "Movement score responding to voice assistant commands. The alarms are extracted from ghost workers' Google Voice Assistant data logs, and then scripted for Alexa using texttovoice.io. Score interpreted at home over zoom during the Covid-19 pandemic.",
              <br />,
              <br />,
              "Collaborator:",
              <br />,
              "Kate Sicchio",
              <br />,
              "Alexa",
            ]}
          />

          <VideoFull
            videoSrc="https://player.vimeo.com/video/418230349?title=0&byline=0&portrait=0"
            title="Set an alarm Trio"
          />

          <Back colorMode={"on-dark"} homeSection="#alarm" />
        </div>
      </Layout>
    </div>
  )
}

export default Alarm
