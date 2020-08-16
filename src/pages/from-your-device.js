import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout/layout"
import SmallHeader from "../components/small-header/small-header"
import Back from "../components/back-nav/back-nav"

import ContentDevice from "../components/content-device/content-device"

function FromYourDevice(props) {
  return (
    <div>
      <SEO title="From your device" />
      <Layout>
        <SmallHeader
          className="small-header__title"
          headerTitle={"From your device"}
          infoTitle={"From your device"}
          infoContent={
            "Selection of utterances from various Google Voice Assistant logs sourced from Amazon Mechanical Turk workers."
          }
        />
        <ContentDevice />
        <Back homeSection="#from-your-device" />
      </Layout>
    </div>
  )
}

export default FromYourDevice
