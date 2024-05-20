
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ display: 'flex', justifyContent: 'center'}}>
    <div className="collapse navbar-collapse" id="navbarNav" style={{ justifyContent: 'center' }}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
        </li>
      </ul>
    </div>
  </nav>
);
}
export default Navigation;
