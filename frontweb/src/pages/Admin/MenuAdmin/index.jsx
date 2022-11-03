import { Link } from 'react-router-dom';
import { Aside, Nav, Ul } from './style.js';


export const MenuAdmin = () => (
    
  <Aside>
    <Nav>
      <Ul>
        <li>
          <Link to="/admin/produto">Produtos</Link>
        </li>
        <li>
          <Link to="/catalogo">Categorias</Link>
        </li>
        <li>
          <Link to="/cliente">Pedido</Link>
        </li>
      </Ul>
    </Nav>
  </Aside>
);

