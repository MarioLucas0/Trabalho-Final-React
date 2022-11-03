
import { Link, useParams } from "react-router-dom";
import {
  DivContainer, DivImg, DivInfo, DivPreco, H2NomeProduto
} from "./style";

export const CardProduto = ({produto}) => {

  const { id } = useParams()
  return (
    
   <DivContainer>
    <Link to={`/catalogo/${id}`}>
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
   </DivContainer>
  )
};