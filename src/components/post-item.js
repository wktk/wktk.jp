import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function PostItem({node}) {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div key={node.fields.slug}>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          {title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
        <ul class="tags">
          {node.frontmatter.tags.map(tag =>
            <li><Link to={`/tags/${tag}/`}>{tag}</Link></li>
          )}
        </ul>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  )
}

export default PostItem
