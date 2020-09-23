import React, { Component } from "react"
import { Link } from "gatsby"
import ScrollTrigger from "react-scroll-trigger"
import Fade from "react-reveal/Fade"
import { reactLocalStorage } from "reactjs-localstorage"

import "./mobile.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import sliding from "../../images/index/sliding.gif"

class Mobile extends Component {
  render() {
    return (
      <div className="layout__mobile">
        <Fade>
          <img
            src={sliding}
            alt="Alexas sliding out of a tube"
            className="layout__mobile__img"
          />
          <h3 className="layout__mobile__title"> VOICES + VOIDS </h3>
          <p className="layout__mobile__description">
            Voices + Voids features interactive vignettes best experienced on a
            computer
          </p>
          <div className="layout__mobile__email text-link__underline">
            <p>
              <a href="mailto: ?subject=Voices + Voids&body=https://amandayehh.github.io/voices-and-voids/">
                Email myself the link
              </a>
            </p>
          </div>
          <div
            className="layout__mobile__enter text-link__underline"
            onClick={() => this.changeWidth()}
          >
            <p>Continue to site, but expect quirky layout bugs</p>
          </div>
        </Fade>
      </div>
    )
  }
}
export default Mobile
