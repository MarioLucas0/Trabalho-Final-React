import { useState } from "react";
import { toast } from 'react-toastify';
import api from "../../../services/api";
import { MenuAdmin } from "../MenuAdmin";
import {
  ButtonImg, DivContainer, DivDescricao, DivInputs, DivLeft, Main, Section,
  TextImg, TextPrincipal
} from "./style.js";

export const CadastroProduto = () => {
  const [nome,setNome] = useState("")
  const [quantide,setQuantide] = useState("")
  const [valorUnitario,setValorUnitario] = useState("")
  const [categoriaid,setCategoriaid] = useState(0)
  const [imagem,setImagemUrl] = useState("")
  const [descricao,setDescricao] = useState("")

  const insertProduct = () => { 
    api.post("/produtos",{
      "nome": `${nome}`,
      "qtdEstoque": `${quantide}` ,
      "dataCadastro": "2022-10-24T23:13:36.856Z",
      "descricao": descricao,
      "valorUnitario": `${valorUnitario}`,
      "imagemUrl": imagem,
      "categoria": {
        "id": categoriaid
      }
  }).then(res => {
    toast.success("Produto Cadastrado com Sucesso!")
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
              <TextPrincipal>DADOS DO PRODUTO</TextPrincipal>

                <DivInputs>
                <input type="text" value={nome} placeholder="Digite o Nome do Produto" onChange={(e) => setNome(e.target.value)} />
                  <input type="text" value={quantide} placeholder="Quantidade em Estoque" onChange={(e) => setQuantide(e.target.value)} />
                  <input type="text" value={valorUnitario} placeholder="Valor Unitario" onChange={(e) => setValorUnitario(e.target.value)}/>
                  <input type="text" value={categoriaid} placeholder="Numero de referencia da Categoria" onChange={(e) => setCategoriaid(e.target.value)}/>
                  <input type="text" value={imagem} placeholder="Link da imagem" onChange={(e) => setImagemUrl(e.target.value)}/>
                </DivInputs>
            
                <ButtonImg type="submit"  onClick={insertProduct}>Adicionar</ButtonImg>
                <TextImg>As imagens devem ser  JPG ou PNG e não devem ultrapassar 5 mb</TextImg>
            </DivLeft>

            <DivDescricao>
              <textarea   placeholder="Descricao Produto" value={descricao}  onChange={(e) => setDescricao(e.target.value)}/>
            </DivDescricao>
          </DivContainer>
          
      </Main>
    </Section>
  
   
  )
};
