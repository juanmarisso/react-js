import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#007bff', color: 'white' }}>
      <h1>Mi Tienda</h1>
      <div>
        <a href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Inicio</a>
        <a href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Productos</a>
        <a href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;