import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class TagsIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const tags = {}
    posts.forEach(({ node }) => {
      (node.frontmatter.tags || []).forEach(tag => {
        if (!tags[tag]) { tags[tag] = [] }
        tags[tag].push(node)
      })
    })

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All tags"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <h1>All tags</h1>
        {Object.keys(tags).map(key => {
          return (
            <div key={key}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={ `/tags/${key}/` }>{key}</Link>
              </h3>
              <small>{tags[key].length}</small>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default TagsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            tags
          }
        }
      }
    }
  }
`
