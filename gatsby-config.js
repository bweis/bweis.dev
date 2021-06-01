const themeConfig = require(`./theme-config`)

module.exports = {
  siteMetadata: {
    siteTitle: `bweis.dev`,
    siteTitleAlt: `Ben Weis - Hello!`,
    siteHeadline: `a place for me to put stuff on the internet`,
    siteUrl: `https://bweis.dev`,
    siteDescription: `A site for my thoughts and musings`,
    siteLanguage: `en`,
    siteImage: `/images/banner.jpg`,
    author: `@bweis`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: themeConfig.postsPath,
        path: themeConfig.postsPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: themeConfig.pagesPath,
        path: themeConfig.pagesPath,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
}
