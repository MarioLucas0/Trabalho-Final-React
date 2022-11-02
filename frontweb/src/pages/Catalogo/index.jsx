import { Link, useParams } from "react-router-dom";
import Pesquisa from "../../assets/img/Pesquisa.svg";
import { CardProduto } from "../../components/CardProduto";
import {
  DivContainer, DivInput, DivInputs, H1Inicial,
  Section
} from "./style";
export const Catalogo = () => {

  const { id } = useParams(1)

  return (
      <Section>

        <DivContainer>

          <H1Inicial>Catálogo de produtos</H1Inicial>
          <DivInputs>
            <DivInput>
            <input type="text" placeholder="Nome do produto"/>
            <img src={Pesquisa} alt="" />
            </DivInput>
            <button>Limpar Filtro</button> 
          </DivInputs>
          <Link to={`/catalogo/${id}`}> 
            <CardProduto />
          </Link>
        </DivContainer>
      </Section>
  )
}