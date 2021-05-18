import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';

export const Home: React.FC = () => {
  const articlesPath = routes.find(route => route.label === 'Articles');
  console.log(`articlesPath`, articlesPath);
  return <Link to="/articles">Розділи</Link>;
};
