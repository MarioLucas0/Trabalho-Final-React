import React, { useState } from "react"
import {Geral, Card, Titulo, Email, Input, Senha, Button, Recuperacao} from "./style"

export const Login = () =>{
    return(
        <>
        <Geral>
            <div>
                <Card>
                    <Titulo>
                        <h1>LOGIN</h1>
                    </Titulo>
                    <Email>
                        <Input type="email" placeholder="Email"/>
                    </Email>
    
                    <Senha>
                        <Input type="password" placeholder="Senha"/>
                    </Senha>
                    <div>
                        <Recuperacao>Esqueceu sua senha?</Recuperacao>
                    </div>
                    <div>
                        <Button>LOGIN</Button>
                    </div>
                
                </Card>
            </div>
        </Geral>
        </>
    )
}