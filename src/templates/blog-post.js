import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AdSense from "../components/adsense"
import PostMeta from "../components/post-meta"
import {
  TwitterShareButton,
  LineShareButton,
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  TwitterIcon,
  LineIcon,
  EmailIcon,
  FacebookIcon,
  HatenaIcon,
} from 'react-share'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons"

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    if (window.twttr && window.twttr.widgets && typeof window.twttr.widgets.load === 'function') {
      window.twttr.widgets.load()
    }
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const copy = async () => {
      const text = `${post.frontmatter.title}\n${this.props.location.href}`
      try {
        await navigator.clipboard.writeText(text)
        this.setState({ copied: true })
        setTimeout(() => this.setState({ copied: false }), 2000)
      } catch (err) {
        console.error('Failed to copy: ', err)
      }
    }

    return (
      <Layout location={this.props.location} title={siteTitle} className="blog-post">
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          ogimage={post.frontmatter.ogimage}
        />
        <h1>{post.frontmatter.title}</h1>
        <PostMeta post={post}/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div id="share">
          <ul>
          <li>
            <TwitterShareButton url={this.props.location.href} title={`${post.frontmatter.title} | ${siteTitle}`} via="wk">
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </li>
          <li>
            <HatenaShareButton url={this.props.location.href} title={`${post.frontmatter.title} | ${siteTitle}`}>
              <HatenaIcon size={32} round />
            </HatenaShareButton>
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
            <EmailShareButton url={this.props.location.href} subject={`${post.frontmatter.title} | ${siteTitle}`}>
              <EmailIcon size={32} round />
            </EmailShareButton>
          </li>
          <li>
            <div style={{
              display: 'inline-block',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              backgroundColor: this.state?.copied ? '#6c6' : '#c66',
              borderRadius: '50%',
              textAlign: 'center',
              lineHeight: '32px'
            }}>
              <FontAwesomeIcon icon={this.state?.copied ? faCheck : faCopy} onClick={copy} />
            </div>
          </li>
        </ul>

        <small>記事の内容を引用・参考にする際は参考文献として記載いただくようお願いします。</small>
        </div>

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
      excerpt(truncate: true)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        tags
        ogimage
      }
      fields {
        localdate
      }
    }
  }
`
