import styled from 'styled-components';


export const Section = styled.section`

  width: 100%;
  height: 95.2rem;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

`
export const Main = styled.main`

  
  width: 90%; 
  max-height: 82rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 3.6rem;
  padding: 3rem;
  position: relative;
  margin-bottom: 38rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


`

export const DivContainer = styled.div`

  width: 80%;
  height: 30%;
  border-radius: 15px;
  min-height: 57rem;
  overflow: auto;

 @media(max-width: 900px) {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
 }



`


export const DivContainerCard = styled.div`

 display: flex;
 width: 100%;
 margin-block: 1rem;
 border: 2px solid #E1E1E1;
 box-shadow: 0px 4px 20px rgb(0 0 0 / 15%);
 padding: 1rem;
 border-radius: 15px;

 @media(max-width: 900px) {
  flex-direction: column;
  align-items: center;
 }
  

`
export const DivImg = styled.div`
  width: 10rem;
  margin-right: 2rem;

  img {
    max-width: 12rem;
    height: 15rem;
  }

  @media(max-width: 700px) {
    margin-bottom: 3rem;
  
 }

`

export const DivInfo = styled.div`
  
  border-left: 1px solid #9E9E9E;
  padding-left: 1rem;

  span {
    font-size: 1.5rem;
    font-weight: 700;
  }

  h1 {
   margin: 0.4rem 0 1rem 0;
   color: #9E9E9E;
  }
  p {
    color: #9E9E9E;
    font-size: 1.4rem;
    margin-top: 0.7rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  @media(max-width: 700px) {
    width: 100%;
   border-left: none;
  
}



`
export const TextoPrincipal = styled.h1`

    font-size: 2rem;
    padding-top: 2rem;


`
export const TextoSecundario = styled.h2`

    padding-bottom: 4rem;
    font-size: 4rem;
    border-bottom: 1px solid black;
    padding-top: 1rem;

`

export const ButtonFazerPedido = styled.button`

  width: 21rem;
  height: 3.8rem;
  background: #407BFF;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  cursor: pointer;

`

export const ButtonLimpar = styled.button`
    
  width: 21rem;
  height: 3.8rem;
  background: #9E9E9E;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  cursor: pointer;
`

export const DivButtons = styled.div`

  display: flex;
  padding-bottom: 1rem;
  justify-content: flex-end;
  gap: 3rem;
  p {
    border-radius: 15px;
    border: 1px solid black;
    font-size: 1.5rem;
    padding: 1rem;

  }


`
export const DivIconFechar = styled.div`

  img {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  }
`

export const DivInfos = styled.div`

  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
 
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 1rem;
    font-size: 2rem;
    font-weight: 700;
    background-color: #407BFF;
    color: white;
    margin-left: 1rem;
  }

  @media(max-width: 900px) {
  
   border: 1px solid  #E1E1E1;
   padding: 1rem;
}

`




















