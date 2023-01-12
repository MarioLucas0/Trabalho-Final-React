import styled from 'styled-components'

export const  Section = styled.section`
  width: 100%;
  height: 100%;
  min-height: 75vh;
  display: flex;
  
`
export const  DivContainer = styled.div`
  width: 100%;
  display: flex;
  margin-block: 6rem;
  margin-bottom: 12rem;

  @media(max-width: 1500px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }


`

export const DivLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
 align-items: flex-end;
  h1 {
    width: 64rem;
    height: 15rem;
    font-weight: 700;
    font-size: 5.5rem;
    line-height: 7.5rem;
    letter-spacing: -0.015em;
    color: #263238;
  }
  p {
    width: 51rem;
    height: 7.8rem;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 3.3rem;
    letter-spacing: -0.015em;
    color: #9E9E9E;
    margin-right: 13rem;
  }

  @media(max-width: 1500px) {
    display: none;
  }
`
export const  DivImg = styled.div`
  width: 53rem ;
  height: 47.8rem;
  overflow: hidden;
  img {
   width: 100%;
  }

  


`

export const  DivRight = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 16rem;

  @media(max-width: 1500px) { 
    margin-left: 0;
  }
  @media(max-width: 900px) {
    width: 75%;
  }
  @media(max-width: 600px) {
    width: 85%;
  }
`
export const  DivCard = styled.div`
    width: 55rem;
    height: 78rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding-inline: 5.1rem;
    padding-top: 9.7rem;
  h1 {
    width: 31.7rem;
    height: 6.7rem;
    font-weight: 400;
    font-size: 4.8rem;
    line-height: 6.5rem;
    text-align: center;
    letter-spacing: -0.015em;
    color: #263238;
    padding-inline: 14.7rem;
    margin-bottom: 8.4rem;
  }
  input
   {
    width: 44.9rem;
    height: 5rem;
    padding-left: 1rem;
  }
  p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.5rem;
    letter-spacing: -0.015em;
    color: #407BFF;
    padding-inline: 5.1rem;
    padding-bottom: 10.6rem;
    
  }
  span {
    width: 100rem;
    height: 2.8rem;
    margin-left: -5rem;
 
  }
  .textfinal {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.5rem;
    text-align: center;
    letter-spacing: -0.015em;
    color: #9E9E9E;
  }
  a{
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.5rem;
    text-align: center;
    letter-spacing: -0.015em;
    text-decoration-line: underline;
    color: #407BFF;
    margin-left: 1rem;
  }

  @media(max-width: 1500px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-left: 0;

    input {
      width: 100%;
    }
    h1 {
      width: 100%;
      padding-inline: 1rem;
    }
  }

`
export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
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
  margin-bottom: 2rem;
  p{
    width: 80%;
    font-weight: 700;
    padding: 0;
    font-size: 2.4rem;
    line-height: 3.3rem;
    letter-spacing: -0.015em;
    color: #FFFFFF;
    padding-left: 3rem; 
    display: flex;
    justify-content: center;
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
  @media(max-width: 1500px) {
    width: 100%;
    align-items: center;

    transition: all 0.5s ease-in-out;


  }
`


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;
