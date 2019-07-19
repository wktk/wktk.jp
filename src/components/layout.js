import React from "react"
import AdSense from 'react-adsense';
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <AdSense.Google
          client="ca-pub-3703878768228760"
          slot="2985375000"
          style={{ display: "block" }}
          data-full-width-responsive="true"
          format="auto" />
        <footer>
          <span>© {new Date().getFullYear()} <Link to="/">wktk.jp</Link></span>
          <small style={{ float: 'right' }}>Built with <a href="https://www.gatsbyjs.org">Gatsby</a></small>
        </footer>
      </div>
    )
  }
}

export default Layout
