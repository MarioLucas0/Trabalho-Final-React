import { useContext , useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from 'react-router-dom';
import carrinho from "../../assets/img/compra.svg";
import { context } from "../../context/index";
import "./style.css"


export const NavBar = () => {
  const { productsCart } = useContext(context);

  const [isMobile, setMobile] = useState(false)
    
  return (
    <nav className="navbar">
            <h3 className="logo">Serracomerce</h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}>
                <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/catalogo" className="catalogo">
                    <li>Catalogo</li>
                </Link>
                <Link to="/admin/produto" className="admin">
                    <li>Admin</li>
                </Link>
                <Link to= "/catalogo/carrinho"className="carrinho">
                {/* <img src={carrinho} alt="" /> */}
                <p>Carrinho ({productsCart.length})</p>
                </Link>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setMobile(!isMobile)}>
                {isMobile ? (<i className="fas fa-times"><FaTimes/></i>) : (<i className="fas fa-bars"><FaBars/></i>)}
            </button>
        </nav>
    )
};

