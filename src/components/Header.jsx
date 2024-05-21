// import React from 'react';
import Navigation from './Navigation';

function Header() {
    return (
<header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
<h1 style={{ paddingLeft: '20px' }}>Crystal DePalma</h1>
      <Navigation />
    </header>
  );
}

export default Header;


