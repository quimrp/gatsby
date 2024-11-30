const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
      alias: {
        "~": path.resolve(__dirname, "./source"),
        "~assets": path.resolve(__dirname, "./source/assets"),
        "~components": path.resolve(__dirname, "./source/components"),
        "~images": path.resolve(__dirname, "./source/images")
      }
    }
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          title
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error('Error al obtener los posts de WordPress');
  }

  const posts = result.data.allWpPost.nodes;

  posts.forEach(post => {
    createPage({
      path: `/post/${post.slug}/`,
      component: path.resolve('./source/templates/post-template.js'),
      context: {
        id: post.id,
      },
    });
  });
};

