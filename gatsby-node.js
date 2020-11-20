const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const response = await graphql(` 
    query {
      lolly {
        getVCard {
          url
        }
      }
    }
  `)
    response.data.lolly.getVCard.forEach(edge => {
        createPage({
            path: `/create/${edge.url}`,
            component: path.resolve(`./src/templates/template.js`),
            context: {
                id: edge.url,
            },
        })
    })
}