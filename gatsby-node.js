const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  return graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        //TODO: add 'component', etc
      })
    });
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}
