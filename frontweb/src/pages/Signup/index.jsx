import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Input from "../../components/Input";
import { context } from "../../context";
import useAuth from "../../hooks/useAuth.js";
import api from "../../services/api";
import * as C from "./style";
import {
  DivButton, DivCard, DivInput, DivInput2, Inputs
} from "./style";



const Signup = () => {
  
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [nome,setNome] = useState("")
  const [cpf,setCpf] = useState("")
  const [dataNascimento,setDataNascimento] = useState("")
  const [numero,setNumero] = useState("")
  const [complemento,setComplemento] = useState("")
  const [cep,setCep] = useState("")
  const navigate = useNavigate();
  const { signup } = useAuth();
  const ctx = useContext(context)

  const cadastrarCliente = async () => {
    api.post("/clientes",{
      "email": email,
      "nomeCompleto": nome,
      "cpf": cpf,
      "dataNascimento": dataNascimento,
      "endereco": {
      "numero": numero,
      "complemento": complemento,
      "cep": cep
  }
  }).then(res => {
     console.log(res.data?.id)
     ctx.setClientId(res.data?.id) 
     toast.info("Cliente Registrado com sucesso!") 
  }).catch((err) => {
    toast.error("ops! ocorreu um erro")
  })
  }

   const  handleSignup =  () => {
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
   
 
    cadastrarCliente()
    //navigate("/");
  };



  return (
    <DivCard>
    <h1>REGISTRA</h1>
    <Inputs>
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
                     <Input type="text" value={nome} placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} />
                     <Input type="text" value={cpf} placeholder="Digite seu Cpf" onChange={(e) => setCpf(e.target.value)}/>
              <C.labelError>{error}</C.labelError>
            </DivInput>
            <DivInput2>
       
               
                          <Input type="text" value={dataNascimento} placeholder="Digite a data de nascimento (YYYY-MM-DD)" onChange={(e) => setDataNascimento(e.target.value)}/>
                          <Input type="text" value={numero} placeholder="Digite o numero da casa" onChange={(e) => setNumero(e.target.value)}/>

                          <Input type="text" value={complemento} placeholder="Digite o complemento " onChange={(e) => setComplemento(e.target.value)}/>
                          <Input type="text" value={cep} placeholder="digite o cep" onChange={(e) => setCep(e.target.value)}/>
            </DivInput2>
      </Inputs>
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

