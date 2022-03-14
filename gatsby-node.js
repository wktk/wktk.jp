const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const moment = require("moment-timezone")

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
                date
                draft
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

    createRedirect({
      fromPath: 'https://wktk.netlify.com/*',
      toPath: `https://wktk.jp/:splat`,
      isPermanent: true,
      force: true,
    })

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

    createRedirect({
      fromPath: `/archive/`,
      toPath: `/`,
      isPermanent: true,
      redirectInBrowser: true,
    })

    const flatTags = Array.prototype.concat.apply([], posts.map(post => post.node.frontmatter.tags).filter(it => it))
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

    const tagRedirects = {
      certificate: "exam",
      programming: "tech",
      vps: "tech",
      github: "tech",
      gist: "tech",
    }

    for (let [before, after] of Object.entries(tagRedirects)) {
      createRedirect({
        fromPath: `/tags/${before}/`,
        toPath: `/tags/${after}/`,
        isPermanent: true,
        redirectInBrowser: true,
      })
    }

    tags.concat(Object.keys(tagRedirects)).forEach(tag => {
      createRedirect({
        fromPath: `/archive/category/${tag}/`,
        toPath: `/tags/${tag}/`,
        isPermanent: true,
        redirectInBrowser: true,
      })
      createRedirect({
        fromPath: `/archive/category/${tag[0].toUpperCase()}${tag.substr(1)}/`,
        toPath: `/tags/${tag}/`,
        isPermanent: true,
        redirectInBrowser: true,
      })
    })
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

    const localdate = moment(node.frontmatter.date).tz("Asia/Tokyo")
    createNodeField({ name: 'localdate', node, value: localdate.format("YYYY-MM-DD HH:mm:ss") })

    createNodeField({ name: 'draft', node, value: !!node.frontmatter.draft })
  }
}
