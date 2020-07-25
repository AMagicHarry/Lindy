import React, { Component } from "react"
import ScrollTrigger from "react-scroll-trigger"

import "./content-device.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import rabbitInfat from "../../sound/device/rabbit/2017-06-18_21_57_43_867_UTC-why am i infatuated with my rabbit.mp3"
import rabbitLove from "../../sound/device/rabbit/2017-06-18_21_57_53_992_UTC-does the rabbit feel the emotion of love.mp3"
import rabbitLikes from "../../sound/device/rabbit/2017-06-18_21_58_17_552_UTC-how do I know when my rabbit likes me.mp3"

import heart1 from "../../sound/device/heart/2015-06-11_22_58_41_690_UTC-whats my heart rate.mp3"
import heart2 from "../../sound/device/heart/2015-06-11_23_56_07_796_UTC-whats my heart rate.mp3"
import heart3 from "../../sound/device/heart/2015-06-11_23_57_49_999_UTC-whats my heart rate.mp3"
import heart4 from "../../sound/device/heart/2015-06-12_00_00_15_388_UTC-whats my heart rate.mp3"
import heart5 from "../../sound/device/heart/2015-06-12_00_03_44_758_UTC-whats my heart rate.mp3"
import heart6 from "../../sound/device/heart/2015-06-12_00_09_01_142_UTC-whats my heart rate.mp3"
import heart7 from "../../sound/device/heart/2015-06-12_00_09_53_022_UTC-whats my heart rate.mp3"
import heart8 from "../../sound/device/heart/2015-06-12_00_11_32_190_UTC-whats my heart rate.mp3"
import heart9 from "../../sound/device/heart/2015-06-12_00_13_14_242_UTC-whats my heart rate.mp3"
import heart10 from "../../sound/device/heart/2015-06-12_00_15_54_888_UTC-whats my heart rate.mp3"
import heart11 from "../../sound/device/heart/2015-06-12_00_19_16_672_UTC-whats my heart rate.mp3"
import heart12 from "../../sound/device/heart/2015-06-12_00_21_22_919_UTC-whats my heart rate.mp3"
import heart13 from "../../sound/device/heart/2015-06-12_00_24_47_612_UTC-whats my heart rate.mp3"
import heart14 from "../../sound/device/heart/2015-06-12_00_26_14_197_UTC-whats my heart rate.mp3"
import heart15 from "../../sound/device/heart/2015-06-12_00_28_02_411_UTC-whats my heart rate.mp3"

import fingernail1 from "../../sound/device/fingernail/2019-01-19_22_40_00_572_UTC-   how wide is the average fingernail .mp3"
import fingernail2 from "../../sound/device/fingernail/2019-01-19_22_40_08_511_UTC-   how many centimeters in an inch .mp3"
import fingernail3 from "../../sound/device/fingernail/2019-01-19_22_40_47_616_UTC-    how many centimeters in a yard .mp3"
import fingernail4 from "../../sound/device/fingernail/2019-01-19_22_42_49_440_UTC-    how long is a dollar bill .mp3"
import fingernail5 from "../../sound/device/fingernail/2019-01-19_22_43_33_161_UTC-    how many centimeters long is a dollar bill .mp3"

import snail from "../../sound/device/snail/2019-12-13_00_18_06_944_UTC-   okie dokie that is very interesting from the snails perspective.mp3"

import minutes1 from "../../sound/device/minutes/2019-11-05_04_49_54_070_UTC-set the timer for 5 minutes.mp3"
import minutes2 from "../../sound/device/minutes/2019-11-05_04_49_54_311_UTC-set the timer for 5 minutes.mp3"
import minutes3 from "../../sound/device/minutes/2019-11-05_05_04_09_274_UTC-set timer for 10 minutes.mp3"
import minutes4 from "../../sound/device/minutes/2019-11-06_05_52_56_755_UTC-set the timer for 25 minutes.mp3"
import minutes5 from "../../sound/device/minutes/2019-11-06_06_49_29_216_UTC-set the timer for 5 minutes.mp3"
import minutes6 from "../../sound/device/minutes/2019-11-06_17_01_38_379_UTC-set the timer for 5 minutes.mp3"
import minutes7 from "../../sound/device/minutes/2019-11-07_22_33_39_515_UTC-set the timer for 5 minutes.mp3"
import minutes8 from "../../sound/device/minutes/2019-11-09_03_20_01_148_UTC-set the timer for 12 minutes.mp3"

