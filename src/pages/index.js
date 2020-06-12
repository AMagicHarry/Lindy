import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import BasicHeader from "../components/home-header/basic-header"

import HomeContent from "../components/home-content/home-content"

function IndexPage(props) {
  return (
    <div>
      <SEO title="Voices and Voides" />
      <HomeContent />
      <BasicHeader headerTitle={"Voices and Voids"} />
    </div>
  )
}

export default IndexPage
