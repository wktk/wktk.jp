import React from "react"
import { graphql } from "gatsby"

import AdSense from "../components/adsense"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostItem from "../components/post-item"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => <PostItem key={node.fields.slug} node={node} />)}
        <AdSense />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: { fields: { draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt(truncate: true)
          fields {
            slug
            localdate
            updatedDate
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 80, height: 80, quality: 100)
              }
            }
          }
        }
      }
    }
  }
`
