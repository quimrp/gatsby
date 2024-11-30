import React from 'react';
import { graphql } from 'gatsby';
import Cta from "../components/Sections/Cta";
import Layout from "../components/Sections/Layout";
import Header from "../components/Sections/Header";
import "../assets/css/wordpress.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostTemplate = ({ data }) => {
  const post = data.wpPost;
  const image = getImage(post.featuredImage.node.localFile.childImageSharp.gatsbyImageData);
  const comments = post.comments.nodes;

  // Filtrar los comentarios principales (sin parentId)
  const mainComments = comments.filter(comment => comment.parentId === null);

  // Filtrar las respuestas (con parentId)
  const getReplies = (parentId) => {
    return comments.filter(comment => comment.parentId === parentId);
  };

  return (
    <Layout>
      <div style={{ marginTop: '60px', backgroundColor: 'black' }}></div>
      <Header nav="post" />
      <Cta />
      <div className="my-post-template">
        <h1>{post.title}</h1>
        {image && (
          <GatsbyImage
            image={image}
            alt={post.title}
            className="img-fluid mx-auto d-block"
            style={{ width: 'auto', height: '400px' }}
          />
        )}
        <div className="wordpress-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>

      {/* Mostrar los comentarios principales */}
      <div className="wordpress-comments">
        <h3>Comentarios</h3>
        {mainComments.map(comment => (
          <div key={comment.id} className="comment">
            <p><strong>{comment.author.node.name}</strong> dijo:</p>
            <div dangerouslySetInnerHTML={{ __html: comment.content }} />
            <p className="comment-date">{new Date(comment.date).toLocaleDateString()}</p>

            {/* Mostrar las respuestas a este comentario */}
            <div className="replies">
              {getReplies(comment.id).map(reply => (
                <div key={reply.id} className="reply">
                  <p><strong>{reply.author.node.name}</strong> respondió:</p>
                  <div dangerouslySetInnerHTML={{ __html: reply.content }} />
                  <p className="reply-date">{new Date(reply.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!, $language: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                height: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
      comments {
        nodes {
          id
          content
          date
          status
          parentId
          author {
            node {
              name
            }
          }
        }
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default PostTemplate;


