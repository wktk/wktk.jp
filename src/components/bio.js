import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div id="bio">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div style={{ flexDirection: "column" }}>
              <p>Author: <strong>{author}</strong></p>
              <a className="mysocial" href="https://twitter.com/wk" target="_blank">
                <FontAwesomeIcon icon={ faTwitter } />
              </a>
              <a className="mysocial" href="https://github.com/wktk" target="_blank">
                <FontAwesomeIcon icon={ faGithub } />
              </a>
              <a className="mysocial" href="mailto:k.wakitani@gmail.com" target="_blank">
                <FontAwesomeIcon icon={ faEnvelope } />
              </a>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Bio
