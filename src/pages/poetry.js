import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import SmallHeader from "../components/small-header/small-header"
import Back from "../components/back-nav/back-nav"

import ContentPoetry from "../components/content-poetry/content-poetry"

function Poetry(props) {
  return (
    <div className="black-background">
      <SEO title="Neural Net Poetry" />

      <SmallHeader
        colorMode={"small-header__on-dark"}
        className="small-header__title"
        headerTitle={"trained on *allmturks.txt *data"}
        infoTitle={"Neural Net Poetry"}
        infoContent={
          "Trained on data logs from voice assistants that we bought from Amazon Mechanical Turk workers, this neural net produced new utterances that generate neural net poetry. Coding by Gabrielle Benabdallah"
        }
      />
      <ContentPoetry />
      <Back colorMode={"on-dark"} />
    </div>
  )
}

export default Poetry
