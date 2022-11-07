import styled from 'styled-components'

export const Section = styled.section`
  
  width: 100%;
  display: flex;
  overflow: hidden;

  @media(max-width: 1300px) {
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

export const Main = styled.div`
  width: 60%;
  padding: 1.5rem ;
  grid-gap: 1rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 5.8rem 0;
  margin-bottom: 31rem;
  overflow: hidden;

  @media(max-width: 1300px){
    width: 80%;
    margin-inline: 11rem;
  }
  @media(max-width: 900px){
    margin-inline: 8rem;
  }
  @media(max-width: 450px){
    margin-inline: 3rem;
  }

  
`

export const DivContainer = styled.div`

    grid-gap: 3rem 1rem;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,10rem);

    @media(max-width: 900px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
      margin-inline: 8rem;

      
    }

`
export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  
`

export const DivNome = styled.div`

  display: flex;
  height: 3rem;
  align-items: center;

  p {
    font-size: 1.8rem;
    font-weight: 700;
   
  }
  img  {
    height: 2.5rem;
    margin-right: 1rem;
  }

`

export const DivId = styled.div`

  display: flex;
  height: 2.7rem;
  align-items: center;
  p {
    font-size: 1.8rem;
    font-weight: 700;
   
  }
  img  {
    height: 2.5rem;
    margin-right: 1rem;
  }


`

export const DivDescricao = styled.div`

  display: flex;
  height: 2.5rem;
  align-items: center;
  p {
    font-size: 1.8rem;
    font-weight: 700;
   
  }
  img  {
    height: 2.5rem;
    margin-right: 1rem;
  }


`
export const DivRemove = styled.div`

  display: flex;
  cursor: pointer;

  img  {
    height: 2.5rem;
    margin-right: 1rem;
  }


`
export const DivCrud = styled.div`

 display: flex;
 flex-direction: column;
 justify-content: space-around;

`

export const DivInfoContainer = styled.div`


  border: 1px solid #E1E1E1;
  width: 35rem;
  height: 10rem;
  background: #EDEDED;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 5.6rem;
  padding-left: 1.7rem;
  display: flex;
  justify-content: space-between;


  @media(max-width: 900px) {
    margin-top: 0;
  }

  @media(max-width: 450px) {
    width: 27rem;
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
export const ButtonAdicionarCategoria = styled.button`
  width: 17rem;
  height: 6rem;
  background: #407BFF;
  border-radius: 10px;
  margin-right: 2.6rem;
  border: none;
  cursor: pointer;
  color: rgba(255,255,255,0.5);
  font-weight: 700;
  font-size: 2rem;
  margin: 1.5rem 1.5rem  0 1.5rem  ;
  `
export const DivButton = styled.div`
 display: flex;
 justify-content: center;
`







