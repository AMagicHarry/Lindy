import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import BasicHeader from "../components/home-header/basic-header"

import ContentHome from "../components/content-home/content-home"

function IndexPage(props) {
  return (
    <div>
      <SEO title="Voices and Voids" />
      <ContentHome />
      <BasicHeader headerTitle={"Voices and Voids"} />
    </div>
  )
}

export default IndexPage
