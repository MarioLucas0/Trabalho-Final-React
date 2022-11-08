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
          <Link to="/admin/categoria">Categorias</Link>
        </li>
        <li>
          <Link to="/admin/pedido/listar">Pedido</Link>
        </li>
        <li>
          <Link to="/admin/cliente/listar">Cliente</Link>
        </li>
      </Ul>
    </Nav>
  </Aside>
);

