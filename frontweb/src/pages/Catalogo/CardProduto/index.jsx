
import { Link } from "react-router-dom";
import compra from "../../../assets/img/compra.svg";
import {
  DivContainer, DivImg, DivInfo,
  DivPreco, H2NomeProduto, IconCompra
} from "./style";

export const CardProduto = ({produto}) => {

 
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
          <span>{produto?.valorUnitario}</span>
        </DivPreco>
    
    </DivInfo>
    <IconCompra>
          <img src={compra} alt="" />
        </IconCompra>
        
   </DivContainer>
  )
};