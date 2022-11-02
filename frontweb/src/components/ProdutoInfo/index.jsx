import teste from '../../assets/img/teste.svg';
import { DivContainer, DivImg, DivInfo, DivPreco, H2NomeProduto, Main, Section } from "./style";
export const ProdutoInfo = () => (
    
  <Section>
    <Main>
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
    </Main>
  </Section>
);

