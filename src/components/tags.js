import React from "react"
import { Link } from "gatsby"

const Tags = ({ tags }) => {
  return (
    <ul className="tags">
      {tags.map(tag => <li><Link to={`/tags/${tag}/`}>{ tag }</Link></li>)}
    </ul>
  )
}

export default Tags
