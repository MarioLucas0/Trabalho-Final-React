import styled from 'styled-components'

export const Header =  styled.header`

  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background: #407BFF;

  span {

  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.3rem;
  letter-spacing: -0.015em;
  color: #FFFFFF;
  padding-left: 4rem;
  padding-right: 36.3rem;

  }

`
 
export const Nav = styled.nav`

  width: 38.3rem;
  height: 2.6rem;
 

`

export const Ul = styled.ul`

  display: flex;
  gap: 8.5rem;

  li a {
    
      font-style: normal;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.5rem;
      letter-spacing: -0.015em;
      color: rgba(255, 255, 255, 0.5);
    
  }

`