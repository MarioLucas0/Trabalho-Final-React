import styled from 'styled-components'


export const Section = styled.section`

  width: 100%;
  display: flex;
  align-items: center;
 

`


export const DivContainer = styled.div`

  width: 70%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 5rem;
  margin-bottom: 38rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 44rem;
  overflow: auto;

  h2 {
    font-size: 3rem;
  }

  span {
    font-size: 2rem;
  }

`


export const DivButton = styled.div`

  display: flex;
  background: #407BFF;
  align-items: center;
  justify-content: space-between;
  width: 45rem;
  height: 6rem;
  border-radius: 10px;
  cursor: pointer;


  P{
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.015em;
    color: #FFFFFF;
    padding-left: 3rem; 
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 100%;
    background: rgba(38, 50, 56, 0.5);
    border-radius: 10px;

  }

`

export const Main = styled.main`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
export const DivInputs = styled.div`

  width: 65rem;
  height: 5.5rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-top: 3rem;

`


export const DivInput = styled.div`

  width: 39rem;
  border-bottom: 1px solid #E1E1E1;
  display: flex;
  justify-content: space-between;
  margin-left: 1.2rem;

  input[type="text"]
   {
    
    width: 29rem;
    height: 2.8rem;
    border: none;
    outline: 0;
    

  }
  img {
    cursor: pointer;
  }


`

export const ButtonLimpar = styled.button`

    width: 20rem;
    height: 3.5rem;
    border-radius: 10px;
    margin-left: 1.7rem;
    background: #FFFFFF;
    border: 1px solid #E1E1E1;
    cursor: pointer;
    margin-block: 1rem;

`


export const DivInfos = styled.div`

  margin-inline: 3rem;
  display: grid;
  gap: 2rem;
  margin-bottom: 5rem;
  padding-block: 2rem;



`


export const DivClient = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
   
    span {
      font-size: 1.4rem;
    
    }

`
export const DivInfoPedido = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  h2{
    margin-top: 1rem;
  }

  

`

export const DivButtons = styled.div`

  display: flex;
  padding-bottom: 1rem;

  gap: 3rem;
  padding-bottom: 1rem;
  p {
    border-radius: 15px;
    border: 1px solid black;
    font-size: 1.5rem;
    padding: 1rem;

  }


`

export const DivItemsPedido = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  h2{
    margin-top: 1rem;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .itemsQuantidade {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    padding-bottom: 0.7rem;
  }
  

`
















