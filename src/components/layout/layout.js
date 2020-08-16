import React, { Component } from "react"
import { Link } from "gatsby"
import ScrollTrigger from "react-scroll-trigger"
import Fade from "react-reveal/Fade"

import "./layout.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      mobileWidth: 700,
    }
  }

  changeWidth() {
    this.setState({
      mobileWidth: 0,
    })
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { width } = this.state
    const isMobile = width <= this.state.mobileWidth
    console.log("isMobile")
    console.log(isMobile)

    if (isMobile) {
      return (
        <div className="layout__mobile">
          <h3 className="layout__mobile__title"> VOICES + VOIDS </h3>
          <p className="layout__mobile__description">
            Voices + Voids features interactive vignettes best experienced on a
            computer
          </p>
          <div className="layout__mobile__email text-link__underline">
            <p>
              <a href="mailto: ?subject=Voices + Voides&body=https://amandayehh.github.io/voices-and-voids/">
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
        </div>
      )
    } else {
      return <div>{this.props.children}</div>
    }
  }
}
export default Layout