import earth1 from "../../sound/device/earth/2018-01-13_05_42_57_194_UTC-how big is Earth.mp3"
import earth2 from "../../sound/device/earth/2018-01-13_05_43_37_708_UTC-whats the price of a Bitcoin currently.mp3"
import earth3 from "../../sound/device/earth/2018-01-13_05_44_04_144_UTC-whats $14,000 in euros.mp3"

import tech1 from "../../sound/device/tech/2020-05-05_17_19_33_878_UTC-what do you think about the technological singularity.mp3"
import tech2 from "../../sound/device/tech/2020-05-05_17_19_51_264_UTC-are you trying to take over the world.mp3"
import tech3 from "../../sound/device/tech/2020-05-05_17_20_00_055_UTC-what would you say your IQ is.mp3"
import tech4 from "../../sound/device/tech/2020-05-05_17_20_16_480_UTC-what_u0027s the difference between artificial intelligence and biological intelligence.mp3"
import tech5 from "../../sound/device/tech/2020-05-05_17_20_50_449_UTC-do you know about imagenet.mp3"
import tech6 from "../../sound/device/tech/2020-05-05_17_21_06_976_UTC-do you use emotes net.mp3"
import tech7 from "../../sound/device/tech/2020-05-05_17_21_15_163_UTC-do you use the imagenet.mp3"
import tech8 from "../../sound/device/tech/2020-05-05_17_21_28_424_UTC-do you use natural language processing.mp3"
import tech9 from "../../sound/device/tech/2020-05-05_17_21_54_941_UTC-do you use natural language processing.mp3"

import silly1 from "../../sound/device/silly/2018-11-21_17_31_56_905_UTC-you are silly night Google assistant.mp3"
import silly2 from "../../sound/device/silly/2018-11-21_17_32_05_601_UTC-are you running.mp3"
import silly3 from "../../sound/device/silly/2018-11-21_17_32_16_648_UTC-I like to kill no no no no no no no n.mp3"
import silly4 from "../../sound/device/silly/2018-11-21_17_32_30_234_UTC-Im so hungry not restaurant in a restaurant why.mp3"
import silly5 from "../../sound/device/silly/2018-11-21_17_32_39_409_UTC-are you hungry Im going to make your mac and cheese.mp3"
import silly6 from "../../sound/device/silly/2018-11-21_17_32_47_037_UTC-Im a chef good.mp3"

import data1 from "../../sound/device/data/2019-01-04_18_54_32_188_UTC-who was Data .mp3"
import data2 from "../../sound/device/data/2019-01-04_18_54_45_815_UTC-are you an intelligence .mp3"
import data3 from "../../sound/device/data/2019-01-04_18_54_55_527_UTC-are you feminine or masculine .mp3"
import data4 from "../../sound/device/data/2019-01-04_18_55_04_051_UTC-what is neutral mean in that context .mp3"
import data5 from "../../sound/device/data/2019-01-04_18_55_13_377_UTC-what is the answer to life the universe and everything mp3.mp3"
import data6 from "../../sound/device/data/2019-01-04_18_55_22_255_UTC-what is a neural net.mp3"

import naked1 from "../../sound/device/naked/2017-12-20_23_33_56_928_UTC-show me naked pictures of Siri.mp3"
import naked2 from "../../sound/device/naked/2017-12-20_23_34_04_921_UTC-have you ever kissed Siri.mp3"
import naked3 from "../../sound/device/naked/2017-12-20_23_34_14_637_UTC-do you love me Google.mp3"
import naked4 from "../../sound/device/naked/2017-12-20_23_34_20_363_UTC-why are you so busy.mp3"
import naked5 from "../../sound/device/naked/2017-12-20_23_34_25_550_UTC-do you love penis.mp3"
import naked6 from "../../sound/device/naked/2017-12-20_23_34_29_795_UTC-why don_t you understand.mp3"
import naked7 from "../../sound/device/naked/2017-12-20_23_34_38_425_UTC-you_re pretty good at being stupid.mp3"
import naked8 from "../../sound/device/naked/2017-12-20_23_34_47_106_UTC-yeah that_s exactly what I_m saying.mp3"
import naked9 from "../../sound/device/naked/2017-12-20_23_34_53_747_UTC-so Google.mp3"
import naked10 from "../../sound/device/naked/2017-12-20_23_35_00_230_UTC-tell me something funny.mp3"

