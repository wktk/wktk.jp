import React from "react"
import { graphql } from "gatsby"

import AdSense from "../components/adsense"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostItem from "../components/post-item"

class TagPageTemplate extends React.Component {
  render() {
    const { data } = this.props
    const tag = this.props.pageContext.tag
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo
          title={`Posts tagged ${tag}`}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Posts tagged <i>{tag}</i></h1>
        {posts.map(({ node }) => <PostItem key={node.fields.slug} node={node} />)}
        <AdSense />
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
      sort: {frontmatter: {date: DESC}}
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { draft: { eq: false } }
      }
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
