import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"

import SmallHeader from "../components/small-header/small-header"
import ContentTraining from "../components/content-training/content-training"

function Training(props) {
  return (
    <div>
      <SEO title="Training a voice assistant" />

      <SmallHeader
        headerTitle={"Training a voice assistant"}
        infoTitle={"Training"}
        infoContent={
          "As if we were training a  voice assistant to understand human ways of saying things, we said utterances as they appeared on screen. These utterances were created using the neural net trained on real voice assistant data, at different temperatures (leading to more or less non-sensical utterances). Composed by Danny Clay Neural Net by Gabrielle Benabdallah"
        }
      />
      <ContentTraining />
    </div>
  )
}

export default Training
