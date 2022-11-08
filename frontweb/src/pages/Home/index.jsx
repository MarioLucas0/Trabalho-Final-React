import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Desenho from '../../assets/img/Desenho.svg';
import Seta from '../../assets/img/Seta.svg';
import { context } from "../../context";

import {
  DivButton, DivContainer,
  DivImg, DivText, Main, Section,
  TextoPrincipal, TextoSecundario
} from "./style";






export const Home = () => {
  const ctx = useContext(context)

  useEffect(() => {
    console.log(ctx?.clientId2)
  },[])
    
  return (
      <Section>
        <Main>
          <DivContainer>
            <DivText>
              <TextoPrincipal>
                    Conheça o melhor catálogo de produtos
              </TextoPrincipal>
              <TextoSecundario>
                Ajudaremos você a encontrar os melhores  produtos disponíveis no 
                    mercado.
              </TextoSecundario>

              <Link to="/catalogo">
                <DivButton>
                  <p>INICIE AGORA A SUA BUSCA</p>
                  
                  <div>
                    <img src={Seta} alt="" />
                  </div>
                </DivButton>  
              </Link>
            </DivText>
            <DivImg>
              <img src={Desenho} alt="" />
            </DivImg>
          </DivContainer>
        </Main>
      </Section>
    );
  }

