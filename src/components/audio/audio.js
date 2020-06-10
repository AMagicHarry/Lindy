import React, { Component } from "react"
import "./audio.css"
import ScrollTrigger from "react-scroll-trigger"

class Audio extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.muted = false
    audioEl.play()
  }

  onEnterViewport() {
    console.log("hi")
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  onExitViewport() {
    console.log("bye")
  }

  render() {
    return (
      <div>
        <button aria-label="Play audio" onFocus={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element" muted>
          <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
        </audio>

        <div className="">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt ornare massa eget egestas. Amet venenatis urna cursus eget
            nunc scelerisque. Ornare aenean euismod elementum nisi. Lorem sed
            risus ultricies tristique nulla aliquet enim tortor. Pharetra
            pharetra massa massa ultricies mi quis hendrerit. In mollis nunc sed
            id semper risus in. Euismod nisi porta lorem mollis aliquam ut. Ut
            pharetra sit amet aliquam id diam maecenas. Ultricies mi quis
            hendrerit dolor magna eget. Varius morbi enim nunc faucibus a. Est
            placerat in egestas erat imperdiet sed euismod. Eleifend quam
            adipiscing vitae proin sagittis nisl rhoncus mattis. Ut tristique et
            egestas quis ipsum suspendisse ultrices. Porta non pulvinar neque
            laoreet. Ac placerat vestibulum lectus mauris ultrices eros. Turpis
            massa tincidunt dui ut ornare lectus sit. Tortor pretium viverra
            suspendisse potenti nullam ac tortor. Ullamcorper a lacus vestibulum
            sed arcu. Etiam dignissim diam quis enim lobortis scelerisque
            fermentum dui faucibus. Consequat interdum varius sit amet mattis.
            Et tortor consequat id porta nibh venenatis cras sed. Posuere urna
            nec tincidunt praesent semper feugiat nibh sed. Ultrices vitae
            auctor eu augue. Amet nisl suscipit adipiscing bibendum est
            ultricies integer. Eget gravida cum sociis natoque penatibus et. Id
            semper risus in hendrerit gravida rutrum quisque non tellus. Fames
            ac turpis egestas sed tempus urna. Sed arcu non odio euismod lacinia
            at quis. Eu volutpat odio facilisis mauris sit amet massa vitae.
            Egestas dui id ornare arcu odio ut sem. Lectus urna duis convallis
            convallis tellus id interdum velit laoreet. Morbi leo urna molestie
            at elementum eu facilisis. Cursus sit amet dictum sit amet justo
            donec enim diam. Nec ullamcorper sit amet risus nullam eget.
            Maecenas sed enim ut sem viverra. Nibh nisl condimentum id
            venenatis. A diam sollicitudin tempor id eu nisl nunc mi. Felis eget
            velit aliquet sagittis id consectetur purus. Venenatis a condimentum
            vitae sapien. Felis bibendum ut tristique et egestas quis ipsum.
            Neque volutpat ac tincidunt vitae semper quis lectus. Aliquam
            ultrices sagittis orci a scelerisque purus. Vel eros donec ac odio
            tempor orci dapibus ultrices. Nibh praesent tristique magna sit amet
            purus gravida quis blandit. Id venenatis a condimentum vitae sapien
            pellentesque habitant morbi tristique. Orci a scelerisque purus
            semper eget duis at tellus. Semper feugiat nibh sed pulvinar. In
            cursus turpis massa tincidunt dui. Erat nam at lectus urna duis.
            Ornare arcu dui vivamus arcu felis bibendum ut. Morbi tristique
            senectus et netus. Ac auctor augue mauris augue neque gravida in
            fermentum. Pretium vulputate sapien nec sagittis aliquam malesuada
            bibendum. Magna sit amet purus gravida quis blandit turpis cursus
            in. Nibh tortor id aliquet lectus proin. Integer malesuada nunc vel
            risus commodo viverra maecenas accumsan. Faucibus et molestie ac
            feugiat sed lectus. Est lorem ipsum dolor sit amet consectetur
            adipiscing elit. Tincidunt dui ut ornare lectus sit. Nisi porta
            lorem mollis aliquam ut porttitor leo. Adipiscing bibendum est
            ultricies integer quis auctor elit. Vestibulum lorem sed risus
            ultricies tristique nulla aliquet enim tortor. Orci eu lobortis
            elementum nibh tellus molestie nunc non. Elit duis tristique
            sollicitudin nibh sit amet commodo nulla. Enim nunc faucibus a
            pellentesque sit amet porttitor. Dui ut ornare lectus sit amet est
            placerat in. Eget aliquet nibh praesent tristique magna sit amet.
            Hendrerit dolor magna eget est. Ut tortor pretium viverra
            suspendisse potenti nullam ac tortor. Massa sed elementum tempus
            egestas sed sed risus.
          </p>
          <iframe
            src="https://player.vimeo.com/video/295631070"
            width="960"
            height="540"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/295631070">
              Your Best Friend Music Animation
            </a>{" "}
            from <a href="https://vimeo.com/user90722729">Amanda Yeh</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
          <ScrollTrigger
            onEnter={this.onEnterViewport}
            onExit={this.onExitViewport}
          >
            <h1>Scrol; here</h1>
          </ScrollTrigger>
        </div>
        {/* <Controller>
          <Scene triggerHook="onLeave" pin triggerElement={this.callback()}>
            <div className="scroll-audio">
              <div>Scroll here to hear sound</div>
              <audio className="audio-element">
                <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
              </audio>
            </div>
          </Scene>
        </Controller> */}
      </div>
    )
  }
}
export default Audio
