import teste from '../../assets/img/teste.svg';

import {
  DivContainer, DivImg, DivInfo, DivPreco, H2NomeProduto
} from "./style";

export const CardProduto = () => (
   <DivContainer>
    <DivImg>
      <img src={teste} alt="" />
    </DivImg>
    <DivInfo>
        <H2NomeProduto>Computador Desktop - Intel Core i7</H2NomeProduto>
        <DivPreco>
          <p>R$</p>
          <span>2.779,00</span>
        </DivPreco>
    </DivInfo>
   </DivContainer>
);