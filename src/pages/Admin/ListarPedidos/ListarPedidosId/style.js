import styled from 'styled-components'


export const Section = styled.section`

  width: 100%;
  display: flex;
  align-items: center;
  @media(max-width: 1200px) {
    flex-direction: column;
    .menu {
    width: 100%;
    height: 12rem;
   
    aside {
      width: 100%;
      height: 12rem;
      min-height: 0;
      main{
        height: 100%;
        ul{
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          li{
            width: 27rem;
             height: 5rem;
             background: #F2F2F2;
             border-radius: 100px;
             &:hover {
              background: rgba(64, 123, 255, 0.3);
              color: #407BFF;
            }
           
             a{
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0;
              margin: 0;
              &:hover {
                color: #407BFF;
            }
             
             }
          }
        }
      }
    }
  }
  }
  @media(max-width: 990px) {
    flex-direction: column;
    .menu {
      aside {
        main{
          ul{
            li{
              width:20rem;
              height: 4.5rem; 
          }
        }
      }
    }
  }
  }
  @media(max-width: 660px) {
    flex-direction: column;
    .menu {
      aside {
        main{
          ul{
            li{
              width: 11rem;
              height: 4.5rem;
              
          }
        }
      }
    }
  }
  }
  li {

  }
 
 

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
    
    @media(max-width: 1000px) {
    width: 100%;

  }

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

  
  @media (max-width: 800px) {
    width: 46rem;
  }
  @media (max-width: 800px) {
    width: 37rem;
  }
  @media (max-width: 450px) {
    width: 32rem; 
  }
    

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

  @media (max-width: 800px) {
    width: 21rem;

    input {
      width: 17rem;
    }
  }

  @media (max-width: 450px) {
  
    input {
      width: 12rem;
    }
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

    @media (max-width: 650px) {
      width: 10rem;
  }
  @media (max-width: 450px) {
      width: 80rem;
  }
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
















