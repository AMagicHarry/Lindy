import React, { Component } from "react"

import Back from "../back-nav/back-nav"
import Fade from "react-reveal/Fade"

import "./content-training.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

//vowels
import eee from "../../sound/training/vowels/eee.wav"
import ehh from "../../sound/training/vowels/ehh.wav"
import aaa from "../../sound/training/vowels/aaa.wav"
import ahh from "../../sound/training/vowels/aaa2.wav"
import ohh from "../../sound/training/vowels/ohh.wav"
import ooo from "../../sound/training/vowels/ooo.wav"

//temp 0.5
import news1 from "../../sound/training/temp-0.5/news1.wav"
import news2 from "../../sound/training/temp-0.5/news2.wav"
import news3 from "../../sound/training/temp-0.5/news3.wav"
import stop from "../../sound/training/temp-0.5/stop.wav"
import weather from "../../sound/training/temp-0.5/what-is-the-weather-like.wav"
import morning from "../../sound/training/temp-0.5/what-is-the-sound-of-the-morning.wav"
import temperature from "../../sound/training/temp-0.5/what-is-the-temperature-outside.wav"
import earth from "../../sound/training/temp-0.5/play-the-earth.wav"
import music from "../../sound/training/temp-0.5/show-me-a-feature-of-some-music.wav"
import day from "../../sound/training/temp-0.5/what-is-the-day.wav"
import direction from "../../sound/training/temp-0.5/what-is-the-next-direction.wav"
import beer from "../../sound/training/temp-0.5/what-has-beer.wav"
import list from "../../sound/training/temp-0.5/how-do-you-make-a-list.wav"
import menu from "../../sound/training/temp-0.5/show-me-good-menu.wav"
import news4 from "../../sound/training/temp-0.5/news4.wav"

//temp 0.7
import shelter from "../../sound/training/temp-0.7/what does a shelter tab.wav"
import treptin from "../../sound/training/temp-0.7/does your best-treptin in some.wav"
import charge from "../../sound/training/temp-0.7/how to charge the delivia in dishonored 2 NEW.wav"
import spell from "../../sound/training/temp-0.7/how do I spell singulium.wav"
import english from "../../sound/training/temp-0.7/what is english sounds.wav"
import play from "../../sound/training/temp-0.7/play sizes of 3-11 NEW.wav"
import universe from "../../sound/training/temp-0.7/what is the universe.wav"
import game from "../../sound/training/temp-0.7/what is the game.wav"
import lobster from "../../sound/training/temp-0.7/Rouse Lobster.wav"
import blu from "../../sound/training/temp-0.7/who has blu r1 hgale NEW.wav"
import survive from "../../sound/training/temp-0.7/show me a survive of ratiooble day strong.wav"
import cathy from "../../sound/training/temp-0.7/open Cathy NEW.wav"
import twins from "../../sound/training/temp-0.7/show me twins.wav"

//temp 1.0
import tree from "../../sound/training/temp-1.0/21061 details trees funnses.wav"
import bill from "../../sound/training/temp-1.0/Surrent Bill Red US splat horror string ever.wav"
import term from "../../sound/training/temp-1.0/term thousass NEW.wav"
import singing from "../../sound/training/temp-1.0/oh ho singing malaciage.wav"
import earny from "../../sound/training/temp-1.0/Earney House NEW.wav"
import google from "../../sound/training/temp-1.0/show me OK Google arm tomorrow.wav"
import pause from "../../sound/training/temp-1.0/what is the pause.wav"
import unlock from "../../sound/training/temp-1.0/because unlock moctures NEW.wav"
import spotify from "../../sound/training/temp-1.0/whats spotify.wav"
import unknown from "../../sound/training/temp-1.0/say unknown cod only.wav"
import spicer from "../../sound/training/temp-1.0/spicers vallet in play a cat miles NEW.wav"
import puppy from "../../sound/training/temp-1.0/i want to make puppy sound.wav"
import horted from "../../sound/training/temp-1.0/Define horted yes.wav"
import glow from "../../sound/training/temp-1.0/Glow referend closest stimullan.wav"
import free from "../../sound/training/temp-1.0/Oroice free.wav"
import cock from "../../sound/training/temp-1.0/battlefield 5 pottic cock.wav"
import chareds from "../../sound/training/temp-1.0/Show non chareds illector.wav"

