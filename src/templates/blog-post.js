import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AdSense from "../components/adsense"
import { rhythm, scale } from "../utils/typography"
import {
  TwitterShareButton,
  PocketShareButton,
  LineShareButton,
  EmailShareButton,
  FacebookShareButton,
  TwitterIcon,
  PocketIcon,
  LineIcon,
  EmailIcon,
  FacebookIcon,
} from 'react-share'
import HatebuShareButton from '../components/hatebu-share-button'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          ogimage={post.frontmatter.ogimage}
        />
        <h1>{post.frontmatter.title}</h1>
        <div
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
          <ul class="tags">
            {post.frontmatter.tags.map(tag =>
              <li><Link to={`/tags/${tag}/`}>{ tag }</Link></li>
            )}
          </ul>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr style={{ marginBottom: rhythm(1) }} />
        <ul id="share">
          <li>
            <TwitterShareButton url={this.props.location.href} title={`${post.frontmatter.title} | ${siteTitle}`}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </li>
          <li>
            <HatebuShareButton round size={32} url={this.props.location.href} title={`${post.frontmatter.title} | ${siteTitle}`} />
          </li>
          <li>
            <FacebookShareButton url={this.props.location.href} quote={`${post.frontmatter.title} | ${siteTitle}`}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </li>
          <li>
            <LineShareButton url={this.props.location.href} title={`${post.frontmatter.title} | ${siteTitle}`}>
              <LineIcon size={32} round />
            </LineShareButton>
          </li>
          <li>
            <PocketShareButton url={this.props.location.href} title={`${post.frontmatter.title} | ${siteTitle}`}>
              <PocketIcon size={32} round />
            </PocketShareButton>
          </li>
          <li>
            <EmailShareButton url={this.props.location.href} subject={`${post.frontmatter.title} | ${siteTitle}`}>
              <EmailIcon size={32} round />
            </EmailShareButton>
          </li>
        </ul>
        <hr style={{ marginBottom: rhythm(1) }} />
        <Bio />

        <ul id="after-post-nav">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <AdSense />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        tags
        ogimage
      }
    }
  }
`
