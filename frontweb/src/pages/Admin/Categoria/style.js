import styled from 'styled-components'

export const Section = styled.section`
  
  width: 100%;

  display: flex;
`

export const Main = styled.div`

  width: 80%;
  padding: 1.5rem 0 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 5.8rem auto;
  height: 79rem;
  margin-bottom: 37rem;

  
`

export const DivContainer = styled.div`

display: flex;
justify-content: center;

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







