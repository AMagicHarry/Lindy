import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout/layout"
import SmallHeader from "../components/small-header/small-header"
import Back from "../components/back-nav/back-nav"

import ContentPot from "../components/content-pot/content-pot"

function GardenOfPots(props) {
  return (
    <div>
      <SEO title="Garden of pots" />
      <Layout>
        <SmallHeader
          className="small-header__title"
          headerTitle={"Garden of pots"}
          infoTitle={"Garden of pots"}
          infoContent={[
            "A few pots hide the ambient noises gleaned from the background of Amazon Mechanical Turker workers who work to train voice assistants and sift through voice assistant data.",
            <br />,
            <br />,
            "Collaborator:",
            <br />,
            "Danny Clay",
          ]}
        />
        <ContentPot />
        <Back homeSection="#garden of pots" />
      </Layout>
    </div>
  )
}

export default GardenOfPots
