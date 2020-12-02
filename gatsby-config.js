
module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Yellowtail`,
          `Helvetica`,
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "VCard",
    //     fieldName: "lolly",
    //     url: "http://localhost:8888/.netlify/functions/v_lolly",
    //   },
    // },
  ],
}
