import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';

export const Nav: React.FC = () => {
  const atriclesRoute = routes.find(route => route.label === 'Articles');
  const path: string = (atriclesRoute && atriclesRoute.path) || '/articles';
  return <Link to={path}>Розділи</Link>;
};
