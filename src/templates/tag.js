import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/post-item"

class TagPageTemplate extends React.Component {
  render() {
    const { data } = this.props
    const tag = this.props.pageContext.tag
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={`Posts tagged ${tag}`}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <h1>Posts tagged <i>{tag}</i></h1>
        {posts.map(({ node }) => <PostItem node={node} />)}
      </Layout>
    )
  }
}

export default TagPageTemplate

export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { draft: { eq: false } }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            localdate
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
