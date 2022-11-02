import { Link } from 'react-router-dom';
import { Main, Nav, Ul } from './style';

export const NavBar = () => (
    
  <Main className="menu">
    <Nav>
      <Ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalogo">Catalogo</Link>
        </li>
      </Ul>
    </Nav>
  </Main>
);

