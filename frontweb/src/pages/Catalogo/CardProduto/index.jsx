
import { useContext } from "react";
import { Link } from "react-router-dom";
import compra from "../../../assets/img/compra.svg";
import { context } from "../../../context";
import {
  DivContainer, DivImg, DivInfo,
  DivPreco, H2NomeProduto, IconCompra
} from "./style";

export const CardProduto = ({produto}) => {
  const ctx = useContext(context)
  const {handleAddItemToCart} = useContext(context)
 


  const jogarCarrinho = () => {

    handleAddItemToCart(produto)


  }


 
  return (
    
   <DivContainer>
    <Link to={`/catalogo/${produto.id}`}>
    <DivImg>
      <img src={produto?.imagemUrl} alt="" />
    </DivImg>

    </Link>
    <DivInfo>
        <H2NomeProduto>{produto?.nome}</H2NomeProduto>
        <DivPreco>
          <p>R$</p>
          <span>{produto?.valorUnitario.toFixed(2)}</span>
        </DivPreco>
    
    </DivInfo>
    <IconCompra>
          <img src={compra} alt="" onClick={jogarCarrinho}/>
       
    </IconCompra>
        
   </DivContainer>
  )
};