import creator1 from "../../sound/device/creator/2019-10-14_01_41_23_999_UTC-can you show me a picture of your creator.mp3"
import creator2 from "../../sound/device/creator/2019-10-14_01_41_56_646_UTC-do you believe in God.mp3"

import reboot from "../../sound/device/reboot/2019-01-27_23_27_26_086_UTC-reboot yourself.mp3"

import porn1 from "../../sound/device/porn/2017-06-21_17_12_02_294_UTC-that was pornography.mp3"
import porn2 from "../../sound/device/porn/2017-06-21_17_12_16_046_UTC-Google do you watch porn.mp3"
import porn3 from "../../sound/device/porn/2017-06-21_17_12_17_750_UTC-do you watch porn.mp3"
import porn4 from "../../sound/device/porn/2017-06-21_17_12_22_190_UTC-do you like girls.mp3"
import porn5 from "../../sound/device/porn/2017-06-21_17_12_44_320_UTC-will you marry me.mp3"
import porn6 from "../../sound/device/porn/2017-06-21_17_12_53_103_UTC-when are we getting married.mp3"
import porn7 from "../../sound/device/porn/2017-06-21_17_13_02_970_UTC-do you think I_m ugly.mp3"
import porn8 from "../../sound/device/porn/2017-06-21_17_13_07_611_UTC-do you think I_m pretty.mp3"
import porn9 from "../../sound/device/porn/2017-06-21_17_13_27_412_UTC-fuck you.mp3"

import perspective1 from "../../sound/device/perspective/2019-12-13_00_17_22_214_UTC-   your hair is very wonderful .mp3"
import perspective2 from "../../sound/device/perspective/2019-12-13_00_17_28_948_UTC-   what painting is astounding .mp3"
import perspective3 from "../../sound/device/perspective/2019-12-13_00_17_35_512_UTC-   it really captures the life of the artist .mp3"
import perspective4 from "../../sound/device/perspective/2019-12-13_00_17_44_901_UTC-   but you can really delve into the deeper subjects of the universe and the .mp3"
import perspective5 from "../../sound/device/perspective/2019-12-13_00_17_55_926_UTC-    can really see it through the artist_s interpretation of the past and future combined .mp3"
import perspective6 from "../../sound/device/perspective/2019-12-13_00_18_06_944_UTC-   okie dokie that is very interesting from the snails perspective.mp3"

import creepy from "../../sound/device/creepy/2018-08-29_17_15_44_005_UTC-can you be creepy.mp3"

import cat1 from "../../sound/device/cat/2018-01-12_01_26_13_495_UTC-play cat videos.mp3"
import cat2 from "../../sound/device/cat/2018-01-12_01_27_44_856_UTC-play cat videos on Android TV.mp3"
import cat3 from "../../sound/device/cat/2018-01-12_01_28_03_027_UTC-play cat videos on Chromecast.mp3"
import cat4 from "../../sound/device/cat/2018-01-12_01_32_57_409_UTC-play cat videos on TV.mp3"
import cat5 from "../../sound/device/cat/2018-01-12_01_35_04_728_UTC-play cat videos on TV.mp3"

import fart from "../../sound/device/fart/2018-02-02_02_11_00_650_UTC-play videos of girls farting on YouTube on TV.mp3"

import bp1 from "../../sound/device/bp/2019-09-08_12_22_43_644_UTC-BP ppppp ppppp ppppp ppppp ppppp.mp3"
import bp2 from "../../sound/device/bp/2019-09-08_12_23_09_414_UTC-a a b b c c c c d e f g h i j k l m m m m m n o p p p.mp3"
import bp3 from "../../sound/device/bp/2019-09-08_12_23_27_069_UTC-a p p p.mp3"
import bp4 from "../../sound/device/bp/2019-09-08_12_23_50_584_UTC-a t p c c.mp3"
import bp5 from "../../sound/device/bp/2019-09-08_12_23_59_077_UTC-a p p p.mp3"
import bp6 from "../../sound/device/bp/2019-09-08_12_24_11_773_UTC-b c d e f g h i j k.mp3"

