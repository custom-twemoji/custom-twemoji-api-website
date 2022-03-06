const themeOptions = require('gatsby-theme-apollo-docs/theme-options');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        root: __dirname,
        pathPrefix: '/docs',
        algoliaIndexName: 'basics',
        subtitle: 'Custom Twemoji API',
        description: 'How to use Custom Twemoji API',
        githubRepo: 'custom-twemoji/custom-twemoji-api-website',
        spectrumPath: '/',
        sidebarCategories: {
          null: [
            'index',
            'intro/platform',
            'intro/benefits',
            '[Guided tutorials](https://odyssey.apollographql.com/?utm_source=apollo_docs&utm_medium=referral&utm_campaign=docs_sidebar)',
          ],
          'Full-Stack Tutorial': [
            'tutorial/introduction',
            'tutorial/schema',
            'tutorial/data-source',
            'tutorial/resolvers',
            'tutorial/mutation-resolvers',
            'tutorial/production',
            'tutorial/client',
            'tutorial/queries',
            'tutorial/mutations',
            'tutorial/local-state',
          ],
          'Development Tools': [
            '[Rover CLI](https://www.apollographql.com/docs/rover)',
            'devtools/editor-plugins',
            'devtools/apollo-config',
            'devtools/cli',
          ],
          Resources: [
            '[Principled GraphQL](https://principledgraphql.com)',
            'resources/graphql-glossary',
            'resources/faq',
            'resources/elastic-license-v2-faq',
            'resources/release-stages',
          ],
        },
      },
    },
  ],
};
