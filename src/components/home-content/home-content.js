import React, { Component } from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import ScrollTrigger from "react-scroll-trigger"

import "./home-content.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import echo from "../../images/index/echo-voices.gif"
import timeline from "../../images/index/timeline.gif"
import bonnie from "../../images/index/bonnie-snare.png"
import hairWonder from "../../images/index/hair-wonderful.png"
import audioData from "../../images/index/audio-data.png"
import measureTape from "../../images/index/measuring-tape.gif"
import armsMoving from "../../images/index/arms-moving.gif"
import disassembledEcho from "../../images/index/disassembled-echo.gif"
import AIYWearable from "../../images/index/AIY-wearable.gif"
import clayPot from "../../images/index/clay-pot.gif"
import concrete from "../../images/index/concrete.png"

class HomeContent extends Component {
  render() {
    return (
      <main className="home-content">
        <div className="home-content__hero">
          <p className="home-content__hero__explainer">
            Explorations around how we might reclaim, transcode, and embody
            voice assistant interactions and data
          </p>
          <Link to="/chit-chat">
            <img
              src={echo}
              alt="echo speaking to each other"
              className="home-content__hero__echo-img echo-img__1"
            />
          </Link>
          <Link to="/chit-chat">
            <img
              src={echo}
              alt="echo speaking to each other"
              className="home-content__hero__echo-img echo-img__2"
            />
          </Link>
          <Link to="/chit-chat">
            <img
              src={echo}
              alt="echo speaking to each other"
              className="home-content__hero__echo-img echo-img__3"
            />
          </Link>
          <Link to="/chit-chat">
            <img
              src={echo}
              alt="echo speaking to each other"
              className="home-content__hero__echo-img echo-img__4"
            />
          </Link>
          <Link to="/chit-chat">
            <img
              src={echo}
              alt="echo speaking to each other"
              className="home-content__hero__echo-img echo-img__5"
            />
          </Link>
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

          <div className="home-content__1__text">
            <Link to="/" className="text-link__italics">
              What time is it what time is it what time is it what time is it
              what time is it what time is it what time is it what time is it
              what time is it what time is it what time is it what time is it
              what time is it what time is it
            </Link>
          </div>
        </div>
        <div className="home-content__2">
          <div className="home-content___2__text-1">
            <p>{"},{"}</p>
            <p>
              <span>&nbsp;&nbsp;</span>
              &quot;header&quot;: &quot;Assistant&quot;,
            </p>
            <p>
              <span>&nbsp;&nbsp;</span>
              &quot;title&quot;: &quot;Said okie dokie that is very interesting
              from the snails perspective&quot;,
            </p>
            <p>
              <span>&nbsp;&nbsp;</span>
              &quot;titleUrl&quot;:
              &quot;https://www.google.com/search?q\u003dokie+dokie+that+is+very+interesting+from+the+snails+perspective&quot;,
            </p>
            <p>
              <span>&nbsp;&nbsp;</span>
              &quot;subtitles&quot;{": [{"}
            </p>
            <p>
              <span>&nbsp; &nbsp;&nbsp;</span>
              &quot;name&quot;: &quot;Okie dokie, c\u0027est tr&radic;&reg;s
              int&radic;&copy;ressant du point de vue des escargots.&quot;
            </p>
            <p>
              <span>&nbsp;&nbsp;</span>}],
            </p>
            <p>
              <span>&nbsp;&nbsp;</span>
              &quot;time&quot;: &quot;2019-12-13T00:18:06.283Z&quot;,
            </p>
            <p>
              <span>&nbsp;&nbsp;</span>
              &quot;audioFiles&quot;:
              [&quot;2019-12-13_00_18_06_944_UTC.mp3&quot;],
            </p>
            <p>
              <span>&nbsp;&nbsp;</span>
              &quot;products&quot;: [&quot;Assistant&quot;],
            </p>
            <p>
              <span>&nbsp;&nbsp;</span>
              &quot;locationInfos&quot;{": [{"}
            </p>
            <p>
              <span>&nbsp; &nbsp;&nbsp;</span>
              &quot;name&quot;: &quot;Around this area&quot;,
            </p>
            <p>
              <span>&nbsp; &nbsp;&nbsp;</span>
              &quot;source&quot;: &quot;From your device&quot;
            </p>
            <p>
              <span>&nbsp;&nbsp;</span>}]
            </p>
          </div>
          <div className="home-content__2__text-2">
            <p>&quot;time&quot;: &quot;2019-01-19T22:40:07.364Z&quot;,</p>
            <p>
              <span>&nbsp; &nbsp;</span>how many centimeters in an inch
              <span>&nbsp;</span>
            </p>
            <br />
            <br />
            <p>&quot;time&quot;: &quot;2019-01-19T22:39:59.288Z&quot;,</p>
            <p>
              <span>&nbsp; &nbsp;</span>how wide is the average fingernail
              <span>&nbsp;</span>
            </p>
          </div>
        </div>
        <div className="home-content__3">
          <p className="home-content__3__text-1">
            <Link to="/ursonate" className="text-link__italics">
              Fuümms bö wö tää{" "}
            </Link>
          </p>

          <p className="home-content__3__text-2">
            <Link to="/ursonate" className="text-link__italics">
              Whole foods
            </Link>
          </p>

          <p className="home-content__3__text-3">
            <Link to="/ursonate" className="text-link__italics">
              Bezos
            </Link>
          </p>

          <p className="home-content__3__text-4">
            <Link to="/ursonate" className="text-link__italics">
              Oooooooooooooooooooooooooo{" "}
            </Link>
          </p>

          <div className="home-content__3__video">
            <iframe
              src="https://player.vimeo.com/video/420202270?portrait=0"
              width="100%"
              height="338"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="home-content__4">
          <Link to="/your-hair">
            <img
              src={hairWonder}
              alt="white text on black - your hair is very wonderful - that painting is astounding"
              className="home-content__4__img"
            />
          </Link>
        </div>
        <div className="home-content__5">
          <Link to="/">
            <img
              src={audioData}
              alt="lists of data audio files"
              className="home-content__5__img"
            />
          </Link>
        </div>

        <div className="home-content__6">
          <Link to="/">
            <img
              src={measureTape}
              alt="animated measuring tape"
              className="home-content__6__img"
            />
          </Link>
        </div>

        <div className="home-content__7">
          <Link to="/">
            <img
              src={armsMoving}
              alt="Set an alarm trio - arms moving"
              className="home-content__7__img"
            />
          </Link>
        </div>

        <div className="home-content__8">
          <Link to="/">
            <img
              src={disassembledEcho}
              alt="parts of a disassembled echo"
              className="home-content__8__img"
            />
          </Link>
        </div>

        <div className="home-content__9">
          <p className="home-content__9__text-1">
            <Link to="/" className="text-link__italics">
              Being
            </Link>
          </p>
          <p className="home-content__9__text-2">
            <Link to="/" className="text-link__italics">
              Body
            </Link>
          </p>
          <p className="home-content__9__text-3">
            <Link to="/" className="text-link__italics">
              Feeling
            </Link>
          </p>
          <p className="home-content__9__text-4">
            <Link to="/" className="text-link__italics">
              Care
            </Link>
          </p>
          <p className="home-content__9__text-5">
            <Link to="/" className="text-link__italics">
              Intelligence
            </Link>
          </p>
          <Link to="/">
            <img
              src={AIYWearable}
              alt="silhouette of a person wearing the AIY wearable"
              className="home-content__9__img"
            />
          </Link>
        </div>

        <div className="home-content__10">
          <Link to="/">
            <div className="home-content__10__img">
              <img
                src={clayPot}
                alt="clay pot covering an echo dot"
                className="home-content__10__img__1"
              />
              <img
                src={clayPot}
                alt="clay pot covering an echo dot"
                className="home-content__10__img__2"
              />
              <img
                src={clayPot}
                alt="clay pot covering an echo dot"
                className="home-content__10__img__3"
              />
            </div>
          </Link>
        </div>

        <div className="home-content__11">
          <p className="home-content__11__text-1">
            <Link to="/" className="text-link__italics">
              ehh
            </Link>
          </p>
          <p className="home-content__11__text-2">
            <Link to="/" className="text-link__italics">
              ooo
            </Link>
          </p>
          <p className="home-content__11__text-3">
            <Link to="/" className="text-link__italics">
              eee
            </Link>
          </p>
          <p className="home-content__11__text-4">
            <Link to="/" className="text-link__italics">
              ohh
            </Link>
          </p>
          <p className="home-content__11__text-5">
            <Link to="/" className="text-link__italics">
              stop
            </Link>
          </p>
        </div>

        <div className="home-content__12">
          <img
            src={concrete}
            alt="voice assistants and instruments on concrete"
            className="home-content__12__img"
          />
        </div>
      </main>
    )
  }
}
export default HomeContent
