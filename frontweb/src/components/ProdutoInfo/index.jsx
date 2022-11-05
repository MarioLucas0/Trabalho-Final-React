import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seta from '../../assets/img/Seta2.svg';
import api from '../../services/api';
import {
  Descricao, DivContainer, DivImg,
  DivInfo, DivPreco, H2NomeProduto, Main, Section
} from "./style";
export const ProdutoInfo = () => {
  const [produtos, setProdutos] = useState();
  const { id } = useParams()

  useEffect(() => {
    
    api.get(`/produtos/${id}`)
      .then((response) => {
      setProdutos(response.data)
      console.log(response)
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      }).finally(() => {
      
      });
      
  }, []);

  return (
    <Section>
      <Main>
        <DivContainer>
          <button>
            <img src={Seta} alt="" />
            <Link to="/catalogo">
             <span>Voltar</span>
            </Link> 
          </button>
          <DivImg>
            <img src={produtos?.imagemUrl} alt="" />
          </DivImg>
          <DivInfo>
              <H2NomeProduto>{produtos?.nome}</H2NomeProduto>
              <DivPreco>
                <p>R$</p>
                <span>{produtos?.valorUnitario
}</span>
              </DivPreco>
          </DivInfo>
        </DivContainer>
        <Descricao>
          <p>
            {produtos?.descricao
}
          </p>
      
        </Descricao>
      </Main>
    </Section>
  )
};

