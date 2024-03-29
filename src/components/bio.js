import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faAmazon } from '@fortawesome/free-brands-svg-icons/faAmazon'

import { rhythm } from "../utils/typography"

function Bio() {
  const [email, setEmail] = useState(0);
  const handleEmail = () => {
    if (!email) setEmail(atob('ay53YWtpdGFuaUBnbWFpbC5jb20K'))
    return true;
  }

  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div id="bio">
            <GatsbyImage
              image={getImage(data.avatar)}
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
              <Link to="/about/"><strong>{author}</strong></Link>
              <div className="mysocial">
                <a href="https://twitter.com/wk" target="_blank" rel="noopener noreferrer" title="Twitter @wk">
                  <FontAwesomeIcon icon={ faTwitter } />
                </a>
                <a href="https://github.com/wktk" target="_blank" rel="noopener noreferrer" title="GitHub @wktk">
                  <FontAwesomeIcon icon={ faGithub } />
                </a>
                <a href={email ? `mailto:${email}` : null} target="_blank" rel="noopener noreferrer" title="Email" onClick={handleEmail}>
                  <FontAwesomeIcon icon={ faEnvelope } />
                </a>
                <a href="https://www.amazon.co.jp/hz/wishlist/ls/1GFJ2PLYLVAOF?tag=4217986871-22" target="_blank" rel="noopener noreferrer" title="Amazon wishlist">
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
        gatsbyImageData(layout: FIXED, width: 50, height: 50)
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
