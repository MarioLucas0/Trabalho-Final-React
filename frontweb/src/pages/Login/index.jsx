import { Link } from "react-router-dom"
import imgLogin from "../../assets/img/login.svg"
import Seta from "../../assets/img/Seta.svg"
import {
  DivButton, DivCard, DivContainer, DivImg, DivInput, DivLeft, DivRight, Section
} from "./style"


export const Login = () =>{

  
  return(
      <Section>
        <DivContainer>
          <DivLeft>
              <h1>Divulgue seus produtos no DS Catalog</h1>
              <p>Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos.</p>
              <DivImg>
                <img src={imgLogin} alt="" />
              </DivImg>
          </DivLeft>
          <DivRight>
            <DivCard>
                <h1>LOGIN</h1>

                <DivInput>
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Senha" />
                </DivInput>
                <p className="textmeio">Esqueci a senha?</p>

                <DivButton>
                  <p>Logar</p>
                  
                  <div>
                    <img src={Seta} alt="" />
                  </div>
                 </DivButton> 
               <sppan className="textfinal">Não tem Cadastro?<Link>CADASTRAR</Link></sppan> 
            </DivCard>
          </DivRight>
        </DivContainer>
      </Section>

    )
}