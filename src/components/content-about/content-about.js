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
            Project leads
          </p>
          <p className="content-about__credits__name">Audrey Desjardins</p>
          <p className="content-about__credits__name">Afroditi Psarra</p>
          <p className="content-about__credits__name">Bonnie Whiting</p>
        </div>

        <div className="content-about__credits__lead">
          <p className="content-about__credits-category extra-bold">
            Artists in residence
          </p>
          <p className="content-about__credits__name">Danny Clay </p>
          <p className="content-about__credits__name">Laura Devendorf</p>
          <p className="content-about__credits__name">Kate Sicchio</p>
          <p className="content-about__credits__name">Jordan Wirfs Brock</p>
          <p className="content-about__credits__name">Yvonne Wu</p>
        </div>

        <div className="  content-about__credits__lead ">
          <p className="content-about__credits-category extra-bold">
            Web development
          </p>
          <p className="content-about__credits__name">Amanda Yeh</p>
        </div>

        <div className="content-about__credits__lead">
          <p className="content-about__credits-category extra-bold">
            Collaborators
          </p>
          <p className="content-about__credits__name">Esteban Yosef Agosin</p>
          <p className="content-about__credits__name">Gabrielle Benabdallah</p>
          <p className="content-about__credits__name">Darcy Copeland</p>
          <p className="content-about__credits__name">Jonathan Rodriguez</p>
          <p className="content-about__credits__name">James Wenlock </p>
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
