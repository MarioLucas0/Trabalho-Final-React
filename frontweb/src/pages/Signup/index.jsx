import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import useAuth from "../../hooks/useAuth.js";
import * as C from "./style";
import {
  DivButton, DivCard, DivInput
} from "./style";



const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <DivCard>
    <h1>REGISTRA</h1>
    <DivInput>

        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
      <C.labelError>{error}</C.labelError>
    </DivInput>
    <DivButton Text="Entrar" onClick={handleSignup} >
      <p>Inscrever-se</p>
     </DivButton> 
     <C.LabelSignup>
     Já tem uma conta?
  <C.Strong>
    <Link to="/">&nbsp;Entre</Link>
  </C.Strong>
</C.LabelSignup>
</DivCard>
  );
};

export default Signup;

