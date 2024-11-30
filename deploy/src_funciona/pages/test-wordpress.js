import React from 'react';
import { graphql } from 'gatsby';

const TestWordPress = ({ data }) => {
  // Acceder a los datos de la consulta GraphQL
  const posts = data.allWpPost.nodes;
  const pages = data.allWpPage.edges;

  return (
    <div>
      <h1>Posts:</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}

      <h1>Pages:</h1>
      {pages.map((page, index) => (
        <div key={index}>
          <h2>{page.node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: page.node.content }} />
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query {
    allWpPost {
      nodes {
        title
        content
        date
        excerpt
        featuredImageId
        id
        link
      }
    }
    allWpPage {
      edges {
        node {
          title
          content
          date
          link
        }
      }
    }
  }
`;

export default TestWordPress;



