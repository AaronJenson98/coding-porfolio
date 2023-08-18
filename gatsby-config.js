module.exports = {
  siteMetadata: {
    lang: 'en',
    title: 'Aaron Jenson | Junior Software Engineer',
    description: "I'm Aaron Jeson, a 25-year-old Junior Software Engineer, from Salt Lake City, Utah.",
    author: 'Aaron Jenson',
    siteUrl: 'https://aaronjenson.codes',
    imageShare: 'share.png',
    email: 'aj.aaron.jenson@gmail.com',
    social: [
      { name: 'linkedin', url: 'https://linkedin.com/in/aaron-j-48307b163' },
      { name: 'github', url: 'https://github.com/AaronJenson98' },
      { name: 'gitlab', url: 'https://gitlab.com/AaronJenson98' },
      { name: 'dev', url: 'https://dev.to/aaronjenson98' },
    ],
  },
  plugins: [
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
            },
          },
          {
            resolve: 'gatsby-remark-code-titles',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-156556339-1`,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Aaron Jenson | Computer Science Student',
        short_name: 'Aaron Jenson',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#02aab0',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
  ],
};
