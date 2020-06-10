import React, { Component } from "react"
import { Link } from "gatsby"

import ScrollTrigger from "react-scroll-trigger"

import "./home-content.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import echo from "../../images/index/echo-voices.gif"
import timeline from "../../images/index/timeline.gif"
import bonnie from "../../images/index/bonnie-snare.png"

class Audio extends Component {
  render() {
    return (
      <main>
        <div className="home-content__hero">
          <img
            src={echo}
            alt="echo speaking to each other"
            className="home-content__hero__echo-img echo-img__1"
          />
          <img
            src={echo}
            alt="echo speaking to each other"
            className="home-content__hero__echo-img echo-img__2"
          />
          <img
            src={echo}
            alt="echo speaking to each other"
            className="home-content__hero__echo-img echo-img__3"
          />
          <img
            src={echo}
            alt="echo speaking to each other"
            className="home-content__hero__echo-img echo-img__4"
          />
          <img
            src={echo}
            alt="echo speaking to each other"
            className="home-content__hero__echo-img echo-img__5"
          />
        </div>
        <div className="home-content__1">
          <Link to="/">
            <img
              src={timeline}
              alt="animated timeline for j story"
              className="home-content__1__timeline-img"
            />
          </Link>
          <Link to="/">
            <img
              src={bonnie}
              alt="bonnie in red shirt hitting the snare"
              className="home-content__1__bonnie-img"
            />
          </Link>
          <Link to="/" className="text-link">
            <div className="home-content__1__text">
              What time is it what time is it what time is it what time is it
              what time is it what time is it what time is it what time is it
              what time is it what time is it what time is it what time is it
              what time is it what time is it
            </div>
          </Link>
        </div>
      </main>
    )
  }
}
export default Audio
