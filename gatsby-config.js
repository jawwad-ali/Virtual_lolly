/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Yellowtail`,
          `Helvetica`,
          // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}
