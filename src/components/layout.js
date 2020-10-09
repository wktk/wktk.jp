import React from "react"
import { Link } from "gatsby"

import SideCol from "./sidecol.js"

class Layout extends React.Component {
  render() {
    const { location, title, children, className } = this.props
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
            fontFamily: `sans-serif`,
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
      <div id="layout" class={className}>
        <header>{header}</header>
        <main>{children}</main>
        <SideCol />
        <footer>
          <span>© {new Date().getFullYear()} <Link to="/">wktk.jp</Link></span>
          <small style={{ float: 'right' }}>Built with <a href="https://www.gatsbyjs.org">Gatsby</a></small>
        </footer>
      </div>
    )
  }
}

export default Layout
