import { Link } from 'react-router-dom';
import { Aside, Nav, Ul } from './style.js';


export const MenuAdmin = () => (
    
  <Aside>
    <Nav>
      <Ul>
        <li>
          <Link to="/">Produtos</Link>
        </li>
        <li>
          <Link to="/catalogo">Categorias</Link>
        </li>
        <li>
          <Link to="/cliente">Cliente</Link>
        </li>
      </Ul>
    </Nav>
  </Aside>
);

