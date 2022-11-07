import React, { useState, useRef, useEffect, useContext } from "react"
import AuthContext from "../../context/AuthProviderLogin/AuthProvider"
import { Link } from "react-router-dom"
import {Geral, Card, Titulo,  Input,  Button, Recuperacao, Label} from "./style"


import api from "../../services/api"
import axios from "axios"
const LOGIN_URL = '/auth'

export const Login = () =>{
    const {setAuth} = useContext(AuthContext)
    const userReff = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const[errMsg, setErrMsg] = useState('')
    const [sucess, setSucess] = useState(false)

    useEffect(()=>{
        userReff.current.focus()
    },[])

    useEffect(()=>{
        setErrMsg('')
    },[user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const response = await axios.post(LOGIN_URL,
                 JSON.stringify({user, pwd}),
                {
                    headers : {'Content-Type' : 'application/json'},
                    withCredentials : true
                }
            )
            console.log(JSON.stringify(response?.data))
            const acessToken = response?.data?.acessToken
            const roles = response?.data?.roles
            setAuth({user, pwd, roles, acessToken})
            setUser('')
            setPwd('')
            setSucess(true)
        }catch(err){
            if(!err?.response) {
                setErrMsg('Impossivel conectar com o servidor')
            } else if (err.response?.status === 400){
                setErrMsg('Email ou senha inválidos')
            } else if (err.response?.status === 401){
                setErrMsg('Sem autorização')
            } else if (err.response?.status === 404){
                setErrMsg('Oops não encontrado')
            } else {
                setErrMsg('Falha ao realizar o Login')
            }
            errRef.current.focus()
        }
    }

    return(
        <>
            {sucess ? (
            <section>
                <h1>Você está logado!</h1>
                <br /> 
                <p>
                    <Link to ="/home">Vá para a home</Link>
                </p>
            </section>
            ) : (
            <section>
                <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <Geral>
                    <div>
                        <Card>
                            <Titulo>
                                <h1>LOGIN</h1>
                            </Titulo>
                            <form onSubmit={handleSubmit}>
                                <Label htmlFor="email">E-mail:</Label>
                                <Input type="email" 
                                ref={userReff}
                                onChange={(e)=> setUser(e.target.value)}
                                value={user}
                                required
                                />

                                <Label htmlFor="password">Senha</Label>
                                <Input type="password" 
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                />
                    
                                <div>
                                    <Recuperacao>Esqueceu sua senha?</Recuperacao>
                                </div>
                                <div>
                                    <Button>LOGIN</Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </Geral>
            </section>
            )}
        </>
    )
}