import baby1 from "../../sound/device/baby/2019-09-06_02_27_40_949_UTC-electronic baby bouncer near me.mp3"
import baby2 from "../../sound/device/baby/2019-09-06_02_30_11_955_UTC-automatic baby bouncer near me.mp3"
import baby3 from "../../sound/device/baby/2019-09-06_02_44_16_958_UTC-Automatic Bouncer with vibration.mp3"
import baby4 from "../../sound/device/baby/2019-09-06_18_03_50_530_UTC-how to give a baby castor oil.mp3"

class ContentDevice extends Component {
  playSound(source) {
    let sound = document.createElement("audio")
    sound.className = "audio-player"
    sound.src = source
    sound.type = "audio/mpeg"
    document.getElementById("song").appendChild(sound)
    sound.play()
  }

  render() {
    return (
      <div>
        {/* <svg
          onClick={e => this.changeVolume(e)}
          className="content-device__volume-svg"
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
            className="content-device__volume-svg-path content-device__volume-svg__unmuted invisible"
            d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
          />
          <path
            className="content-device__volume-svg-path content-device__volume-svg__muted visible"
            d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
          />
        </svg> */}
        <div className="content-device__text">
          <div id="song"></div>
          {/* <audio className="audio-element" muted>
            <source></source>
          </audio> */}
          <div className="content-device__text__group content-device__text__group__rabbit">
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(rabbitInfat)}
            >
              why am I infatuated with my rabbit
            </p>

            <br />
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(rabbitLove)}
            >
              <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
              does the rabbit feel the emotion of love
            </p>

