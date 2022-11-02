import Seta from '../../assets/img/Seta2.svg';
import teste from '../../assets/img/teste.svg';
import {
  Descricao, DivContainer, DivImg,
  DivInfo, DivPreco, H2NomeProduto, Main, Section
} from "./style";
export const ProdutoInfo = () => (  
  <Section>
    <Main>
      <DivContainer>
        <button>
          <img src={Seta} alt="" />
          <span>Voltar</span>
        </button>
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
      <Descricao>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque ex fugit minus accusamus quibusdam qui laborum aspernatur, perferendis excepturi libero tempore culpa distinctio sed a fuga eligendi corporis facere!
        </p>
     
      </Descricao>
    </Main>
  </Section>
);

