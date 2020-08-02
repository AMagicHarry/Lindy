import React, { Component } from "react"
import { Link } from "gatsby"
import ScrollTrigger from "react-scroll-trigger"
import Fade from "react-reveal/Fade"

import "./content-about.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import cone from "../../images/about/cone moving towards an alexa echo.gif"

class ContentAbout extends Component {
  render() {
    return (
      <div className="content-about">
        <h1 className="content-about__title">About</h1>
        <p className="content-about__intro-1">
          Responding to current concerns about the ubiquity of voice assistants,
          this artistic research focuses on building a series of performative
          artifacts that aim to challenge AI and ML technologies, and to examine
          automation through the prism of “ghost work” that constantly support
          these systems. By allowing AI agents to listen to our most private
          conversations, we become receptive to this mediated care, while
          forgetting or ignoring how much these automated interactions have been
          pre-scripted. While these interactions cultivate a sense of
          familiarization with the non-human, they also corroborate the impact
          of Late Capitalism and the Anthropocene. Within these contradictions
          we see an opportunity to reclaim, examine, and ultimately transcode
          this data through an interdisciplinary performance project, by
          developing embodied experiments using a combination of design,
          data-driven art, cyber crafts, found-object and traditional percussion
          instruments, spoken word, and movement.
        </p>
        <p className="content-about__intro-2">
          For more about our process, take a look at our blog at
          blog.voicesandvoids.net
        </p>
        <div className="content-about__credits content-about__credits__lead">
          <p className="content-about__credits-category extra-bold">
            Project by:
          </p>
          <p className="content-about__credits__name">
            <a href="http://www.audreydesjardins.com/" target="_blank">
              Audrey Desjardins
            </a>
          </p>

          <p className="content-about__credits__name">
            <a href="http://afroditipsarra.com/" target="_blank">
              Afroditi Psarra
            </a>
          </p>
          <p className="content-about__credits__name">
            <a href="https://bonniewhitingpercussion.com/" target="_blank">
              Bonnie Whiting
            </a>
          </p>
        </div>

        <div className="content-about__credits__lead">
          <p className="content-about__credits-category extra-bold">With:</p>
        </div>

        <div className="content-about__credits__lead">
          <p className="content-about__credits-category extra-bold">
            Artists in residence
          </p>
          <p className="content-about__credits__name">
            <a href="https://www.dclaymusic.com/" target="_blank">
              Danny Clay
            </a>
          </p>
          <p className="content-about__credits__name">
            <a href="http://artfordorks.com/" target="_blank">
              Laura Devendorf
            </a>
          </p>
          <p className="content-about__credits__name">
            <a href="http://www.sicchio.com/" target="_blank">
              Kate Sicchio
            </a>
          </p>
          <p className="content-about__credits__name">
            <a
              href="https://jwirfs-brock.github.io/JWB_website/"
              target="_blank"
            >
              Jordan Wirfs Brock
            </a>
          </p>
          <p className="content-about__credits__name">
            <a href="https://www.yvonnewu.com/" target="_blank">
              Yvonne Wu
            </a>
          </p>
        </div>

        <div className="content-about__credits__lead">
          <p className="content-about__credits-category extra-bold">
            Collaborators
          </p>
          <p className="content-about__credits__name">
            <a href="http://www.estebanagosin.cl/" target="_blank">
              Esteban Yosef Agosin
            </a>
          </p>
          <p className="content-about__credits__name">
            <a href="http://www.poeticmachine.com/" target="_blank">
              Gabrielle Benabdallah
            </a>
          </p>
          <p className="content-about__credits__name">
            <a href="https://www.darcycopeland.com/" target="_blank">
              Darcy Copeland
            </a>
          </p>
          <p className="content-about__credits__name">
            <a
              href="https://music.washington.edu/people/jonathan-rodriguez"
              target="_blank"
            >
              Jonathan Rodriguez
            </a>
          </p>
          <p className="content-about__credits__name">
            <a href="https://github.com/JamesWenlock" target="_blank">
              James Wenlock
            </a>
          </p>
        </div>

        <div className="  content-about__credits__lead ">
          <p className="content-about__credits-category extra-bold">
            Sound recording and editing
          </p>
          <p className="content-about__credits__name">
            <a href="http://www.cameronperryfraser.com/" target="_blank">
              Cameron Fraser
            </a>
          </p>
        </div>

        <div className="  content-about__credits__lead ">
          <p className="content-about__credits-category extra-bold">
            Web development
          </p>
          <p className="content-about__credits__name">
            <a href="https://www.amandayeh.com/" target="_blank">
              Amanda Yeh
            </a>
          </p>
        </div>

        <div className="content-about__credits__lead">
          <p className="content-about__credits-category extra-bold">
            Funded by
          </p>
          <p className="content-about__credits__name">Mellon Foundation</p>
          <p className="content-about__credits__name">
            College of Arts and Sciences - University of Washington
          </p>
        </div>

        <img
          src={cone}
          alt="cone moving towards an alexa echo"
          className="content-about__img"
        />
      </div>
    )
  }
}
export default ContentAbout
