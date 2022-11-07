import styled from 'styled-components'


export const Section = styled.section`

 
  display: flex;
  justify-content: center;
  justify-content: space-between;
 

`


export const DivContainer = styled.div`

  
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  overflow: hidden;
  width: 86%;
  margin-top: 4.7rem;
  padding-bottom: 3rem;
  padding: 4rem;

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
  margin-left: 2rem;
  display: flex;
  justify-content: center;

  a {
    font-size: 3rem;
    font-weight: 700;
    color: rgba(255,255,255,0.5);
  }
 


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

    width: 100%;
    margin-bottom: 38rem;
    display: flex;
    justify-content: center;

`

export const DivInfos = styled.div`

  width: 100%;
  margin-inline: 2rem;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 2rem;
  margin-bottom: 5rem;


`
export const DivInfo = styled.div`

    height: 40rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    overflow: auto;
    background: #EDEDED;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 25%);
    border-radius: 20px;
    border: 1px solid #E1E1E1;

    span {
      font-size: 1.4rem;

    }
    p{
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      padding-bottom: 0.5rem;
    }

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












