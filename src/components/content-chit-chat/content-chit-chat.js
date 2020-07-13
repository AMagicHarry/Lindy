import React, { Component } from "react"
import ScrollTrigger from "react-scroll-trigger"

import "./content-chit-chat.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import silence from "../../sound/silence.mp3"

import amazonAudio from "../../sound/Mellon_pres_noClap.pt1.mp3"

import chitChat from "../../images/chit-chat/echos appearing with chit chat text.gif"

class ContentChitChat extends Component {
  constructor(props) {
    super(props)
    this.changeVolume = this.changeVolume.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    // this.audioEl = document.getElementsByClassName("audio-element")[0]
    this.state = {
      volume: false,
      mounted: false,
    }
  }

  changeVolume(e) {
    if (this.state.volume == true) {
      this.setState({
        volume: false,
      })
      document
        .getElementsByClassName("content-chit-chat__volume-svg__muted")[0]
        .classList.add("visible")
      document
        .getElementsByClassName("content-chit-chat__volume-svg__muted")[0]
        .classList.remove("invisible")
      document
        .getElementsByClassName("content-chit-chat__volume-svg__unmuted")[0]
        .classList.add("invisible")
      document
        .getElementsByClassName("content-chit-chat__volume-svg__unmuted")[0]
        .classList.remove("visible")
    } else if (this.state.volume == false) {
      console.log("volume false")
      this.setState({
        volume: true,
      })
      document
        .getElementsByClassName("content-chit-chat__volume-svg__muted")[0]
        .classList.add("invisible")
      document
        .getElementsByClassName("content-chit-chat__volume-svg__muted")[0]
        .classList.remove("visible")
      document
        .getElementsByClassName("content-chit-chat__volume-svg__unmuted")[0]
        .classList.add("visible")
      document
        .getElementsByClassName("content-chit-chat__volume-svg__unmuted")[0]
        .classList.remove("invisible")
    }
  }

  componentDidMount() {
    this.mounted = true
  }

  playSound() {
    if (this.mounted == true) {
      this.audioEl = document.getElementsByClassName("audio-element")[0]
      if (this.audioEl != undefined) {
        console.log(this.state.volume)
        if (this.state.volume == true) {
          this.audioEl.play()
          this.audioEl.muted = false
        } else if (this.state.volume == false) {
          this.audioEl.muted = true
        }
      }
    }
  }

  // onEnterViewport() {
  //   console.log(this.audioEl)
  //   if (this.audioEl == undefined) {
  //     this.audioEl = document.getElementsByClassName("audio-element")[0]
  //     this.audioEl.play()
  //   }
  //   if (this.audioEl != undefined) {
  //     this.scrolledOnce = true
  //     if (this.audioEl.paused) {
  //       this.audioEl.muted = this.state.volume
  //       this.audioEl.play()
  //     }
  //   }
  // }
  render() {
    return (
      <div>
        <svg
          onClick={e => this.changeVolume(e)}
          className="content-chit-chat__volume-svg"
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
            className="content-chit-chat__volume-svg-path content-chit-chat__volume-svg__unmuted invisible"
            d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
          />
          <path
            className="content-chit-chat__volume-svg-path content-chit-chat__volume-svg__muted visible"
            d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
          />
        </svg>
        <div className="content-chit-chat__text">
          <p>hi turkers hi amazon hi echo ok google</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>I love chit chatting.</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            &lt;amazon:effect name=&quot;whispered&quot;&gt;chit chat chit chat
            chit chat &lt;/amazon:effect&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>Echo, open shopping list &lt;break time=&quot;2s&quot;/&gt;</p>
          <p>
            <span>&nbsp;</span>
          </p>

          <p>
            Amazon, &lt;break time=&quot;1s&quot;/&gt; where are you &lt;break
            time=&quot;5s&quot;/&gt;
          </p>
          <audio
            ref={this.audioRef}
            className="audio-element"
            autoPlay={true}
            allow="autoplay"
            muted="muted"
          >
            <source src={amazonAudio}></source>
          </audio>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>Computer, open voice pad &lt;break time=&quot;2s&quot;/&gt;</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>Read &lt;break time=&quot;5s&quot;/&gt;</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>Computer, listen &lt;break time=&quot;2s&quot;/&gt;</p>
          <p>
            &lt;amazon:effect name=&quot;whispered&quot;&gt;chit chat chit chat
            chit chat chit chat chit chat
            <span>&nbsp;&nbsp;</span>
            &lt;/amazon:effect&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            I love chit chatting. Hey Computer, how old are you? &lt;break
            time=&quot;5s&quot;/&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            Hey Echo, what is the last thing you heard? &lt;break
            time=&quot;5s&quot;/&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>Amazon, where do you live? &lt;break time=&quot;5s&quot;/&gt;</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            Ok google, talk to a turk worker &lt;break time=&quot;7s&quot;/&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>parrot &lt;break time=&quot;5s&quot;/&gt;</p>
          <p>goldfinch &lt;break time=&quot;5s&quot;/&gt;</p>
          <p>stellar&#39;s jay &lt;break time=&quot;5s&quot;/&gt;</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>eagle &lt;break time=&quot;5s&quot;/&gt;</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            &lt;voice name=&quot;Ivy&quot;&gt;Hi. Most of my time is spent in my
            living room, on that old pink couch. One thing I don&#39;t tell a
            lot of people is...&lt;break time=&quot;300ms&quot;/&gt;
            &lt;amazon:effect name=&quot;whispered&quot;&gt;I am one of the
            voice workers for Alexa.&lt;/amazon:effect&gt;.&lt;/voice&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            Amazon, let&#39;s chat &lt;break time=&quot;2s&quot;/&gt; Jonathan
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            &lt;voice name=&quot;Kendra&quot;&gt;Amazon, tell me an
            inspirational quote &lt;/voice&gt;&lt;break time=&quot;3s&quot;/&gt;
          </p>
          <p>Echo, who is your inventor? &lt;break time=&quot;5s&quot;/&gt;</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            Computer, what is capitalism? &lt;break time=&quot;4s&quot;/&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            &lt;voice name=&quot;Matthew&quot;&gt;Ok google, talk to a turk
            worker &lt;break time=&quot;7s&quot;/&gt; &lt;/voice&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>eagle &lt;break time=&quot;5s&quot;/&gt;</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            I love chit chatting. Hey Computer, how old are you? &lt;break
            time=&quot;5s&quot;/&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            Hey Echo, what is the last thing you heard? &lt;break
            time=&quot;5s&quot;/&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>Amazon, where do you live? &lt;break time=&quot;5s&quot;/&gt;</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>Amazon, who is donald trump? &lt;break time=&quot;3s&quot;/&gt;</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            Echo, read an inspirational quote
            <span>&nbsp;&nbsp;</span>&lt;break time=&quot;3s&quot;/&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            Ok google, talk to a turk worker &lt;break time=&quot;7s&quot;/&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>toucan &lt;break time=&quot;5s&quot;/&gt;</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>
            Ok google, talk to a turk worker &lt;break time=&quot;7s&quot;/&gt;
          </p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>swallow &lt;break time=&quot;5s&quot;/&gt;</p>
          <p>
            <span>&nbsp;</span>
          </p>
          <p>It was great to chit chat. Let&#39;s do it again soon</p>
        </div>
        <img
          src={chitChat}
          alt="echos appearing with chit chat text"
          className="content-chit-chat__img"
        />
        {this.playSound()}
      </div>
    )
  }
}
export default ContentChitChat
