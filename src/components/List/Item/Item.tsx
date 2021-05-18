import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  item: any;
  pathname: string;
}

export const Item: React.FC<Props> = ({ item, pathname }) => {
  return (
    <li>
      <Link to={`${pathname}/${item.id}`}>{item.name}</Link>
    </li>
  );
};
