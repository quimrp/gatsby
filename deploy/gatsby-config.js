const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Naxos - React Gatsby JS App Landing Page Template`,
    siteUrl: `https://nexgen.instaltancaments.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `source`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.join(__dirname, `source`, `assets`),
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "~": path.resolve(__dirname, 'source'),
          "~components": path.resolve(__dirname, 'source/components'),
          "~images": path.resolve(__dirname, 'source/images'),
          "~assets": path.resolve(__dirname, 'source/assets'),
          "~css": path.resolve(__dirname, 'source/assets/css'),
        },
        extensions: ['.js', '.jsx', '.scss', '.sass', '.css']
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`es`, `ca`, `en`, `fr`, `ru`, `de`],
        defaultLanguage: `es`,
        siteUrl: `https://nexgen.instaltancaments.com`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-P69VNMXN",
        includeInDevelopment: false,
      },
    },
  ],
};

