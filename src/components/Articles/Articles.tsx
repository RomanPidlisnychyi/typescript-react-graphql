import React, { ReactNode } from 'react';
import { useQuery } from '@apollo/client';
import { List } from '../List/List';
import { GET_ARTICLES } from '../../utils/apiUtils';

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

export const Articles: React.FC<Props> = ({ location }) => {
  const { pathname } = location;

  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return <List items={data.articles} pathname={pathname} />;
};
