import React, { Component } from "react"
import ScrollTrigger from "react-scroll-trigger"
import Fade from "react-reveal/Fade"

import "./basic-header.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class BasicHeader extends Component {
  render() {
    return (
      <header className="home-header">
        <h1 className="home-header__title">{this.props.headerTitle}</h1>
      </header>
    )
  }
}
export default BasicHeader
