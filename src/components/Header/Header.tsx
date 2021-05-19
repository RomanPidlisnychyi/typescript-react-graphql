import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const homeRoute = routes.find(route => route.label === 'Home');
  const path: string = (homeRoute && homeRoute.path) || '/';
  return (
    <header>
      <Link className={styles.title} to={path}>
        Математика
      </Link>
    </header>
  );
};
