import React from "react"
import { Link } from "gatsby"

const PostMeta = ({ post }) => {
  return (
    <div class="post-meta">
      <div class="post-meta-sticky">
        <time datetime={post.fields.localdate}>{post.fields.localdate}</time>
        <ul class="tags">
          {post.frontmatter.tags.map(tag =>
            <li><Link to={`/tags/${tag}/`}>{ tag }</Link></li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default PostMeta
