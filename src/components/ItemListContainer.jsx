import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{greeting}</h2>
      <p>Pronto verás nuestros productos aquí.</p>
    </section>
  );
};

export default ItemListContainer;
