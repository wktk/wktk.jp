import React from "react"
import Tags from "../components/tags"

const PostMeta = ({ post }) => {
  return (
    <div className="post-meta">
      <div className="post-meta-sticky">
        <time dateTime={post.fields.localdate}>{post.fields.localdate}</time>
        <Tags tags={post.frontmatter.tags} />
      </div>
    </div>
  )
}

export default PostMeta
