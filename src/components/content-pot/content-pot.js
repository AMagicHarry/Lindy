import React, { Component } from "react"
import ScrollTrigger from "react-scroll-trigger"

import "./content-pot.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import still from "../../images/pots/pot-still-v2.gif"
import move from "../../images/pots/alexa-pot-v2.gif"

import ambience1 from "../../sound/pots/ambience 1.mp3"
import ambience2 from "../../sound/pots/ambience 2.mp3"
import ambience3 from "../../sound/pots/ambience 3.mp3"
import ambience4 from "../../sound/pots/ambience 4.mp3"
import ambience5 from "../../sound/pots/ambience 5.mp3"
import ambience6 from "../../sound/pots/ambience 6.mp3"
import ambience7 from "../../sound/pots/ambience 7.mp3"
import ambience8 from "../../sound/pots/ambience 8.mp3"

class ContentPott extends Component {
  constructor(props) {
    super(props)
    this.state = {
      muted: false,
    }
  }

  playSound(source, e) {
    let currentClass = e.target.classList[1]

    e.target.src = move
    if (e.target.id != null) {
      if (
        document.getElementsByClassName("audio-player" + source).length == 0
      ) {
        let sound = document.createElement("audio")
        sound.className = "audio-player" + source
        sound.classList.add("audio-player")
        sound.src = source
        sound.type = "audio/mpeg"
        sound.muted = this.state.muted
        sound.addEventListener(
          "ended",

          function () {
            switchImg(currentClass)
          }
        )

        document.getElementById("song").appendChild(sound)
        sound.play()
      } else if (
        document.getElementsByClassName("audio-player" + source).length != 0
      ) {
        let currentSound = document.getElementsByClassName(
          "audio-player" + source
        )[0]

        if (currentSound.paused) {
          currentSound.play()
          e.target.src = move
        } else {
          currentSound.pause()
          e.target.src = still
        }
      }
      function switchImg(currentClass) {
        document.getElementsByClassName(currentClass)[0].src = still
      }
    }
  }

  changeVolume(e) {
    let sound = document.getElementsByClassName("audio-player")
    if (this.state.muted == true) {
      this.setState({
        muted: false,
      })
      document
        .getElementsByClassName("volume-svg__muted")[0]
        .classList.add("invisible")
      document
        .getElementsByClassName("volume-svg__muted")[0]
        .classList.remove("visible")
      document
        .getElementsByClassName("volume-svg__unmuted")[0]
        .classList.add("visible")
      document
        .getElementsByClassName("volume-svg__unmuted")[0]
        .classList.remove("invisible")
    } else if (this.state.muted == false) {
      this.setState({
        muted: true,
      })
      document
        .getElementsByClassName("volume-svg__muted")[0]
        .classList.add("visible")
      document
        .getElementsByClassName("volume-svg__muted")[0]
        .classList.remove("invisible")
      document
        .getElementsByClassName("volume-svg__unmuted")[0]
        .classList.add("invisible")
      document
        .getElementsByClassName("volume-svg__unmuted")[0]
        .classList.remove("visible")
    }
    for (let i = 0; i <= sound.length; i++) {
      if (sound[i] != undefined) {
        sound[i].muted = !this.state.muted
      }
    }
  }

  render() {
    return (
      <div className="content__pot">
        <div id="song"></div>

        <svg
          onClick={e => this.changeVolume(e)}
          className="volume-svg"
          role="button"
          aria-label="mute or unmute"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          tabIndex="0"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            className="volume-svg-path volume-svg__unmuted"
            d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
          />
          <path
            className="volume-svg-path volume-svg__muted invisible"
            d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
          />
        </svg>

        <img
          src={still}
          alt="Alexa underneath a pot"
          className="content__pot__img content__pot__img-1 content__pot__img__sound"
          id="ambience1"
          onClick={e => this.playSound(ambience1, e)}
        />
        <img
          src={still}
          alt="Alexa underneath a pot"
          className="content__pot__img content__pot__img-2"
        />
        <img
          src={still}
          alt="Alexa underneath a pot"
          className="content__pot__img content__pot__img-3 content__pot__img__sound"
          onClick={e => this.playSound(ambience2, e)}
        />
        <img
          src={still}
          alt="Alexa underneath a pot"
          className="content__pot__img content__pot__img-4 content__pot__img__sound"
          onClick={e => this.playSound(ambience3, e)}
        />
        <img
          src={still}
          alt="Alexa underneath a pot"
          className="content__pot__img content__pot__img-5"
        />
        <img
          src={still}
          alt="Alexa underneath a pot"
          className="content__pot__img content__pot__img-6 content__pot__img__sound"
          onClick={e => this.playSound(ambience4, e)}
        />
        <img
          src={still}
          alt="Alexa underneath a pot"
          className="content__pot__img content__pot__img-7 content__pot__img__sound"
          onClick={e => this.playSound(ambience5, e)}
        />
        <img
          src={still}
          alt="Alexa underneath a pot"
          className="content__pot__img content__pot__img-8"
        />
        <img
          src={still}
          alt="Alexa underneath a pot"
          className="content__pot__img content__pot__img-9 content__pot__img__sound"
          onClick={e => this.playSound(ambience6, e)}
        />
        <img
          src={still}
          alt="Alexa underneath a pot"
          className="content__pot__img content__pot__img-10"
        />
        <img
          src={still}
          alt="Alexa underneath a pot"
          className="content__pot__img content__pot__img-11 content__pot__img__sound"
          onClick={e => this.playSound(ambience7, e)}
        />
        <img
          src={still}
          alt="Alexa underneath a pot"
          className="content__pot__img content__pot__img-12 content__pot__img__sound"
          onClick={e => this.playSound(ambience8, e)}
        />
      </div>
    )
  }
}
export default ContentPott
