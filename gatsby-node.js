const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogArticle = path.resolve('./src/templates/blog-article.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogArticle {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const articles = result.data.allContentfulBlogArticle.edges
        articles.forEach((article, index) => {
          createPage({
            path: `/blog/${article.node.slug}/`,
            component: blogArticle,
            context: {
              slug: article.node.slug,
            },
          })
        })
      })
    )
  })
}
