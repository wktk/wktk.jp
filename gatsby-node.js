const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve(`./src/templates/tag.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { fields: { draft: { eq: false } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug.replace(/\/?$/, '/'),
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    const flatTags = Array.prototype.concat.apply([], posts.map(post => post.node.frontmatter.tags))
    const tags = Array.from(new Set(flatTags))

    tags.forEach(tag => {
      createPage({
        path: `/tags/${tag}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

    for (let [before, after] of Object.entries({
      certificate: "exam",
      vps: "tech",
      github: "tech",
    })) {
      createRedirect({
        fromPath: `/tags/${before}/`,
        toPath: `/tags/${after}/`,
        isPermanent: true,
        redirectInBrowser: true,
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    let value;
    if (node.frontmatter && node.frontmatter.slug) {
      value = `/${node.frontmatter.slug}/`
    } else {
      value = createFilePath({ node, getNode })
    }
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
