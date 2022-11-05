import { useContext } from 'react';
import { Link } from 'react-router-dom';
import carrinho from "../../assets/img/compra.svg";
import { context } from "../../context";
import { DivRight, Header, Nav, Ul } from './style';

export const NavBar = () => {
  const { productsCart } = useContext(context);
    
  return (
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
        <DivRight>
          <Link to="/catalogo/carrinho">
            <img src={carrinho} alt="" />
            <p>Carrinho ({productsCart.length})</p>
          </Link>
        </DivRight>
    </Header>
    )
};

