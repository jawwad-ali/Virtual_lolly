// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const response = await graphql(` 
//     query {
//       lolly {
//         getVCard { 
//           c1
//            c2
//            c3
//            rec
//            msg
//            sender
//            url
//         }
//       }
//     }
//   `)
//   response.data.lolly.getVCard.forEach(edge => {
//     createPage({
//       path: `/lolly/${edge.url}`,
//       component: path.resolve(`./src/templates/template.js`),
//       context: {
//         id: edge.url,
//         c1: edge.c1,
//         c2: edge.c2,
//         c3: edge.c3,
//         url: edge.url,
//         msg: edge.msg,
//         sender: edge.sender,
//         rec: edge.rec
//       },
//     })
//   })
// }



const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
      query {
        VCard {
            getVCard { 
              c1
               c2
               c3
               rec
               msg
               sender
               url
            }
          }
        }
  `)

  data.VCard.getVCard.forEach(node => {
    createPage({
      path: `lolly/${node.link}`,
      component: path.resolve("./src/templates/template.tsx"),
      context: {
        id: edge.url,
        c1: edge.c1,
        c2: edge.c2,
        c3: edge.c3,
        url: edge.url,
        msg: edge.msg,
        sender: edge.sender,
        rec: edge.rec
      },
    })
  })
}