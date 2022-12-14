import styled from 'styled-components'


export const Section = styled.section`

  width: 100%;
  display: flex;
  justify-content: center;
 

`


export const DivContainer = styled.div`

  width: 99%;
  height: 48rem;
  margin-top: 8.7rem;
  margin-bottom: 18rem;
  margin-inline: 8rem;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1300px) {
    height: 100%;
    width: 100%;
    margin: 0;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
      
  }

`

export const DivText = styled.div`

  display: flex;
  flex-direction: column;
  width: 56rem;
  height: 100%;
  @media (max-width: 1300px) {
    margin-bottom: 10rem;
  
    
  }

  @media (max-width: 770px) {
  align-items: center;
      text-align: center;
  }

`

export const DivImg = styled.div`
 margin-left: 0.2rem;
`
export const TextoPrincipal = styled.h2`

      font-weight: 700;
      font-size: 5.5rem;
      line-height: 7.5rem;
      letter-spacing: -0.015em;
      color: #263238;

  @media (max-width: 770px) {   
      font-size:  4.5rem;
  }
  @media (max-width: 620px) {  
    font-size: 3.5rem;
    width: 70%;
    line-height: 5rem;
  }
  @media (max-width: 480px) {  
    font-size: 2.5rem;
    width: 50%;
    line-height: 5rem;
  }

`

export const TextoSecundario = styled.p`

    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.015em;
    color: #9E9E9E;
    margin-top: 2.6rem;
    margin-bottom: 15rem;

  @media (max-width: 770px) {
    width: 80%;
  }

  @media (max-width: 620px) {  
    width: 70%;
  }
  @media (max-width: 480px) {  
    width: 50%;
    font-size: 1.6rem;
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

  @media (max-width: 620px) {
    width: 100%;
    p{
      font-size: 1.4rem;
    }
  }
  @media (max-width: 480px) {  
    width: 100%;
    font-size: 1.4rem;
  }


`


export const Main = styled.main`

  width: 80%;
 height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 10rem;
  margin-bottom: 38rem;
  overflow: hidden;

`




