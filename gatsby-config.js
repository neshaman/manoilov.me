module.exports = {
  siteMetadata: {
    title: `Nenad Manoilov - Personal Portfolio`,
    description: `Web Designer & Developer based in San Antonio, Texas. Highly experienced in designing & developing complex ecommerce systems and custom Wordpress websites.`,
    author: `Nenad Manoilov`,
    url: `https://manoilov.me`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-material-ui'
  ],
}
