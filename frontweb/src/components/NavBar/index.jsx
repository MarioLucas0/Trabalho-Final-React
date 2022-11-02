import { Link } from 'react-router-dom';
import { Header, Nav, Ul } from './style';

export const NavBar = () => (
    
  <Header className="menu">
       <span>SerraCommerce</span>
    <Nav>
      <Ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalogo">Catalogo</Link>
        </li>
        <li>
          <Link to="/admin/produto">Admin</Link>
        </li>
      </Ul>
    </Nav>
  </Header>
);

