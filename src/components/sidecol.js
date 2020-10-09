import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Bio from "../components/bio"
import Tags from "../components/tags"

function SideCol() {
  const tagQuery = graphql`
    {
      tags: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { fields: { draft: { eq: false } } }
      ) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `;

  return (
    <div id="sidecol">
      <div id="sidecol-sticky">
        <Bio />
        <h3>Tags</h3>
        <StaticQuery
          query={tagQuery}
          render={data => <Tags tags={data.tags.group.map(data => data.tag)} />}
        />
        <footer>
          <span>© {new Date().getFullYear()} <Link to="/">wktk.jp</Link></span>
          <small>Built with <a href="https://www.gatsbyjs.org">Gatsby</a></small>
        </footer>
      </div>
    </div>
  )
}

export default SideCol
