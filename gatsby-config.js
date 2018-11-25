module.exports = {
  siteMetadata: {
    title: 'vine & fork',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/img/vineandforklogo.png',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/src/public/CNAME`,
        destination: 'CNAME',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-next`,
  ],
}
