import React from 'react';
import { Item } from './Item/Item';

interface I {
  id: string;
  name: string;
  length?: number;
  map?: (item: any) => any;
}

interface Props {
  items: I[];
  listItem?: any;
  pathname: string;
}

export const List: React.FC<Props> = ({
  items,
  listItem: ListItem,
  pathname,
}) => {
  return items && items.length > 0 ? (
    <ul>
      {items.map((item: any) =>
        ListItem ? (
          <ListItem key={item.id} item={item} pathname={pathname} />
        ) : (
          <Item key={item.id} item={item} pathname={pathname} />
        )
      )}
    </ul>
  ) : null;
};