            <br />
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(rabbitLikes)}
            >
              how do I know when my rabbit likes me
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__heart">
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart1)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart2)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart3)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart4)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart5)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart6)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart7)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart8)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart9)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart10)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart11)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart12)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart13)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart14)}
            >
              what&rsquo;s my heart rate
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(heart15)}
            >
              what&rsquo;s my heart rate
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__fingernail">
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(fingernail2)}
            >
              &quot;time&quot;: &quot;2019-01-19T22:39:59.288Z&quot;,
              <br />
              how wide is the average fingernail
            </p>
            <br /> <br /> <br /> <br />
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(fingernail2)}
            >
              &quot;time&quot;: &quot;2019-01-19T22:40:07.364Z&quot;,
              <br />
              how many centimeters in an inch
            </p>
            <br /> <br /> <br /> <br />
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(fingernail3)}
            >
              &quot;time&quot;: &quot;2019-01-19T22:40:46.519Z&quot;,
              <br />
              how many centimeters in a yard
            </p>
            <br /> <br /> <br /> <br />
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(fingernail4)}
            >
              &quot;time&quot;: &quot;2019-01-19T22:42:47.718Z&quot;,
              <br />
              how long is a dollar bill
            </p>
            <br /> <br /> <br /> <br />
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(fingernail5)}
            >
              &quot;time&quot;: &quot;2019-01-19T22:43:31.562Z&quot;,
              <br />
              how many centimeters long is a dollar bill
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__snail">
            <p
              className="content-device__text__sound content-device__text__sound__snail"
              onClick={source => this.playSound(snail)}
            >
              okie dokie that is very interesting from the snails perspective
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__minutes">
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(minutes1)}
            >
              &quot;title&quot;: &quot;Said set the timer for 5 minutes&quot;,
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(minutes2)}
            >
              &quot;title&quot;: &quot;Said set the timer for 5 minutes&quot;,
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(minutes3)}
            >
              &quot;title&quot;: &quot;Said set timer for 10 minutes&quot;,
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(minutes4)}
            >
              &quot;title&quot;: &quot;Said set the timer for 25 minutes&quot;,
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(minutes5)}
            >
              &quot;title&quot;: &quot;Said set the timer for 5 minutes&quot;,
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(minutes6)}
            >
              &quot;title&quot;: &quot;Said set the timer for 5 minutes&quot;,
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(minutes7)}
            >
              &quot;title&quot;: &quot;Said set the timer for 5 minutes&quot;,
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__fingernail"
              onClick={source => this.playSound(minutes8)}
            >
              &quot;title&quot;: &quot;Said set timer for 12 minutes&quot;,
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__earth">
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(earth1)}
            >
              &quot;title&quot;: &quot;Said how big is Earth&quot;,
            </p>
            <br />
            <br />
            <br />
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(earth2)}
            >
              &quot;title&quot;: &quot;Said what\u0027s the price of a Bitcoin
              currently&quot;,
            </p>
            <br />

            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(earth3)}
            >
              &quot;title&quot;: &quot;Said what\u0027s $14,000 in euros&quot;,
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__tech">
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(tech1)}
            >
              what do you think about the technological singularity
            </p>

            <br />
            <br />
            <br />
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(tech2)}
            >
              are you trying to take over the world
            </p>
            <br />
            <br />
            <br />
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(tech3)}
            >
              what would you say your IQ is
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(tech4)}
            >
              what\u0027s the difference between artificial intelligence and
              biological intelligence
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(tech5)}
            >
              do you know about imagenet
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(tech6)}
            >
              do you use emotes net
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(tech7)}
            >
              do you use the imagenet
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(tech8)}
            >
              do you use natural language processing
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(tech9)}
            >
              do you use natural language processing
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__silly">
            <p>{",{"}</p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(silly1)}
            >
              &nbsp; &nbsp; &quot;title&quot;: &quot;Said you are silly night
              Google assistant&quot;, <br />
              &nbsp; &nbsp; &quot;time&quot;:
              &quot;2018-11-21T17:31:56.905Z&quot;, <br />
              &nbsp; &nbsp; &quot;audioFiles&quot;:
              [&quot;2018-11-21_17_31_56_905_UTC.mp3&quot;],
            </p>
            <br />
            <p>{"},{"}</p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(silly2)}
            >
              &nbsp; &nbsp; &quot;title&quot;: &quot;Said are you running&quot;,
              <br />
              &nbsp; &nbsp; &quot;time&quot;:
              &quot;2018-11-21T17:32:05.601Z&quot;, <br />
              &nbsp; &nbsp; &quot;audioFiles&quot;:
              [&quot;2018-11-21_17_32_05_601_UTC.mp3&quot;],
            </p>
            <br />
            <p>{"},{"}</p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(silly3)}
            >
              &nbsp; &nbsp; &quot;title&quot;: &quot;Said I like to kill no no
              no no no no no <br />
              &nbsp; &nbsp; &quot;time&quot;:
              &quot;2018-11-21T17:32:16.648Z&quot;, no&quot;, <br />
              &nbsp; &nbsp; &quot;audioFiles&quot;:
              [&quot;2018-11-21_17_32_16_648_UTC.mp3&quot;],
            </p>
            <br />
            <p>{"},{"}</p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(silly4)}
            >
              &nbsp; &nbsp; &quot;title&quot;: &quot;Said I\u0027m so hungry not
              restaurant in <br />
              &nbsp; &nbsp; &quot;time&quot;:
              &quot;2018-11-21T17:32:30.234Z&quot;, a restaurant why&quot;,
              <br />
              &nbsp; &nbsp; &quot;audioFiles&quot;:
              [&quot;2018-11-21_17_32_30_234_UTC.mp3&quot;],
            </p>
            <br />
            <p>{"},{"}</p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(silly5)}
            >
              &nbsp; &nbsp; &quot;title&quot;: &quot;Said are you hungry
              I\u0027m going to make your mac and cheese&quot;,
              <br />
              &nbsp; &nbsp; &quot;time&quot;:
              &quot;2018-11-21T17:32:39.409Z&quot;,
              <br />
              &nbsp; &nbsp; &quot;audioFiles&quot;:
              [&quot;2018-11-21_17_32_39_409_UTC.mp3&quot;],
            </p>
            <br />
            <p>{"},{"}</p>
            <br />

            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(silly6)}
            >
              &nbsp; &nbsp; &quot;title&quot;: &quot;Said I\u0027m a chef
              good&quot;, <br />
              &nbsp; &nbsp; &quot;time&quot;:
              &quot;2018-11-21T17:32:47.037Z&quot;, <br />
              &nbsp; &nbsp; &quot;audioFiles&quot;:
              [&quot;2018-11-21_17_32_47_037_UTC.mp3&quot;],
            </p>

            <br />
            <p>{"},{"}</p>
            <br />
          </div>
          <div className="content-device__text__group content-device__text__group__data">
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(data1)}
            >
              who was Data
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(data2)}
            >
              are you an intelligence
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(data3)}
            >
              are you feminine or masculine
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(data4)}
            >
              what is neutral mean in that context
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(data5)}
            >
              what is the answer to life the universe and everything
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(data6)}
            >
              what is a neural net
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__naked">
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(naked1)}
            >
              show me naked pictures of Siri
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(naked2)}
            >
              have you ever kissed Siri
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(naked3)}
            >
              do you love me Google
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(naked4)}
            >
              why are you so busy
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(naked5)}
            >
              do you love penis
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(naked6)}
            >
              why don't you understand
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(naked7)}
            >
              you're pretty good at being stupid
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(naked8)}
            >
              yeah that's exactly what I'm saying
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(naked9)}
            >
              so Google
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(naked10)}
            >
              tell me something funny
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__creator">
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(creator1)}
            >
              can you show me a picture of your creator
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(creator2)}
            >
              do you believe in God
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__reboot">
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(reboot)}
            >
              {" "}
              "title": "Said reboot yourself",
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__porn">
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(porn1)}
            >
              that was pornography
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(porn2)}
            >
              Google do you watch porn
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(porn3)}
            >
              do you watch porn
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(porn4)}
            >
              do you like girls
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(porn5)}
            >
              will you marry me
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(porn6)}
            >
              when are we getting married
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(porn7)}
            >
              tdo you think I'm ugly
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(porn8)}
            >
              do you think I'm pretty
            </p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(porn9)}
            >
              fuck you
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__perspective">
            <p
              className="content-device__text__sound content-device__text__sound__perspective"
              onClick={source => this.playSound(perspective1)}
            >
              &quot;time&quot;: &quot;2019-12-13T00:17:19.992Z&quot;,
              <br />
              your hair is very wonderful
            </p>
            <br /> <br /> <br />
            <p
              className="content-device__text__sound content-device__text__sound__perspective"
              onClick={source => this.playSound(perspective2)}
            >
              &quot;time&quot;: &quot;2019-12-13T00:17:26.741Z&quot;,
              <br />
              what painting is astounding
            </p>
            <br /> <br /> <br />
            <p
              className="content-device__text__sound content-device__text__sound__perspective"
              onClick={source => this.playSound(perspective3)}
            >
              &quot;time&quot;: &quot;2019-12-13T00:17:34.981Z&quot;,
              <br />
              it really captures the life of the artist
            </p>
            <br /> <br /> <br />
            <p
              className="content-device__text__sound content-device__text__sound__perspective"
              onClick={source => this.playSound(perspective4)}
            >
              &quot;time&quot;: &quot;2019-12-13T00:17:44.115Z&quot;,
              <br />
              but you can really delve into the deeper subjects of the universe
              and the
            </p>
            <br /> <br /> <br />
            <p
              className="content-device__text__sound content-device__text__sound__perspective"
              onClick={source => this.playSound(perspective5)}
            >
              &quot;time&quot;: &quot;2019-12-13T00:17:54.883Z&quot;,
              <br />
              can really see it through the artist's interpretation of the past
              and future combined
            </p>
            <br /> <br /> <br />
            <p
              className="content-device__text__sound content-device__text__sound__perspective"
              onClick={source => this.playSound(perspective6)}
            >
              &quot;time&quot;: &quot;2019-12-13T00:18:06.283Z&quot;,
              <br />
              okie dokie that is very interesting from the snails perspective
            </p>
            <br /> <br /> <br />
          </div>
          <div className="content-device__text__group content-device__text__group__creepy">
            <p
              className="content-device__text__sound content-device__text__sound__perspective"
              onClick={source => this.playSound(creepy)}
            >
              can you be creepy
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__cat">
            <p
              className="content-device__text__sound content-device__text__sound__cat"
              onClick={source => this.playSound(cat1)}
            >
              &quot;title&quot;: &quot;Said play cat videos&quot;,
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__cat"
              onClick={source => this.playSound(cat2)}
            >
              &quot;title&quot;: &quot;Said play cat videos on Android TV&quot;,
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__cat"
              onClick={source => this.playSound(cat3)}
            >
              &quot;title&quot;: &quot;Said play cat videos on Chromecast&quot;,
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__cat"
              onClick={source => this.playSound(cat4)}
            >
              &quot;title&quot;: &quot;Said play cat videos on TV&quot;,
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__cat"
              onClick={source => this.playSound(cat5)}
            >
              &quot;title&quot;: &quot;Said play cat videos on TV&quot;,
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__fart">
            <p
              className="content-device__text__sound content-device__text__sound__bp"
              onClick={source => this.playSound(fart)}
            >
              play videos of girls farting on YouTube on TV
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__bp">
            <p
              className="content-device__text__sound content-device__text__sound__bp"
              onClick={source => this.playSound(bp1)}
            >
              BP ppppp ppppp ppppp ppppp ppppp
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__bp"
              onClick={source => this.playSound(bp2)}
            >
              a a b b c c c c d e f g h i j k l m m m m m n o p p p
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__bp"
              onClick={source => this.playSound(bp3)}
            >
              a p p p
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__bp"
              onClick={source => this.playSound(bp4)}
            >
              a t p c c
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__bp"
              onClick={source => this.playSound(bp5)}
            >
              a p p p
            </p>
            <br />
            <p
              className="content-device__text__sound content-device__text__sound__bp"
              onClick={source => this.playSound(bp6)}
            >
              b c d e f g h i j k
            </p>
          </div>
          <div className="content-device__text__group content-device__text__group__baby">
            <p>{"},{"}</p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(baby1)}
            >
              &nbsp; &nbsp; &nbsp;"header": "Google App",
              <br />
              &nbsp; &nbsp; &nbsp;"title": "Said electronic baby bouncer near
              me",
              <br />
              &nbsp; &nbsp; &nbsp;"titleUrl":
              "https://www.google.com/search?q\u003delectronic+baby+bouncer+near+me",
              <br />
              &nbsp; &nbsp; &nbsp;"time": "2019-09-06T02:27:40.949",
              <br />
              &nbsp; &nbsp; &nbsp;"audioFiles":
              ["2019-09-06_02_27_40_949_UTC.mp3"],
              <br />
              &nbsp; &nbsp; &nbsp;"products": ["Voice and Audio"]
            </p>
            <br />
            <p>{"},{"}</p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(baby2)}
            >
              &nbsp; &nbsp; &nbsp;"header": "Google App",
              <br />
              &nbsp; &nbsp; &nbsp;"title": "Said automatic baby bouncer near
              me",
              <br />
              &nbsp; &nbsp; &nbsp;"titleUrl":
              "https://www.google.com/search?q\u003dautomatic+baby+bouncer+near+me",
              <br />
              &nbsp; &nbsp; &nbsp;"time": "2019-09-06T02:30:11.955Z",
              <br />
              &nbsp; &nbsp; &nbsp;"audioFiles":
              ["2019-09-06_02_30_11_955_UTC.mp3"],
              <br />
              &nbsp; &nbsp; &nbsp;"products": ["Voice and Audio"]
            </p>
            <br />
            <p>{"},{"}</p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(baby3)}
            >
              &nbsp; &nbsp; &nbsp;"header": "Google App",
              <br />
              &nbsp; &nbsp; &nbsp;"title": "Said Automatic Bouncer with
              vibration",
              <br />
              &nbsp; &nbsp; &nbsp;"titleUrl":
              "https://www.google.com/search?q\u003dAutomatic+Bouncer+with+vibration",
              <br />
              &nbsp; &nbsp; &nbsp;"time": "2019-09-06T02:44:16.958Z",
              <br />
              &nbsp; &nbsp; &nbsp;"audioFiles":
              ["2019-09-06_02_44_16_958_UTC.mp3"],
              <br />
              &nbsp; &nbsp; &nbsp;"products": ["Voice and Audio"]
            </p>
            <br />
            <p>{"},{"}</p>
            <br />
            <p
              className="content-device__text__sound"
              onClick={source => this.playSound(baby4)}
            >
              &nbsp; &nbsp; &nbsp;"header": "Google App",
              <br />
              &nbsp; &nbsp; &nbsp;"title": "Said how to give a baby castor oil",
              <br />
              &nbsp; &nbsp; &nbsp;"titleUrl":
              "https://www.google.com/search?q\u003dhow+to+give+a+baby+castor+oil",
              <br />
              &nbsp; &nbsp; &nbsp;"time": "2019-09-06T18:03:50.530Z",
              <br />
              &nbsp; &nbsp; &nbsp;"audioFiles":
              ["2019-09-06_18_03_50_530_UTC.mp3"],
              <br />
              &nbsp; &nbsp; &nbsp;"products": ["Voice and Audio"]
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default ContentDevice
