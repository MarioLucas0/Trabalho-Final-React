import styled from 'styled-components'

export const DivContainer = styled.div`

width: 105rem;
height: 16rem;
display: flex;
background: #FFFFFF;
border-radius: 10px;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

@media(max-width: 2800px) {
  width: 90%; 
}
@media(max-width: 1850px) {
  width: 80%;
}
@media(max-width: 1350px) {
  width: 80%;
  
}
@media(max-width: 850px) {
  flex-direction: column;
    display: flex;
    height: 40rem;
    align-items: center;
    justify-content: center;
  
}
@media(max-width: 600px) {
  width: 70%;
}






`

export const DivImg = styled.div`

width: 14.9rem;
border: 1px solid #E1E1E1;
display: flex;
align-items: center;
justify-content: center;

img {
  width: 80%;
}

@media(max-width: 850px ) {
  width: 100%;
  border: none;
  border-bottom: 1px solid #E1E1E1;
  overflow: hidden;
  img{
    max-width: 14rem;
  }
}

`


export const DivInfo = styled.div`

width: 100%;
padding: 1.4rem 1.9rem 3.2rem 2.1rem;
 
@media(max-width: 850px) {

  padding: 1.4rem 1.9rem 0 2.1rem;
}


`

export const Categoria = styled.p`

background: #C4C4C4;
border-radius: 10px;
width: 13rem;
height: 2.5rem;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
margin-top: 3rem;

@media(max-width: 1350px) {
  margin-top: 1rem;
}

@media(max-width: 850px) {
  margin-left: 3rem;
}




`

export const H2NomeProduto = styled.h2`

font-weight: 700;
font-size: 1.8rem;
line-height: 2.5rem;
letter-spacing: -0.015em;
color: #263238;
margin-bottom: 0.8rem;

@media(max-width: 1350px) {
  font-size: 1.5rem;
}
@media(max-width: 850px) {
  text-align: center;
  width: 90%;
  font-size: 1.5rem;
}

`



export const DivButtons = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
padding-block: 3.1rem;
padding-right: 1.5rem;

  @media(max-width: 850px) {
  width: 100%;
  display: flex;
  flex-direction: initial;
  justify-content: space-around;
  }

  @media(max-width: 600px) {
   a{
    width: 35%;
   }
}



`

export const ButtonEditar = styled.button`


width: 21.3rem;
height: 3.8rem;
border: 1px solid #E1E1E1;
border-radius: 10px;
font-weight: 700;
background-color: rgba(242, 242, 242, 0.3);
cursor: pointer;

@media(max-width: 600px) {
    width: 100%;
}


`


export const ButtonExcluir = styled.button`

width: 21.3rem;
height: 3.8rem;
border: 1px solid #DF5753;
border-radius: 10px; 
font-weight: 700;
background-color: rgba(242, 242, 242, 0.3);
color: #DF5753;
cursor: pointer;

@media(max-width: 600px) {
 
 width: 35%;

}



`




export const DivPreco = styled.div`

display: flex;
height: 3.5rem;
align-items: center;

p {

font-weight: 400;
font-size: 1.8rem;
line-height: 2.5rem;
letter-spacing: -0.015em;
color: #9E9E9E;
margin-right: 1rem;
}
span {

font-weight: 700;
font-size: 3.2rem;
line-height: 4.4rem;
letter-spacing: -0.015em;
color: #407BFF;

}

@media(max-width: 850px) {

  p{
    font-size: 1.6rem;
    margin-left: 3rem;
  }
  span {
    font-size: 3.2rem;
  }
}

`




  
