import React, { Component } from "react"
import { Link } from "gatsby"
import ScrollTrigger from "react-scroll-trigger"
import Fade from "react-reveal/Fade"

import "./back-nav.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import backBlack from "../../images/back-black.svg"

class BackNav extends Component {
  getBackNavClass() {
    if (this.props.positionMode == "absolute") {
      return "back-nav__absolute"
    } else {
      return "back-nav"
    }
  }

  getStrokeClassName() {
    if (this.props.colorMode == "on-dark") {
      return "back-nav__on-dark-stroke "
    } else {
      return "back-nav__on-light-stroke"
    }
  }

  render() {
    return (
      <div className={this.getBackNavClass()}>
        <Link to="/">
          <svg
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="back-nav__img"
          >
            <path
              className={this.getStrokeClassName()}
              d="M29.7474 52.4975L4.99862 27.7487L29.7474 3.00001"
              strokeWidth="6"
            />
          </svg>
        </Link>
      </div>
    )
  }
}
export default BackNav
