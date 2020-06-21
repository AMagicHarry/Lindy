import React from "react"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import HomeHeader from "../components/home-header/home-header"

import ContentHome from "../components/content-home/content-home"

function IndexPage(props) {
  return (
    <div>
      <SEO title="Voices and Voids" />
      <HomeHeader />
      <ContentHome />
    </div>
  )
}

export default IndexPage
