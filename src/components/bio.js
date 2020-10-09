import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faAmazon,
} from '@fortawesome/free-brands-svg-icons'

import { rhythm } from "../utils/typography"

function Bio() {
  const [email, setEmail] = useState(0);
  const handleEmail = () => {
    if (!email) setEmail(atob('ay53YWtpdGFuaUBnbWFpbC5jb20K'))
  }

  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div id="bio" onMouseOver={handleEmail} onTouchStart={handleEmail}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
                float: 'left',
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div id="bio-description">
              <strong>{author}</strong>
              <div className="mysocial">
                <a href="https://twitter.com/wk" target="_blank" rel="noopener noreferrer" title="Twitter @wk">
                  <FontAwesomeIcon icon={ faTwitter } />
                </a>
                <a href="https://github.com/wktk" target="_blank" rel="noopener noreferrer" title="GitHub @wktk">
                  <FontAwesomeIcon icon={ faGithub } />
                </a>
                <a href={email ? `mailto:${email}` : null} target="_blank" rel="noopener noreferrer" title="Email">
                  <FontAwesomeIcon icon={ faEnvelope } />
                </a>
                <a href="https://www.amazon.co.jp/hz/wishlist/ls/1GFJ2PLYLVAOF" target="_blank" rel="noopener noreferrer" title="Amazon wishlist">
                  <FontAwesomeIcon icon={ faAmazon } />
                </a>
              </div>
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
