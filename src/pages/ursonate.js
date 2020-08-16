import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout/layout"
import SmallHeader from "../components/small-header/small-header"
import Back from "../components/back-nav/back-nav"
import ContentUrsonate from "../components/content-ursonate/content-ursonate"

function Ursonate(props) {
  return (
    <div>
      <SEO title="Ursonate" />
      <Layout>
        <SmallHeader
          headerTitle={"Ursonate"}
          infoTitle={"Ursonate"}
          infoContent={[
            "A realization of an excerpt from Kurt Schwitters' sound poem 'UrSonate' (1922/32.) This version involves a human recitation of the original poem, as well as a combination of text to voice and voice to text applications that allow the smart speaker to both transcribe and recite versions of the nonsense words.",
            <br />,
            <br />,
            "Collaborator:",
            <br />,
            "Alexa",
          ]}
        />

        <ContentUrsonate />
        <Back homeSection="#ursonate" />
      </Layout>
    </div>
  )
}

export default Ursonate
