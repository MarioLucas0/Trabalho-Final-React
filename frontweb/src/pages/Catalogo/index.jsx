import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pesquisa from "../../assets/img/Pesquisa.svg";
import { CardProduto } from "../../components/CardProduto";
import api from '../../services/api';
import {
  ButtonLimpar, DivCards, DivContainer, DivInput, DivInputs, H1Inicial,
  Section
} from "./style";
export const Catalogo = () => {

  const [produtos, setProdutos] = useState();
  const [busca, setBusca] = useState("");


  useEffect(() => {
    const param = {}

    if(busca) {
      useParams.title = busca
    }
    api.get("/produtos", {param})
      .then((response) => {
      setProdutos(response.data)
      console.log(response.data)
    
    })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [busca]);



  //const produtosFiltrados = produtos?.filter((produto) => produto.)

  return (
      <Section>
        <DivContainer>
          <H1Inicial>Catálogo de produtos</H1Inicial>
          <DivInputs>
            <DivInput>
              <input type="text" placeholder="Nome do produto" value={busca} onChange={(e) => {setBusca(e.target.value) 
                 console.log(busca)}}/>
              <img src={Pesquisa} alt="" />
            </DivInput>
              <ButtonLimpar>Limpar Filtro</ButtonLimpar> 
          </DivInputs>
           
          <DivCards>
            {produtos?.map((prod,index) => (
              <CardProduto produto={prod} key={index}/>
            ))}
          </DivCards>
          
       
        </DivContainer>
      </Section>
  )
}