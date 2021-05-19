import React, { ReactNode } from 'react';
import { useQuery } from '@apollo/client';
import { List } from '../List/List';
import { GET_SECTIONS_BY_ARTICLE_ID } from '../../utils/apiUtils';

interface Props {
  match: {
    params: {
      articleId: string;
    };
  };
  location: {
    pathname: string;
  };
  children?: ReactNode;
}

export const Article: React.FC<Props> = ({ match, location }) => {
  const { pathname } = location;
  const articleId = match.params.articleId;
  const { loading, error, data } = useQuery(GET_SECTIONS_BY_ARTICLE_ID, {
    variables: { articleId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p>Error :</p>;
  }

  return <List items={data.sections} pathname={pathname} />;
};
