import React from "react"
import Tags from "../components/tags"

const PostMeta = ({ post }) => {
  const publishedDate = post.fields.localdate
  const updatedDate = post.fields.updatedDate

  return (
    <div className="post-meta">
      <div className="post-meta-sticky">
        <time dateTime={publishedDate} itemProp="datePublished">
          {publishedDate}
        </time>
        {updatedDate && updatedDate !== publishedDate && (
          <small>
            <time dateTime={updatedDate} itemProp="dateModified">
              (更新:&nbsp;{updatedDate})
            </time>
          </small>
        )}
        <Tags tags={post.frontmatter.tags} />
      </div>
    </div>
  )
}

export default PostMeta
