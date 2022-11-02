import { Link } from "react-router-dom";
import Pesquisa from "../../assets/img/Pesquisa.svg";
import teste from "../../assets/img/teste.svg";
import { MenuAdmin } from "../../components/MenuAdmin";
import {
    Button, ButtonEditar, ButtonExcluir, Categoria, DivButtons, DivContainer, DivImg, DivInfo,
    DivInput, DivInputs, DivPreco, H2NomeProduto, Main, Section
} from "./style";

export const Admin = () => {
    
  

    return (
    <Section >
    <MenuAdmin />
        <Main>
        <DivInputs>
            <Link to="/admin/produto/cadastro" >
                <Button>ADICIONAR</Button>  
            </Link>
            
                <DivInput>
                    <input type="text" placeholder="Nome do produto"/>
                    <img src={Pesquisa} alt="" />
                    <button>Limpar Filtro</button> 
                </DivInput>
        </DivInputs>


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
                <Categoria>Categoria</Categoria>
            </DivInfo>

            <DivButtons>
                <ButtonEditar>EDITAR</ButtonEditar>
                <ButtonExcluir>EXCLUIR</ButtonExcluir>
            </DivButtons>

        </DivContainer>

        </Main>
    </Section>
    )
};

