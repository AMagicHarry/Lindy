import React, { Component } from "react"
import ScrollTrigger from "react-scroll-trigger"
import Fade from "react-reveal/Fade"

import "./small-header.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

function showInfo() {
  let info = document.getElementsByClassName("small-header__info")[0]
  info.classList.remove("invisible")
  info.classList.add("visible")
}

function hideInfo() {
  let info = document.getElementsByClassName("small-header__info")[0]
  info.classList.remove("visible")
  info.classList.add("invisible")
}

class SmallHeader extends Component {
  getSmallHeaderTitleClassName() {
    if (this.props.colorMode == "small-header__on-dark") {
      return "small-header__title small-header__title__on-dark"
    } else {
      return "small-header__title small-header__title__on-light"
    }
  }

  getSmallHeaderInfoClassName() {
    if (this.props.colorMode == "small-header__on-dark") {
      return "small-header__info semi-bold small-header__info__on-dark invisible"
    } else {
      return "small-header__info semi-bold small-header__info__on-light invisible"
    }
  }

  getSmallHeaderInfoTitleClassName() {
    if (this.props.colorMode == "small-header__on-dark") {
      return "small-header__info__title semi-bold small-header__info__title__on-dark"
    } else {
      return "small-header__info__title semi-bold small-header__info__title__on-light"
    }
  }

  getSmallHeaderInfoContentClassName() {
    if (this.props.colorMode == "small-header__on-dark") {
      return "small-header__info_content small-header__info__content__on-dark"
    } else {
      return "small-header__info_content small-header__info__content__on-light"
    }
  }

  render() {
    return (
      <div>
        <header className="small-header">
          <h4
            className={this.getSmallHeaderTitleClassName()}
            onMouseOver={showInfo}
            onMouseOut={hideInfo}
            aria-label={this.props.infoContent}
          >
            {this.props.headerTitle}
          </h4>
        </header>
        <div className={this.getSmallHeaderInfoClassName()}>
          <p className={this.getSmallHeaderInfoTitleClassName()}>
            {this.props.infoTitle}
          </p>
          <p className={this.getSmallHeaderInfoContentClassName()}>
            {this.props.infoContent}
          </p>
        </div>
      </div>
    )
  }
}

export default SmallHeader
