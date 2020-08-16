import React from "react"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout/layout"
import HomeHeader from "../components/home-header/home-header"
import ContentHome from "../components/content-home/content-home"

function IndexPage(props) {
  return (
    <div>
      <SEO title="Voices and Voids" />
      <Layout>
        <HomeHeader />
        <ContentHome />
      </Layout>
    </div>
  )
}

export default IndexPage
