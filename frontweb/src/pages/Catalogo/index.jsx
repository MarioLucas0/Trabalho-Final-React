import { useContext, useEffect, useState } from "react";
import Pesquisa from "../../assets/img/Pesquisa.svg";
import { context } from "../../context";
import api from '../../services/api';
import CardLoader from "./CardLoader";
import { CardProduto } from "./CardProduto";
import {
  ButtonLimpar, DivCards, DivContainer, DivInput, DivInputs, H1Inicial,
  Section
} from "./style";
export const Catalogo = () => {

  const [produtos, setProdutos] = useState();
  const [busca, setBusca] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const ctx = useContext(context)


  useEffect(() => {

    setIsLoading(true)
    api.get("/produtos")
      .then((response) => {
      setProdutos(response.data.content)
      ctx.setProduto(response.data.content)
      
    
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      }).finally(() => {
        setIsLoading(false)
      });
      
  }, []);

  const limpar = () => {
    if(busca != "") {
      setBusca("")
    }
  }

  const produtosFiltrados = produtos?.filter((produto) => produto.nome.includes(busca))


  return (
      <Section>
        <DivContainer>
          <H1Inicial>Catálogo de produtos</H1Inicial>
          <DivInputs>
            <DivInput>
              <input type="text" placeholder="Nome do produto" value={busca}  onChange={(e) => setBusca(e.target.value)}/>
              <img src={Pesquisa} alt="" />
            </DivInput>
              <ButtonLimpar onClick={limpar}>Limpar Filtro</ButtonLimpar> 
          </DivInputs>
           
          <DivCards>
            {isLoading ? <CardLoader /> : (
              produtosFiltrados?.map((prod,index) => (
              <CardProduto produto={prod} key={index}/>
            )))}
          </DivCards>
          
       
        </DivContainer>
      </Section>
  )
}