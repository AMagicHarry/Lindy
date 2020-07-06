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
    this.onEnterViewport = this.onEnterViewport.bind(this)
    // this.playSound = this.playSound.bind(this)

    this.scrolledOnce = false
  }

  // playSound() {
  //   if (this.audioEl == undefined) {
  //     this.audioEl = document.getElementsByClassName("audio-element")[0]
  //     this.audioEl.muted = false
  //     this.audioEl.play()
  //   }
  //   if (this.audioEl != undefined) {
  //     this.scrolledOnce = true
  //     if (this.audioEl.paused) {
  //       this.audioEl.muted = false
  //       this.audioEl.play()
  //     }
  //     // } else {
  //     //   this.audioEl.pause()
  //     //   this.audioEl.currentTime = 0
  //     //   this.audioEl.play()
  //     // }
  //   }
  // }

  onEnterViewport() {
    console.log(this.audioEl)
    if (this.audioEl == undefined) {
      this.audioEl = document.getElementsByClassName("audio-element")[0]
      this.audioEl.muted = false
      this.audioEl.play()
    }
    if (this.audioEl != undefined) {
      this.scrolledOnce = true
      if (this.audioEl.paused) {
        this.audioEl.muted = false
        this.audioEl.play()
      }
      // } else {
      //   this.audioEl.pause()
      //   this.audioEl.currentTime = 0
      //   this.audioEl.play()
      // }
    }
  }
  render() {
    return (
      <div>
        <div className="content-chit-chat__text">
          <p onMouseEnter={this.playSound}>
            hi turkers hi amazon hi echo ok google
          </p>
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

          <ScrollTrigger onEnter={this.onEnterViewport}>
            <p>
              Amazon, &lt;break time=&quot;1s&quot;/&gt; where are you &lt;break
              time=&quot;5s&quot;/&gt;
            </p>
          </ScrollTrigger>
          <audio
            className="audio-element"
            autoPlay="true"
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
      </div>
    )
  }
}
export default ContentChitChat
