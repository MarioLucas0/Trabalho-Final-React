import styled from 'styled-components'


export const Section = styled.section`

  width: 100%;
  height: 80rem;
  display: flex;
  justify-content: center;

`

export const Main = styled.main`

  width: 136rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 5.6rem;

  display: flex;
  justify-content: space-between;


`


export const DivContainer = styled.div`

  width: 24.7rem;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 10px;
  margin: 9.7rem 0px 0px 6rem;

  button {
    background: #FFFFFF;
    display: flex;
    align-items: center;
    width: 10rem;
    border: none;
    margin-top: -4rem;
    margin-bottom: 2rem;
  }
  span{

  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.3rem;
  letter-spacing: -0.015em;
  color: #263238;
  margin-left: 1.5rem;

  }
  

`

export const DivImg = styled.div`

  width: 58.6rem;
  height: 39.7rem;
  padding:1.8rem  4.9rem  0.7rem 3.9rem;
  border: 1px solid #E1E1E1;

  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 65%;
  }

`


export const DivInfo = styled.div`

  width: 59.6rem;
  padding: 1.4rem 1.9rem 3.2rem 2.1rem;


`

export const H2NomeProduto = styled.h2`

  font-weight: 700;
  font-size: 3.6rem;
  line-height: 4.9rem;
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
export const Descricao = styled.div`

  width: 58.6rem;
  height: 59.7rem;
  border: 1px solid #E1E1E1;
  margin: 9.7rem 6rem 9rem 6.7rem;
  border-radius: 15px;

  p {
    padding: 3.8rem 3.4rem 3.4rem 2.9rem;
  }

`
