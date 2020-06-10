import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import BasicHeader from "../components/home-header/basic-header"

import HomeContent from "../components/home-content/home-content"

const IndexPage = () => (
  <div>
    <SEO title="Voices and Voides" />
    <Fade>
      <BasicHeader headerTitle="voices and voids" />
    </Fade>
    <HomeContent />
  </div>
)

export default IndexPage
