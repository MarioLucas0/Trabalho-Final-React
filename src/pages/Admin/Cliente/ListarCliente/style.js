import styled from 'styled-components'


export const Section = styled.section`

 
  display: flex;
  justify-content: center;
  justify-content: space-between;

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
export const DivRemove = styled.div`

  display: flex;
  justify-content: end;
  cursor: pointer;

  img  {
    height: 2.5rem;
    margin-right: 1rem;
  }


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

  @media(max-width: 950px) {
    width: 90%;
   
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

  @media(max-width: 950px) {
   
    display: flex;
    flex-direction: column;
  }


`

export const DivEditar = styled.div`

  display: flex;
  cursor: pointer;

  img  {
    height: 2.5rem;
    margin-right: 1rem;
  }


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

    .btns {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
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












