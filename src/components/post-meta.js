import React from "react"
import Tags from "../components/tags"

const PostMeta = ({ post }) => {
  return (
    <div class="post-meta">
      <div class="post-meta-sticky">
        <time datetime={post.fields.localdate}>{post.fields.localdate}</time>
        <Tags tags={post.frontmatter.tags} />
      </div>
    </div>
  )
}

export default PostMeta
