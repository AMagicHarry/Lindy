import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import HomeHeader from "../components/home-header/home-header"

import HomeContent from "../components/home-content/home-content"

const IndexPage = () => (
  <div>
    <SEO title="Voices and Voides" />
    <HomeHeader />
    <HomeContent />
  </div>
)

export default IndexPage
