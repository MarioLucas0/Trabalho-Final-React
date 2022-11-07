import styled from 'styled-components'

export const Section = styled.section`
  
  width: 100%;
  height: 100%;
  min-height: 120rem;
  display: flex;
  @media (max-width: 1650px) {
    width: 110%;
  }
  
 
`

export const H1Inicial = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.3rem;
  letter-spacing: -0.015em;
  color: #263238;
  margin-bottom: 2.3rem;
  margin-top: 3.2rem;
`

export const DivInputs = styled.div`

  width: 65rem;
  height: 5.5rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

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


export const DivContainer = styled.div`

  width: 119rem;
  height: 100%;
  display: flex;
  margin-inline: 18rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 30rem;

  
  @media (max-width: 2568px) {
    width: 80%;
  }
  @media (max-width: 1650px) {
   margin-inline: 8.8rem;
 
  }
  @media (max-width: 1250px) {
   margin-inline: 5.8rem;
  }
 

`
export const DivCards = styled.main`
   width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3.5rem;

  @media (max-width: 2568px) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media (max-width: 2100px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 1800px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1650px) {
   grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 2fr);
    gap: 3rem 0;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 2fr);
    gap: 3rem 0;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 80%);
    gap: 3rem 0;
  }

`

