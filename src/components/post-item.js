import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

function PostItem({node}) {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div key={node.fields.slug}>
      <h3
        style={{
          marginBottom: rhythm(1 / 2),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          {title}
        </Link>
      </h3>
        <div
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1/3),
          }}
        >
          {node.fields.localdate}
          <ul class="tags">
            {node.frontmatter.tags.map(tag =>
              <li><Link to={`/tags/${tag}/`}>{ tag }</Link></li>
            )}
          </ul>
        </div>
        {node.frontmatter.ogimage &&
          <img class="post-thumb" src={node.frontmatter.ogimage} alt={`「${title}」のサムネイル`} />
        }
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  )
}

export default PostItem
