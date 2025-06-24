import React from 'react';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span role="img" aria-label="carrito">🛒</span>
      <span style={{ marginLeft: '5px' }}>3</span>
    </div>
  );
};

export default CartWidget;