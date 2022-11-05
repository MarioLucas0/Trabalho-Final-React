import styled from "styled-components"

export const Geral =styled.footer`
  width: 100%;
  position: relative;
  bottom: 0;
    
`
export const Pe = styled.div`
    background-color: #407BFF;
`
export const Container = styled.div`
    max-width: 140rem;
    padding:  0 4%;
    margin: auto;
    padding-block: 3rem;
`
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const Col = styled.div`
    width: 25%;
    padding: 0 15px;
`
export const Texto = styled.div`
    font-size: 22px;
    color: white;
    margin-bottom: 20px;
    font-weight: 500px;
    position: relative;
    text-transform: uppercase;
`
export const Li = styled.li`
    margin: 10px 0;
    list-style: none;
    font-size: 1.1rem;
    color: white;
    text-transform: capitalize;
    transition: all 0.3s ease;
    &:hover{
        color: #cecdcd;
        padding-left: 1%;
        cursor: pointer;
    }
`
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    outline: none;
    border: 1px solid white;
    color: white;
    background-color: #407BFF;
    &::placeholder{
        color: #cecdcd;
    }
`

export const Button = styled.button`
    width: 100%;
    margin-top: 0.8rem;
    padding: 0.8rem;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    color: #407BFF;
    text-align: center;
    background-color: white;
    border-radius: 0.5rem;
    border-color: white;
`
export const Icones = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 2rem;


`
export const Icon = styled.p`
    font-size: 1.5rem;
    width: 20%;
    &:hover{
        cursor: pointer;
    }
    svg {
        width: 2.5rem;
        height: 2.5rem;
    }
`