import React from 'react';
import styles from './Layout.module.css';

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};
