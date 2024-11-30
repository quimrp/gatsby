import React from 'react';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('Welcome to your new Gatsby site')}</h1>
      <p>{t('Now go build something great.')}</p>
    
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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