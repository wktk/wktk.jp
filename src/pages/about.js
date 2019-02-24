import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { rhythm } from "../utils/typography"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const { title, author, social } = data.site.siteMetadata

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title={`About ${author}`} />
        <h1>About {author}</h1>
        <dl>
          {social.map(s => {
            return <React.Fragment>
              <dt>{s.name}</dt>
              <dd>{s.url ? <a href={s.url}>{s.username}</a> : s.username}</dd>
            </React.Fragment>
          })}
        </dl>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        social {
          name
          url
          username
        }
      }
    }
  }
`
