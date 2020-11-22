require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: 'Master Gatsby',
    siteUrl: 'https://localhost:8000',
    description: 'Best Pizza Place Ever',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // Name the plugin you want to add options to
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '9l7kwhia',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
