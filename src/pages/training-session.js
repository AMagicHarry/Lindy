import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"

import Layout from "../components/layout/layout"
import SmallHeader from "../components/small-header/small-header"
import ContentTraining from "../components/content-training/content-training"

function Training(props) {
  return (
    <div>
      <SEO title="Training session" />
      <Layout>
        <SmallHeader
          headerTitle={"Training session"}
          infoTitle={"Training session"}
          infoContent={[
            "Performers read utterances on screen without practice or preparation as if training a voice assistant to understand human speech patterns. These utterances were created using the neural net trained on real voice assistant data, at different temperatures (leading to more or less non-sensical utterances).",
            <br />,
            <br />,
            "Collaborators:",
            <br />,
            "Danny Clay",
            <br />,
            "Gabrielle Benabdallah",
            <br />,
            "Beckett Crouse",
            <br />,
            "Amazon Mechanical Turker workers",
          ]}
        />
        <ContentTraining />
      </Layout>
    </div>
  )
}

export default Training
