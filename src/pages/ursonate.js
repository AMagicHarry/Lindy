import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import SmallHeader from "../components/small-header/small-header"

import ContentUrsonate from "../components/content-ursonate/content-ursonate"

function Ursonate(props) {
  return (
    <div>
      <SEO title="Ursonate" />

      <SmallHeader
        headerTitle={"Ursonate"}
        infoTitle={"Ursonate"}
        infoContent={
          "This texttovoice.io script is spoken by one voice assistant for other voices assistants to respond with very limited human intervention. "
        }
      />

      <ContentUrsonate />
    </div>
  )
}

export default Ursonate
