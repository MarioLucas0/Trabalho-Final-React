import Desenho from '../../assets/img/Desenho.svg';
import Seta from '../../assets/img/Seta.svg';
import {
  DivButton, DivContainer,
  DivImg, DivText, Main, Section,
  TextoPrincipal, TextoSecundario
} from "./style";
export const Home = () => (
    
  <Section>
    <Main>
      <DivContainer>
        <DivText>
          <TextoPrincipal>
                Conheça o melhor catálogo de produtos
          </TextoPrincipal>
          <TextoSecundario>
            Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.
          </TextoSecundario>
        <DivButton>
          <p>INICIE AGORA A SUA BUSCA</p>
          
          <div>
            <img src={Seta} alt="" />
          </div>
        </DivButton>
        </DivText>
        <DivImg>
          <img src={Desenho} alt="" />
        </DivImg>
      </DivContainer>
    </Main>
  </Section>
);

