import React, { Component } from "react"
import { Link } from "gatsby"
import ScrollTrigger from "react-scroll-trigger"
import Fade from "react-reveal/Fade"
import { reactLocalStorage } from "reactjs-localstorage"

import "./layout.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import sliding from "../../images/index/sliding.gif"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      mobileWidth: 700,
    }
  }

  changeWidth(mobileWidth) {
    reactLocalStorage.set("enterSite", true)

    this.setState({
      mobileWidth: 0,
    })
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount(mobileWidth) {
    window.addEventListener("resize", this.updateDimensions)
    this.setState({ width: window.innerWidth })

    if (reactLocalStorage.getObject("enterSite") == true) {
      this.setState({
        mobileWidth: 0,
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  render() {
    const isMobile = this.state.width <= 700
    console.log(this.state.width <= 700)

    if (isMobile) {
      console.log("mobile")
      return (
        <Fade delay={1000}>
          <div className="layout__mobile">
            <img
              src={sliding}
              alt="Alexas sliding out of a tube"
              className="layout__mobile__img"
            />
            <h3 className="layout__mobile__title"> VOICES + VOIDS </h3>
            <p className="layout__mobile__description">
              Voices + Voids features interactive vignettes best experienced on
              a computer
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
          </div>
        </Fade>
      )
      //    return
    } else {
      console.log("not mobile")
      return <div>{this.props.children}</div>
    }
  }
}
export default Layout
