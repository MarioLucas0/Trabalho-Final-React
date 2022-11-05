import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { Button, Col, Container, Geral, Icon, Icones, Input, Li, Pe, Row, Texto } from "./style"

export const Footer =()=>{

    const Navegacao = useNavigate()
   
    return(
        <Geral>
        <Pe>
            <Container>
                <Row>
                    <Col>
                        <Texto>Serracommerce</Texto>
                        <ul>
                            <Li onClick={()=>{Navegacao("/")}}>Home</Li>
                            <Li onClick={()=>{Navegacao("/quemsomos")}}>Sobre</Li>
                            <Li onClick={()=>{Navegacao("/catalogo")}}>Catálogo</Li>
                        </ul>
                    </Col>
                    <Col>
                        <Texto>Obter Ajuda</Texto>
                        <ul>
                            <Li>FAQ</Li>
                            <Li>transportes</Li>
                            <Li>devoluções</Li>
                            <Li>Opções de pagamento</Li>
                        </ul>
                        </Col>
                        <div>
                            <Texto>Quer receber atualizações?</Texto>
                            <div>
                                <form>
                                    <Input type="email" placeholder="Digite seu email aqui" required/>
                                    <Button>Inscrever</Button>
                                </form>
                            </div>
                            
                        </div>
                        <Icones>
                                <Icon><FaFacebook/></Icon>
                                <Icon><FaInstagram/></Icon>
                                <Icon><FaTwitter/></Icon>
                                <Icon><FaLinkedin/></Icon>
                        </Icones>
                    </Row>
                
                </Container>
            </Pe>
        </Geral>
    )
}