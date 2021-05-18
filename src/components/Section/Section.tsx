import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_ARTICLES } from '../../utils/apiUtils';

export const Section: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return data.articles.map((article: any) => (
    <div key={article.id}>
      <Link to={`/${article.id}`}>{article.name}</Link>
    </div>
  ));
};
