import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

function PostItem({node}) {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div key={node.fields.slug} class="post-item">
      <h3>
        <Link to={node.fields.slug}>{title}</Link>
      </h3>
      <div class="post-meta">
        {node.fields.localdate}
        <ul class="tags">
          {node.frontmatter.tags.map(tag =>
            <li><Link to={`/tags/${tag}/`}>{ tag }</Link></li>
          )}
        </ul>
      </div>
      {node.frontmatter.featuredImage && <Link to={node.fields.slug}>
        <Image
          className="post-thumb"
          objectFit="cover"
          fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
          alt={`「${title}」のサムネイル`}
        />
      </Link>}
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  )
}

export default PostItem
