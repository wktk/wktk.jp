import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/post-item"
import AdSense from "../components/adsense"

class ArchivePageTemplate extends React.Component {
  render() {
    const { data } = this.props
    const date = this.props.pageContext.date
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={`Posts in ${date}`}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <h1>Posts in <i>{date}</i></h1>
        {posts.map(({ node }) => <PostItem node={node} />)}
        <AdSense />
      </Layout>
    )
  }
}

export default ArchivePageTemplate

export const pageQuery = graphql`
  query PostsByDate($from: Date!, $to: Date!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { date: { gte: $from, lt: $to } }
        fields: { draft: { eq: false } }
      }
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
