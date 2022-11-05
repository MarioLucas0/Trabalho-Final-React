import styled from 'styled-components'

export const DivContainer = styled.div`

  width: 24.7rem;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  &:last-child { 
   margin-bottom: 15rem;
  }

`
export const IconCompra= styled.div`

  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
 

  img {
    width: 5rem;
    margin-left: 5rem;
    margin-right: 2rem;
  }

  input[type="text"] {
    width: 7rem;
    height: 3rem;
    font-weight: 700;
    font-size: 2rem;
  }

 
`



export const DivImg = styled.div`

  width: 100%;
  padding:1.8rem  4.9rem  0.7rem 3.9rem;
  border: 1px solid #E1E1E1;
  display: flex;
  justify-content: center;


  img {
    max-width: 15.8rem;
    height: 15.8rem;
    border-radius: 10px;
  }

`


export const DivInfo = styled.div`

  width: 100%;
  padding: 1.4rem 1.9rem 0 2.1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

export const H2NomeProduto = styled.h2`

  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.5rem;
  letter-spacing: -0.015em;
  color: #263238;
  margin-bottom: 0.8rem;

`

export const DivPreco = styled.div`

  display: flex;
  height: 3.5rem;
  align-items: center;
  

  p {

  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.5rem;
  letter-spacing: -0.015em;
  color: #9E9E9E;
  margin-right: 1rem;
  }
  span {

  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4.4rem;
  letter-spacing: -0.015em;
  color: #407BFF;

  }

`
