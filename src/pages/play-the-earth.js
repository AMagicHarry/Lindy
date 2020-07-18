import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import SmallHeader from "../components/small-header/small-header"
import Back from "../components/back-nav/back-nav"

import ContentPoetry from "../components/content-poetry/content-poetry"

function PlaytheEarth(props) {
  return (
    <div className="black-background">
      <SEO title="Play the Earth" />

      <SmallHeader
        colorMode={"small-header__on-dark"}
        className="small-header__title"
        headerTitle={"Play the Earth"}
        infoTitle={"Play the Earth"}
        infoContent={[
          "This poetry was generated with a Recurrent Neural Net (RNN) trained on voice assistants data logs sourced from Amazon Mechanical Turk workers. The poetry uses the records of interactions with AI as material and a generative AI model as tool.",
          <br />,
          <br />,
          "Collaborators:",
          <br />,
          "Gabrielle Benabdallah",
          <br />,
          "textgenrnn (TensorFlow)",
        ]}
      />
      <ContentPoetry />
      <Back colorMode={"on-dark"} homeSection="#play-the-Earth" />
    </div>
  )
}

export default PlaytheEarth
