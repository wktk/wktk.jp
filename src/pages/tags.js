import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

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
        <Seo
          title="All tags"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <h1>All tags</h1>
        <ul className="tags">
          {Object.keys(tags).map(key => {
            return (
              <li>
                <Link style={{ boxShadow: `none` }} to={ `/tags/${key}/` }>{key} ({tags[key].length})</Link>
              </li>
            )
          })}
        </ul>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { draft: { eq: false } } }
    ) {
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
