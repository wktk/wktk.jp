import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = (props) => {
  const { data } = props
  const { title, author } = data.site.siteMetadata
  const [email, setEmail] = useState(0);
  const handleEmail = () => {
    if (!email) setEmail(atob('ay53YWtpdGFuaUBnbWFpbC5jb20K'));
  }

  return (
    <Layout location={props.location} title={title}>
      <SEO title={`About ${author}`} />
      <h1>About {author}</h1>
      <dl>
        <dt>Twitter</dt>
        <dd><a href="https://twitter.com/wk">@wk</a></dd>
        <dt>GitHub</dt>
        <dd><a href="https://github.com/wktk">@wktk</a></dd>
        <dt>Email</dt>
        <dd ref={handleEmail}>{
          email ? <a href={`mailto:${email}`}>{email}</a> : "loading..."
        }</dd>
      </dl>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
