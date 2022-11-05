import styled from "styled-components"

export const Geral = styled.div`
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;

    background-color: white;
    
`
export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 20vw;
    flex-direction: column;
    padding: 5vw;

    background-color: white;
    border-radius: 5px;
    
    box-shadow: 3px 1px 20px 1px  #191A19;
`
export const Titulo = styled.div`
    display: flex;
    align-items: center;
    height: 20vh;
    
    padding: 0%;
    font-style: normal;
    font-weight: 400;
    line-height: 65px;
    text-align: center;
    letter-spacing: -0.015em;
    

    color: #263238;
`
export const Email = styled.div`
    width: 170%;
    height: 10vh;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: white;
`
export const Senha = styled.div`
    width: 170%;
    height: 10vh;

    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: white;
`
export const Recuperacao = styled.p`

    /* font-family: 'Open Sans'; */
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 25px;
    letter-spacing: -0.015em;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }

color: #407BFF;

mix-blend-mode: normal;
`
export const Button = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    width: 15vw;

    font-size: 120%;
    color: white;
    background-color:#407BFF ;
    border-radius: 5px;
    cursor: pointer;
`

export const Input = styled.input`
    height: 5vh;
    width: 100%;
    border-radius: 1px;

    &:hover{
        transition: all 0.3 ease;
        background-color: #E1E1E1;
    }
`
