import { useState } from "react";
import { toast } from 'react-toastify';
import api from "../../../../services/api";
import { MenuAdmin } from "../../MenuAdmin";
import { ButtonEnviar, DivContainer, DivDescricao, DivInputs, DivLeft, Main, Section, TextPrincipal } from "./style.js";

export const CadastrarCategoria = () => {
  const [nome,setNome] = useState("")
  const [descricao,setDescricao] = useState("")
  



  const casdatrasCategoria = () => {  
    api.post("/categoria",{
        "nome":  nome,
        "descricao": descricao,
    }).then(res => {
      toast.success("Categoria Cadastrada com Sucesso!")
    }).catch((err) => {
      toast.error("ops! ocorreu um erro")
    })  
  }


  return (

    <Section>
    <div className="menu">
          <MenuAdmin />
        </div>
  <Main>
      <DivContainer>
        <DivLeft>
          <TextPrincipal>DADOS DA CATEGORIA</TextPrincipal>
            <DivInputs>
            <input type="text" value={nome} placeholder="Digite o Nome da Categoria" onChange={(e) => setNome(e.target.value)} />
             
            </DivInputs>
            <ButtonEnviar onClick={casdatrasCategoria}>Enviar</ButtonEnviar>
        </DivLeft>

        <DivDescricao>
          <textarea placeholder="Descricao Categoria"  value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </DivDescricao>
      </DivContainer>
      
  </Main>
</Section>
    )
}