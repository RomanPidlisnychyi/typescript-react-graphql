import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  {
    articles {
      id
      name
    }
  }
`;

export const GET_SECTIONS_BY_ARTICLE_ID = gql`
  query sections($articleId: String!) {
    sections(articleId: $articleId) {
      id
      name
    }
  }
`;
