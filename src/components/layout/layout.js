import React, { Component } from "react"
import { Link } from "gatsby"
import ScrollTrigger from "react-scroll-trigger"
import Fade from "react-reveal/Fade"
import { reactLocalStorage } from "reactjs-localstorage"

import Mobile from "../mobile/mobile"

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

    if (isMobile) {
      return <Mobile />
    } else {
      return <div>{this.props.children}</div>
    }
  }
}
export default Layout
