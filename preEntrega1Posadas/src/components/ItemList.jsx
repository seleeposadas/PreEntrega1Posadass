import React from 'react';
import Container from '@mui/material/Container';
import { Item } from './Item';

export const ItemList = ({ items }) => {
  return (
    <Container>
      {Array.isArray(items) ? (
        items.map((item) => (
          <Item key={item.id} item={item} />
        ))
      ) : (
        <p>No hay items disponibles.</p>
      )}
    </Container>
  );
};