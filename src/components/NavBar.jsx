import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Inicio</Link>
      <Link to="/categoria/fertilizantes" style={{ marginRight: '1rem' }}>Fertilizantes</Link>
      <Link to="/categoria/iluminacion" style={{ marginRight: '1rem' }}>Iluminación</Link>
      <Link to="/categoria/accesorios">Accesorios</Link>
    </nav>
  );
};

export default NavBar;