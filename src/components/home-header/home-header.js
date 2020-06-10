import React, { Component } from "react"
import ScrollTrigger from "react-scroll-trigger"

import "./home-header.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class HomeHeader extends Component {
  render() {
    return (
      <header className="home-header">
        <h1 className="home-header__title">Voices and Voides</h1>
        <p className="home-header__explainer">
          Explorations around how we might reclaim, transcode, and embody voice
          assitant interactions and data
        </p>
      </header>
    )
  }
}
export default HomeHeader
