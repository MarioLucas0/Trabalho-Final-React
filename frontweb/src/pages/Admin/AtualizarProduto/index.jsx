
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import { MenuAdmin } from "../MenuAdmin";
import { ButtonEnviar, DivContainer, DivDescricao, DivInputs, DivLeft, Main, Section, TextPrincipal } from "./style.js";

export const AtualizarProduto = () => {
  const {id} = useParams()
  const [nome,setNome] = useState("")
  const [quantide,setQuantide] = useState("")
  const [valorUnitario,setValorUnitario] = useState("")
  const [categoriaid,setCategoriaid] = useState(0)
  const [imagemUrl,setImagemUrl] = useState("")


/*   const schema = yup.object({

      nome: yup.string(),
      valorunitario: yup.string(),
      quantidadeEstoque: yup.string(),
      categoria:  yup.number().required("Informe o id da categoria")
  
    
  }).required();
 */
/*   useForm({
    resolver: yupResolver(schema)
  })
 */
  useEffect(() => {
    api.get(`/produtos/${id}`).then(res => {
      setCategoriaid(res.data.categoria.id)
    
  }) 
  },[])
  

  const editarProduto = () => { 
    
    api.put(`/produtos/${id}`,{
        "nome": `${nome}`,
        "qtdEstoque": `${quantide}` ,
        "dataCadastro": "2022-10-24T23:13:36.856Z",
        "valorUnitario": `${valorUnitario}`,
        "imagemUrl" : imagemUrl,
        "categoria": {
          "id": categoriaid
        }
    }).then(res => {
            console.log(res)
      
    }) 
  }


  return (
    <Section>
       <MenuAdmin />
      <Main>
          <DivContainer>
            <DivLeft>
              <TextPrincipal>DADOS DO PRODUTO</TextPrincipal>

                <DivInputs>
                  <input type="text" value={nome} placeholder="Digite o Nome do Produto" onChange={(e) => setNome(e.target.value)} />
                  <input type="text" value={quantide} placeholder="Quantidade em Estoque" onChange={(e) => setQuantide(e.target.value)} />
                  <input type="text" value={valorUnitario} placeholder="Valor Unitario" onChange={(e) => setValorUnitario(e.target.value)}/>
                  <input type="text" value={imagemUrl} placeholder="Link da Imagem" onChange={(e) => setImagemUrl(e.target.value)}/>
                </DivInputs>
                <ButtonEnviar onClick={editarProduto}>Enviar</ButtonEnviar>
            </DivLeft>

            <DivDescricao>
              <textarea placeholder="Descricao Produto" />
            </DivDescricao>
          </DivContainer>
          
      </Main>
    </Section>
  
   
  )
};