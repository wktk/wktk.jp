const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve(`./src/templates/tag.js`)
  const archive = path.resolve(`./src/templates/archive.js`)

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
                date(formatString: "YYYY-MM-DD")
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

    posts.map(
      post => post.node.frontmatter.date.split('-').map(n => parseInt(n))
    ).flatMap(
      date => [date, date.slice(0, 2), [date[0]]]
    ).filter(
      (elem, index, self) => self.indexOf(elem) === index
    ).forEach(date => {
      const path = date.join('/')
      const context = { date: path, from: new Date(date[0], date[1] ? date[1] - 1 : null, date[2] || null) }
      date[date.length - 1] = date[date.length - 1] + 1
      context.to = new Date(date[0], date[1] ? date[1] - 1 : null, date[2] || null)
      console.log(context)
      createPage({ path: `/archive/${path}/`, component: archive, context })
      createRedirect({ fromPath: `/entry/${path}/`, toPath: `/archive/${path}/`, isParmanent: true, redirectInBrowser: true })
    })

    createRedirect({
      fromPath: `/archive/`,
      toPath: `/`,
      isPermanent: true,
      redirectInBrowser: true,
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

    const tagRedirects = {
      certificate: "exam",
      programming: "tech",
      vps: "tech",
      github: "tech",
      gist: "tech",
      Gist: "gist",
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
  }
}
