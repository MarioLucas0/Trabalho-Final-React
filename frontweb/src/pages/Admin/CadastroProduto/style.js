import styled from 'styled-components'



export const DivContainer = styled.div`

  width: 80%;
  height: 74rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 5.6rem;
  padding-left: 4.7rem;
  display: flex;
  overflow: hidden;

  @media(max-width: 1300px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 138rem;
    margin-top: 4.1rem;
    padding-left: 0;
  }

 
  

`

export const Section = styled.section`
  
  width: 100%;
  display: flex;
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

export const Main = styled.main`

  width: 100%;
  padding: 1.5rem 0 0 1.5rem;
  display: flex;
  justify-content: center;
  margin-bottom: 37rem;
  
`


export const TextPrincipal = styled.h1`

  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.3rem;
  letter-spacing: -0.015em;
  color: #263238;
  margin-top: 7.5rem;
  margin-bottom: 4.5rem;

  @media(max-width: 1300px) {
    text-align: center;
  }
`

export const DivInputs = styled.div`


  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  input[type="text"] {
    
    width: 45rem;
    height: 5rem;
    border-radius: 15px;
    border: 1px  solid #E1E1E1;
    padding-left: 1rem;
    
  }

  @media(max-width: 900px) {
    width: 80%;
    margin: 0;
  input[type="text"] {
    width: 100%;

  }
  }

  @media(max-width: 750px) {
    width: 80%;
    margin: 0;

  }
`

export const ButtonImg = styled.button`

  width: 21rem;
  height: 3.8rem;
  background: #407BFF;
  border-radius: 10px;
  border: none;
  margin-top: 3.8rem;
  cursor: pointer;

`

export const TextImg = styled.p`

    width: 20rem;
    margin-top:  2rem;
    color: #407BFF;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.015em;

`

export const DivLeft = styled.div`
 
 @media(max-width: 950px ) {
  width: 82%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 }

`

export const  DivDescricao = styled.div`

    width: 47rem;
    height: 44rem;
    border: 1px  solid #E1E1E1;
    border-radius: 15px;
    margin-top: 14.1rem;
    margin-left: 3.2rem;
    padding-inline: 3rem;
   

   textarea {
    padding: 1rem;
    width: 39rem;
    height: 100%;
    border-radius: 15px;
    border: none;
    outline: 0;
    resize: none;
  }

  @media(max-width: 900px) {
    width: 80%;
    margin: 3rem;
    textarea {
      width: 80%;
    }
  }

`













