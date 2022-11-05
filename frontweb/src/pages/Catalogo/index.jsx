import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Pesquisa from "../../assets/img/Pesquisa.svg";
import api from '../../services/api';
import CardLoader from "./CardLoader";
import { CardProduto } from "./CardProduto";
import {
  ButtonLimpar, DivCards, DivContainer, DivInput, DivInputs, H1Inicial,
  Section
} from "./style";
export const Catalogo = () => {

  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams();




  
  useEffect(() => {

    setIsLoading(true)
    api.get("/produtos")
      .then((response) => {
        
      setProdutos(response.data.content)
      console.log(response.data.content)
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

  const produtosFiltrados = produtos?.filter((produto) => produto.nome.toUpperCase().includes(busca.toUpperCase()))


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