import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import SmallHeader from "../components/small-header/small-header"
import Back from "../components/back-nav/back-nav"

import ContentChitChat from "../components/content-chit-chat/content-chit-chat"

function ChitChat(props) {
  return (
    <div>
      <SEO title="Chit Chat" />

      <SmallHeader
        className="small-header__title"
        headerTitle={"Chit Chat"}
        infoTitle={"Chit Chat"}
        infoContent={[
          "This texttovoice.io script is spoken by one voice assistant for other voice assistants to respond with very limited human intervention. The audio track is from a January 2020 live performance of this script with 5 Amazon Echos and 3 Google Home Mini.",
          <br />,
          <br />,
          "Collaborators:",
          <br />,
          "Laura Devendorf",
          <br />,
          "Jordan Wirfs-Brock",
          <br />,
          "Cameron Fraser",
          <br />,
          "Alexas",
          <br />,
          "Google Assistants",
        ]}
      />
      <ContentChitChat />
      <Back homeSection="#chit-chat" />
    </div>
  )
}

export default ChitChat
