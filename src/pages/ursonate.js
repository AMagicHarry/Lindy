import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import SmallHeader from "../components/small-header/small-header"
import Back from "../components/back-nav/back-nav"
import ContentUrsonate from "../components/content-ursonate/content-ursonate"

function Ursonate(props) {
  return (
    <div>
      <SEO title="Ursonate" />

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
    </div>
  )
}

export default Ursonate
