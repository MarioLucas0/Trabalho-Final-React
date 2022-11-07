import { useState } from "react";
import Pesquisa from "../../../../assets/img/Pesquisa.svg";
import api from "../../../../services/api";
import { MenuAdmin } from "../../MenuAdmin/index";
import {
  ButtonLimpar, DivClient, DivContainer, DivInfoPedido, DivInfos, DivInput,
  DivInputs, DivItemsPedido, Main, Section
} from "./style";

export const ListarPedidosId = () => {
  const [pedidoId,setPedidoId] = useState("")
  const [pedidoFiltrado,setPedidoFiltrado] = useState([])
  

  const limpar = () => {
    if(busca != "") {
      setPedidoId("")
    }
  }

  const busca = (id) => { 
    api.get(`/pedido/${id}`).then((res) => {
      setPedidoFiltrado(res) 
  })
  }

    return (
      <Section>
        <MenuAdmin />
      <Main>
        <DivInputs>  
            <DivInput>
                <input type="text" placeholder="Nome do produto" value={pedidoId}  onChange={(e) => setPedidoId(e.target.value)}/>
                <img src={Pesquisa} alt="" onClick={() => busca(pedidoId)}/>
              </DivInput>
                <ButtonLimpar onClick={limpar}>Limpar Filtro</ButtonLimpar> 
            </DivInputs>
          <DivContainer>
          <DivInfos> 
                  <DivClient>
                        <h2>DADOS CLIENTE</h2>
                        <span>CPF: {pedidoFiltrado.data?.client.cpf}</span>  
                        <span>EMAIL: {pedidoFiltrado.data?.client.email}</span>
                        <span>NOME: {pedidoFiltrado.data?.client.nome} </span> 
                        <p></p> 
                      </DivClient>

                      <DivInfoPedido>
                      <h2>DADOS PEDIDO</h2>
                      <span>DATA DE ENTREGA: {pedidoFiltrado.data?.dataEntrega}</span> 
                    <span>DATA DE ENVIO: {pedidoFiltrado.data?.dataEnvio}</span>
                      <span>DATA DO PEDIDO: {pedidoFiltrado.data?.dataPedido} </span> 
                      <p></p>
                      </DivInfoPedido>  
                    
                    <DivItemsPedido>
                      <h2>ITEMS PEDIDO</h2>
                      {pedidoFiltrado.data?.items.map((items,index) => (
                        <div className="items" key={index}>
                          <span>NOME DO PRODUTO: {items.name}</span> 
                          <span>PRECO DE VENDA: {items.precoVenda}</span>
                          <span className="itemsQuantidade">QUANTIDADE: {items.quantidade} </span>
                        </div>
                      ))}
                      </DivItemsPedido>    
              </DivInfos> 
        </DivContainer>
      </Main> 
  
    </Section>

    )
};

