import React from "react"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout/layout"

import BasicHeader from "../components/home-header/home-header"
import ContentAbout from "../components/content-about/content-about"
import Back from "../components/back-nav/back-nav"

function About(props) {
  return (
    <div>
      <SEO title="About" />

      <Layout>
        <ContentAbout />
        <Back colorMode={"is-red"} homeSection="" />
      </Layout>
    </div>
  )
}

export default About
