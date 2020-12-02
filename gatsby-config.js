
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
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GEN_LINK",
        fieldName: "get_v_Card",
        url: "https://peaceful-sinoussi-140afb.netlify.app/.netlify/functions/v_lolly",
      },
    },
  ],
}
