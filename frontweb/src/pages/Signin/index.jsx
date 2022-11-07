import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgLogin from "../../assets/img/login.svg";
import Seta from "../../assets/img/Seta.svg";
import Input from "../../components/Input";
import useAuth from "../../hooks/useAuth.js";
import * as C from "./style";
import {
  DivButton, DivCard, DivContainer, DivImg, DivInput, DivLeft, DivRight, Section
} from "./style";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
  
   
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
                  <Input
                type="email"
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
              />
              <Input
                type="password"
                placeholder="Digite sua Senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
              />
              <C.labelError>{error}</C.labelError>
            </DivInput>
            <p className="textmeio">Esqueci a senha?</p>
            <DivButton Text="Entrar" onClick={handleLogin} >
              <p>Logar</p>
              
              <div>
                <img src={Seta} alt="" />
              </div>
             </DivButton> 
             <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
        </DivCard>
      </DivRight>
    </DivContainer>
  </Section>

    
  );
};

export default Signin;

