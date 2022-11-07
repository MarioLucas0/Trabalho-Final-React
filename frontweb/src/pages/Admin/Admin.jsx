import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pesquisa from "../../assets/img/Pesquisa.svg";
import { ProdutoCrud } from "../../components/ProdutoCrud";
import api from "../../services/api";
import { MenuAdmin } from "./MenuAdmin";
import {
    Button, DivCardCrud, DivInput, DivInputs,
    Main, Section
} from "./style";

export const Admin = () => {
    const [produto,setProduto] = useState([])
    const [busca, setBusca] = useState("");
    
    const produtosFiltrados = produto?.filter((prod) => prod.nome.toUpperCase().includes(busca.toUpperCase()))
    useEffect(() => {
        api.get("/produtos")
          .then((response) => {
          setProduto(response.data.content)
    
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          })
          
      }, []);

     
    return (
    <Section >
    <MenuAdmin />
        <Main>
        <DivInputs>
            <Link to="/admin/produto/cadastro" >
                <Button>ADICIONAR</Button>  
            </Link>
            
                <DivInput>
                    <input type="text" value={busca} placeholder="Nome do produto" onChange={(e) =>setBusca(e.target.value)} />
                    <img src={Pesquisa} alt="" />
                    <button>Limpar Filtro</button> 
                </DivInput>
        </DivInputs>

        <DivCardCrud>
            {produtosFiltrados?.map((produto,index) => (
                <ProdutoCrud produto={produto} key={index} />
            ))}

        </DivCardCrud>

        </Main>
    </Section>
    )
};

