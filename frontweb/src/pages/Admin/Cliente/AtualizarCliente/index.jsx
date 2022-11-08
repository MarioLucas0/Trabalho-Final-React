import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import Input from "../../../../components/Input";
import api from "../../../../services/api";
import * as C from "./style";
import {
  DivButton, DivCard, DivInput2, Inputs
} from "./style";



export const EditarCliente = () => {
  const [nome,setNome] = useState("")
  const [cpf,setCpf] = useState("")
  const [dataNascimento,setDataNascimento] = useState("")
  const [numero,setNumero] = useState("")
  const [complemento,setComplemento] = useState("")
  const [cep,setCep] = useState("")
  const [email, setEmail] = useState("");


  const {id} = useParams()

  const editarCliente = () => {
    api.put(`/clientes/${id}`,{
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
  }).catch((err) => {
    toast.error("ops! ocorreu um erro")
  })
  }


  return (
    <DivCard>
    <h1>Editar</h1>
    <Inputs>
       
            <DivInput2>
              
            <Input type="text" value={nome} placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} />
            <Input type="text" value={email} placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
                     <Input type="text" value={cpf} placeholder="Digite seu Cpf" onChange={(e) => setCpf(e.target.value)}/>
       
                          <Input type="text" value={dataNascimento} placeholder="Digite a data de nascimento" onChange={(e) => setDataNascimento(e.target.value)}/>
                          <Input type="text" value={numero} placeholder="Digite o numero da casa" onChange={(e) => setNumero(e.target.value)}/>

                          <Input type="text" value={complemento} placeholder="Digite o complemento " onChange={(e) => setComplemento(e.target.value)}/>
                          <Input type="text" value={cep} placeholder="digite o cep" onChange={(e) => setCep(e.target.value)}/>
            </DivInput2>
      </Inputs>
      
    <DivButton Text="Entrar" onClick={editarCliente} >
      <p>Salvar</p>
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



