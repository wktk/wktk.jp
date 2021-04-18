import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import PostMeta from "./post-meta"

function PostItem({node}) {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div key={node.fields.slug} class="post-item">
      <h3>
        <Link to={node.fields.slug}>{title}</Link>
      </h3>
      <PostMeta post={node} />
      {node.frontmatter.featuredImage && <Link to={node.fields.slug}>
        <GatsbyImage
          className="post-thumb"
          objectFit="cover"
          image={getImage(node.frontmatter.featuredImage)}
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