let text = [
  "eee",
  "ehh",
  "aaa",
  "ahh",
  "ohh",
  "ooo",
  "news",
  "news",
  "news",
  "stop",
  "what is the weather like",
  " what is the sound of the morning",
  "what is the temperature outside",
  "play the earth",
  "show me a feature of some music",
  "what is the day",
  "what’s the next direction",
  "what has beer",
  "how do you make a list",
  "show me good menu",
  "news",
  "what does a shelter tab",
  "does your best-trepten in some",
  "how to charge the delivia in dishonored 2",
  "how do I spell singulium",
  "what is English sounds",
  "play sizes 3/11",
  "what is the universe",
  "what is the game",
  "Rouse Lobster",
  "who was there a blu r1 hgale",
  "show me a survive of ratiooble day strong",
  "open Cathy",
  "show me twins",
  "21016 Details Trees funnses",
  "Surrent Bill Red US splat horror string ever",
  "term thousass",
  "oh ho singing malaciage",
  "Earny House",
  "show me OK Google arm tomorrow",
  "what is the pause",
  "because unlock moctures in the hot",
  "what’s spotify",
  "say unknown cod only",
  "Spicer’s vallet in Play a Cat Miles",
  "i want to make puppy sound",
  "Define horted yes",
  "Glow referend closest stimullan",
  "Oroice free",
  "battlefield 5 pottic cock",
  "Show non chareds illector",
]

let audio = [
  eee,
  ehh,
  aaa,
  ahh,
  ohh,
  ooo,
  news1,
  news2,
  news3,
  stop,
  weather,
  morning,
  temperature,
  earth,
  music,
  day,
  direction,
  beer,
  list,
  menu,
  news4,
  shelter,
  treptin,
  charge,
  spell,
  english,
  play,
  universe,
  game,
  lobster,
  blu,
  survive,
  cathy,
  twins,
  tree,
  bill,
  term,
  singing,
  earny,
  google,
  pause,
  unlock,
  spotify,
  unknown,
  spicer,
  puppy,
  horted,
  glow,
  free,
  cock,
  chareds,
]

let titleText = ["temperature 0.5", "temperature 0.7", "temperature 1.0"]

class ContentTraining extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageClick: 0,
    }
  }

  incrementClicks(e) {
    this.setState({
      pageClick: this.state.pageClick + 1,
    })
  }

  fillPage() {
    if (this.state.pageClick >= 1) {
      let currentWord = this.state.pageClick - 1

      //replace text
      document.getElementsByClassName("content-training__text")[0].innerHTML =
        text[currentWord]

      //rerplace audio
      let audioEl = document.getElementsByClassName("audio-element")[0]

      document.getElementsByClassName("audio-element")[0].src =
        audio[currentWord]

      if (audioEl.paused) {
        audioEl.muted = false
        audioEl.play()
      } else {
        audioEl.pause()
        audioEl.currentTime = 0
        audioEl.play()
      }

      //change style
      if (currentWord == 7) {
        document
          .getElementsByClassName("content-training")[0]
          .classList.add("content-training__temperature-05")
      }

      if (currentWord == 22) {
        document
          .getElementsByClassName("content-training")[0]
          .classList.add("content-training__temperature-07")
      }

      if (currentWord == 35) {
        document
          .getElementsByClassName("content-training")[0]
          .classList.add("content-training__temperature-1")
      }

      //change temperature title
      if (currentWord == 7) {
        let trainingTitle = document.getElementsByClassName(
          "content-training__temp__title"
        )[0]
        trainingTitle.classList.remove("invisible")

        trainingTitle.classList.add("visible")
        trainingTitle.innerHTML = titleText[0]
      }

      if (currentWord == 22) {
        let trainingTitle = document.getElementsByClassName(
          "content-training__temp__title"
        )[0]
        trainingTitle.classList.remove("invisible")

        trainingTitle.classList.add("visible")
        trainingTitle.innerHTML = titleText[1]
      }

      if (currentWord == 35) {
        let trainingTitle = document.getElementsByClassName(
          "content-training__temp__title"
        )[0]
        trainingTitle.classList.remove("invisible")

        trainingTitle.classList.add("visible")
        trainingTitle.innerHTML = titleText[2]
      }

      //remove small heading
      if (currentWord == 1) {
        document
          .getElementsByClassName("small-header")[0]
          .classList.add("invisible")
        document
          .getElementsByClassName("small-header__info")[0]
          .classList.add("invisible")
      }

      //add back button
      if (currentWord == 10) {
        return (
          <Fade duration={1000}>
            <Back
              positionMode={"absolute"}
              colorMode={"on-dark"}
              className="visible content-training__back"
            />
          </Fade>
        )
      }
    }
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      console.log("enter press here!")
    }
  }

  render() {
    return (
      <div>
        <div
          className="content-training"
          onClick={e => this.incrementClicks(e)}
          onFocus={e => this.incrementClicks(e)}
          tabIndex="1"
        >
          <p className="content-training__text">eee</p>
          <audio className="audio-element" muted>
            <source src={eee}></source>
          </audio>
        </div>
        <p className="content-training__temp__title invisible "></p>

        {this.fillPage()}
      </div>
    )
  }
}
export default ContentTraining
