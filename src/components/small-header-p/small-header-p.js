import React, { Component } from "react"
import ScrollTrigger from "react-scroll-trigger"
import Fade from "react-reveal/Fade"

import "./small-header-p.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class SmallHeaderP extends Component {
  render() {
    return (
      <div>
        <p> {this.props.infoContentP}</p>
      </div>
    )
  }
}

export default SmallHeaderP
