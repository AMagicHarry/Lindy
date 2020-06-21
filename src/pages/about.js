import React from "react"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import BasicHeader from "../components/home-header/home-header"
import ContentAbout from "../components/content-about/content-about"
import Back from "../components/back-nav/back-nav"

function IndexPage(props) {
  return (
    <div>
      <SEO title="Voices and Voids" />
      <ContentAbout />
      <Back colorMode={"is-red"} />
    </div>
  )
}

export default IndexPage
