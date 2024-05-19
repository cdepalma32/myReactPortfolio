// import React from 'react';
import Navigation from './Navigation';

function Header() {
    return (
//         <header>
//            <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>
//         <h1>Crystal DePalma</h1>
//         <Navigation />
//       </header>
//     );
// }
<header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1>Crystal DePalma</h1>
      <Navigation />
    </header>
  );
}

export default Header;


