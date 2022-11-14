
import styled from 'styled-components'


export const Section = styled.section`
  
  width: 100%;
  height: 100%;
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
`

export const Button = styled.button`
  width: 17rem;
  height: 6rem;
  background: #407BFF;
  border-radius: 10px;
  margin-right: 2.6rem;
  border: none;
  cursor: pointer;
  
  @media(max-width: 1100px){
    width: 11rem;
    height: 6rem;
    margin-bottom: 2rem;
  }
  
`

export const DivInputs = styled.div`

  width: 100%;
  display: flex;
  @media(max-width: 1100px){

    flex-direction: column;
}




  

`

export const DivInput = styled.div`

  width: 65rem;
  height: 6rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  

  input[type="text"] {
    
  width: 29rem;
  height: 2.8rem;
  border: none;
  outline: 0;
  margin-left: 1.2rem;
  margin-right: 5.5rem;
  border-bottom: 1px solid #E1E1E1;
  

  }
  button { 

  width: 19.7rem;
  height: 3.8rem;
  border-radius: 10px;
  margin-left: 3.7rem;
  background: #FFFFFF;
  border: 1px solid #E1E1E1;
  cursor: pointer;
 }

 @media(max-width: 1100px){

  width: 78%;
  button {
    
    margin-right:1rem;
   }

 }
  @media(max-width: 550px){
    width: 66%;
  button {
    display: none;
  }
  img {
    display: none;
  }

  }





`
export const DivCardCrud = styled.div`

 display: flex;
 flex-direction: column;
 gap: 3rem;
 margin-bottom: 37rem;

 @media(max-width: 2800px) {
  display: grid;
  grid-template-columns: repeat(2,1fr);
 }
 @media(max-width: 1850px) {
 display: flex;
 margin-left: 6rem;
}

@media(max-width: 850px) {
 display: flex;
  margin-left: 0;
  align-items: center;
}
@media(max-width: 600px) {
  margin-left: 5rem;
}
@media(max-width: 450px) {
  margin-left: 0;
}


 
`




