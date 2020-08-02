import React, { Component } from "react"
import { Link } from "gatsby"
import ScrollTrigger from "react-scroll-trigger"
import Fade from "react-reveal/Fade"

import "./home-header.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class HomeHeader extends Component {
  addAbout() {
    document.getElementsByClassName("home-header__title")[0].innerHTML = "about"
    document
      .getElementsByClassName("home-header__title")[0]
      .classList.add("red")
  }

  removeAbout() {
    document.getElementsByClassName("home-header__title")[0].innerHTML =
      "Voices + voids"
    document
      .getElementsByClassName("home-header__title")[0]
      .classList.remove("red")
  }

  render() {
    return (
      <header className="home-header">
        <Link to="/about">
          <h1
            className="home-header__title"
            onMouseEnter={this.addAbout}
            onMouseLeave={this.removeAbout}
            tabIndex="0"
            aria-label="learn about this site"
          >
            Voices + Voids
          </h1>
        </Link>
      </header>
    )
  }
}
export default HomeHeader
