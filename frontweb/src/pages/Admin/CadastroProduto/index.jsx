
import { MenuAdmin } from "../MenuAdmin";
import {
  ButtonImg, DivContainer, DivDescricao, DivInputs, DivLeft, Main, Section,
  TextImg, TextPrincipal
} from "./style.js";

export const CadastroProduto = () => {

  return (
    <Section>
       <MenuAdmin />
      <Main>
          <DivContainer>
            <DivLeft>
              <TextPrincipal>DADOS DO PRODUTO</TextPrincipal>

                <DivInputs>
                  <input type="text" placeholder="Digite o Nome do Produto" />
                  <input type="text" placeholder="Quantidade em Estoque" />
                  <input type="text" placeholder="Valor Unitario"/>
                  <input type="text" placeholder="Numero de referencia da Categoria"/>
                </DivInputs>
                <ButtonImg>ADICIONAR IMAGEM</ButtonImg>
                <TextImg>As imagens devem ser  JPG ou PNG e não devem ultrapassar 5 mb</TextImg>
            </DivLeft>

            <DivDescricao>
              <textarea placeholder="Descricao Produto" />
            </DivDescricao>
          </DivContainer>
          
      </Main>
    </Section>
  
   
  )
};